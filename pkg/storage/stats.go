package storage

import (
	"context"
	"fmt"
	"time"

	"github.com/jpoz/conveyor/wire"
	"github.com/redis/go-redis/v9"
)

type Stats interface {
	// Queues
	ActiveQueueCount(ctx context.Context) (int64, error)
	PruneActiveQueues(ctx context.Context) error

	// Jobs
	ActiveJobCount(ctx context.Context) (int64, error)
	GetJobCount(context.Context, time.Time, Result) (int64, error)

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
	return s.rdb.SCard(ctx, activeJobsKey).Result()
}

func (s *redisHandler) ActiveQueueCount(ctx context.Context) (int64, error) {
	return s.rdb.ZCard(ctx, activeQueuesKey).Result()
}

func (s *redisHandler) ActiveWorkerCount(ctx context.Context) (int64, error) {
	return s.rdb.ZCard(ctx, activeWorkersKey).Result()
}

func (s *redisHandler) GetJobCount(ctx context.Context, t time.Time, result Result) (int64, error) {
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
	err := s.rdb.ZRemRangeByScore(ctx, activeQueuesKey, "-inf", fmt.Sprintf("%d", time.Now().Unix()-30)).Err()
	if err != nil {
		return fmt.Errorf("could not prune active queues: %w", err)
	}
	return nil
}

func (s *redisHandler) PruneActiveWorkers(ctx context.Context) error {
	s.log.Debug("Pruning active workers")
	err := s.rdb.ZRemRangeByScore(ctx, activeWorkersKey, "-inf", fmt.Sprintf("%d", time.Now().Unix()-30)).Err()
	if err != nil {
		return fmt.Errorf("could not prune active queues: %w", err)
	}
	return nil
}

func (s *redisHandler) addActiveJob(ctx context.Context, job *wire.Job) error {
	err := s.rdb.SAdd(ctx, activeJobsKey, job.Uuid).Err()
	if err != nil {
		return err
	}

	err = s.queueCheckIn(ctx, job.Queue)
	if err != nil {
		return err
	}

	return nil
}

func (s *redisHandler) queueCheckIn(ctx context.Context, queue string) error {
	err := s.rdb.ZAdd(ctx, activeQueuesKey, redis.Z{
		Score:  float64(time.Now().Unix()),
		Member: queue,
	}).Err()

	if err != nil {
		return fmt.Errorf("could not add queue to active queues: %w", err)
	}
	return nil
}

func (s *redisHandler) workerCheckIn(ctx context.Context, workerID string) error {
	err := s.rdb.ZAdd(ctx, activeWorkersKey, redis.Z{
		Score:  float64(time.Now().Unix()),
		Member: workerID,
	}).Err()

	if err != nil {
		return fmt.Errorf("could not add queue to active queues: %w", err)
	}
	return nil
}

func (s *redisHandler) removeActiveJob(ctx context.Context, job *wire.Job, result Result) error {
	err := s.rdb.SRem(ctx, activeJobsKey, job.Uuid).Err()
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
