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

func (s *redisHandler) ActiveJobCount(ctx context.Context) (int64, error) {
	return s.rdb.SCard(ctx, ActiveJobsKey).Result()
}

func (s *redisHandler) ActiveQueueCount(ctx context.Context) (int64, error) {
	return s.rdb.ZCard(ctx, ActiveQueuesKey).Result()
}

func (s *redisHandler) ActiveQueues(ctx context.Context) ([]string, error) {
	result, err := s.rdb.ZRange(ctx, ActiveQueuesKey, 0, -1).Result()
	if err != nil {
		return nil, err
	}
	return result, nil
}

func (s *redisHandler) CountQueueJobs(ctx context.Context, queue string) (int64, error) {
	return s.rdb.LLen(ctx, QueueKey(queue)).Result()
}

func (s *redisHandler) ListQueueJobs(ctx context.Context, queue string, start, stop int64) ([]*wire.Job, error) {
	jobBts, err := s.rdb.LRange(ctx, QueueKey(queue), start, stop).Result()
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

func (s *redisHandler) ActiveWorkerCount(ctx context.Context) (int64, error) {
	return s.rdb.ZCard(ctx, ActiveWorkersKey).Result()
}

func (s *redisHandler) HistoricalJobCount(ctx context.Context, t time.Time, result Result) (int64, error) {
	key := fmt.Sprintf("%s:%s", result.String(), t.Format("2006-01-02_15:04"))

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
func (s *redisHandler) PruneActiveQueues(ctx context.Context) error {
	s.log.Debug("Pruning active queues")
	err := s.rdb.ZRemRangeByScore(ctx, ActiveQueuesKey, "-inf", fmt.Sprintf("%d", time.Now().Unix()-30)).Err()
	if err != nil {
		return fmt.Errorf("could not prune active queues: %w", err)
	}
	return nil
}

func (s *redisHandler) PruneActiveWorkers(ctx context.Context) error {
	s.log.Debug("Pruning active workers")
	err := s.rdb.ZRemRangeByScore(ctx, ActiveWorkersKey, "-inf", fmt.Sprintf("%d", time.Now().Unix()-30)).Err()
	if err != nil {
		return fmt.Errorf("could not prune active queues: %w", err)
	}
	return nil
}

func (s *redisHandler) addActiveJob(ctx context.Context, job *wire.Job) error {
	err := s.rdb.SAdd(ctx, ActiveJobsKey, job.Uuid).Err()
	if err != nil {
		return err
	}

	return nil
}

func (s *redisHandler) queueCheckIn(ctx context.Context, queue string) error {
	err := s.rdb.ZAdd(ctx, ActiveQueuesKey, redis.Z{
		Score:  float64(time.Now().Unix()),
		Member: queue,
	}).Err()

	if err != nil {
		return fmt.Errorf("could not add queue to active queues: %w", err)
	}
	return nil
}

func (s *redisHandler) workerCheckIn(ctx context.Context, workerID string) error {
	err := s.rdb.ZAdd(ctx, ActiveWorkersKey, redis.Z{
		Score:  float64(time.Now().Unix()),
		Member: workerID,
	}).Err()

	if err != nil {
		return fmt.Errorf("could not add queue to active queues: %w", err)
	}
	return nil
}

func (s *redisHandler) removeActiveJob(ctx context.Context, job *wire.Job, result Result) error {
	err := s.rdb.SRem(ctx, ActiveJobsKey, job.Uuid).Err()
	if err != nil {
		return err
	}

	err = s.incrResult(ctx, result)
	if err != nil {
		return fmt.Errorf("could not increment result: %w", err)
	}

	return nil
}

func (s *redisHandler) incrResult(ctx context.Context, result Result) error {
	key := fmt.Sprintf("%s:%s", result.String(), time.Now().Format("2006-01-02_15:04"))

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
