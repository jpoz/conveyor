package storage

import (
	"context"
	"fmt"
	"time"

	"github.com/jpoz/conveyor/wire"
	"github.com/redis/go-redis/v9"
	"google.golang.org/protobuf/proto"
)

type Stats interface {
	// Queues
	ActiveQueues(ctx context.Context) ([]string, error)
	ActiveQueueCount(ctx context.Context) (int64, error)
	PruneActiveQueues(ctx context.Context) error
	CountQueueJobs(ctx context.Context, queue string) (int64, error)
	ListQueueJobs(ctx context.Context, queue string, start, stop int64) ([]*wire.Job, error)

	// Jobs
	ActiveJobCount(ctx context.Context) (int64, error)
	HistoricalJobCount(context.Context, time.Time, Result) (int64, error)

	// Workers
	ActiveWorkerCount(ctx context.Context) (int64, error)
	PruneActiveWorkers(ctx context.Context) error
}

type Result int

const (
	ResultSuccess Result = iota
	ResultError
	ResultFailure
)

func (r Result) String() string {
	switch r {
	case ResultSuccess:
		return "success"
	case ResultError:
		return "error"
	case ResultFailure:
		return "failure"
	}
	return ""
}

func (s *RedisHandler) ActiveJobCount(ctx context.Context) (int64, error) {
	return s.rdb.SCard(ctx, s.ActiveJobsKey()).Result()
}

func (s *RedisHandler) ActiveQueueCount(ctx context.Context) (int64, error) {
	return s.rdb.ZCard(ctx, s.ActiveQueuesKey()).Result()
}

func (s *RedisHandler) ActiveQueues(ctx context.Context) ([]string, error) {
	result, err := s.rdb.ZRange(ctx, s.ActiveQueuesKey(), 0, -1).Result()
	if err != nil {
		return nil, err
	}
	return result, nil
}

func (s *RedisHandler) CountQueueJobs(ctx context.Context, queue string) (int64, error) {
	return s.rdb.LLen(ctx, s.QueueKey(queue)).Result()
}

func (s *RedisHandler) ListQueueJobs(ctx context.Context, queue string, start, stop int64) ([]*wire.Job, error) {
	jobBts, err := s.rdb.LRange(ctx, s.QueueKey(queue), start, stop).Result()
	if err != nil {
		return nil, err
	}

	jobs := make([]*wire.Job, len(jobBts))
	for i, bts := range jobBts {
		jobs[i] = &wire.Job{}
		err = proto.Unmarshal([]byte(bts), jobs[i])
		if err != nil {
			return nil, fmt.Errorf("failed to unmarshal job: %v", err)
		}
	}

	return jobs, nil
}

func (s *RedisHandler) ActiveWorkerCount(ctx context.Context) (int64, error) {
	return s.rdb.ZCard(ctx, s.ActiveWorkersKey()).Result()
}

func (s *RedisHandler) HistoricalJobCount(ctx context.Context, t time.Time, result Result) (int64, error) {
	key := s.HistoricalResultKey(t, result)

	val, err := s.rdb.Get(ctx, key).Int64()
	if err == redis.Nil {
		// Key does not exist
		return 0, nil
	} else if err != nil {
		return 0, fmt.Errorf("could not get count for key %s: %w", key, err)
	}

	return val, nil
}

// PruneActiveQueues will remove queues that haven't pinned a job in the last 30 seconds
func (s *RedisHandler) PruneActiveQueues(ctx context.Context) error {
	s.log.Debug("Pruning active queues")
	err := s.rdb.ZRemRangeByScore(ctx, s.ActiveQueuesKey(), "-inf", fmt.Sprintf("%d", time.Now().Unix()-30)).Err()
	if err != nil {
		return fmt.Errorf("could not prune active queues: %w", err)
	}
	return nil
}

func (s *RedisHandler) PruneActiveWorkers(ctx context.Context) error {
	s.log.Debug("Pruning active workers")
	err := s.rdb.ZRemRangeByScore(ctx, s.ActiveWorkersKey(), "-inf", fmt.Sprintf("%d", time.Now().Unix()-30)).Err()
	if err != nil {
		return fmt.Errorf("could not prune active queues: %w", err)
	}
	return nil
}

func (s *RedisHandler) addActiveJob(ctx context.Context, job *wire.Job) error {
	err := s.rdb.SAdd(ctx, s.ActiveJobsKey(), job.Uuid).Err()
	if err != nil {
		return err
	}

	return nil
}

func (s *RedisHandler) queueCheckIn(ctx context.Context, queue string) error {
	err := s.rdb.ZAdd(ctx, s.ActiveQueuesKey(), redis.Z{
		Score:  float64(time.Now().Unix()),
		Member: queue,
	}).Err()

	if err != nil {
		return fmt.Errorf("could not add queue to active queues: %w", err)
	}
	return nil
}

func (s *RedisHandler) workerCheckIn(ctx context.Context, workerID string) error {
	err := s.rdb.ZAdd(ctx, s.ActiveWorkersKey(), redis.Z{
		Score:  float64(time.Now().Unix()),
		Member: workerID,
	}).Err()

	if err != nil {
		return fmt.Errorf("could not add queue to active queues: %w", err)
	}
	return nil
}

func (s *RedisHandler) removeActiveJob(ctx context.Context, job *wire.Job, result Result) error {
	err := s.rdb.SRem(ctx, s.ActiveJobsKey(), job.Uuid).Err()
	if err != nil {
		return err
	}

	err = s.incrResult(ctx, result)
	if err != nil {
		return fmt.Errorf("could not increment result: %w", err)
	}

	return nil
}

func (s *RedisHandler) incrResult(ctx context.Context, result Result) error {
	key := s.HistoricalResultKey(time.Now(), result)

	err := s.rdb.Incr(ctx, key).Err()
	if err != nil {
		return fmt.Errorf("could not increment count: %w", err)
	}

	err = s.rdb.Expire(ctx, key, 1*time.Hour).Err()
	if err != nil {
		return fmt.Errorf("could not set expiry: %w", err)
	}

	return nil
}
