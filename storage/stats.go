package storage

import (
	"context"
	"fmt"
	"time"

	"github.com/jpoz/protojob/wire"
	"github.com/redis/go-redis/v9"
)

type Stats interface {
	ActiveQueueCount(ctx context.Context) (int64, error)
	PruneActiveQueues(ctx context.Context) error

	ActiveJobCount(ctx context.Context) (int64, error)
	// ActiveJobs(ctx context.Context) ([]*wire.Job, error)
	// ActiveQueues(ctx context.Context) ([]string, error)

	GetLastHourStats(ctx context.Context, result Result) (map[string]int64, error)
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
func (s *redisHandler) GetLastHourStats(ctx context.Context, result Result) (map[string]int64, error) {
	stats := make(map[string]int64)

	// Generate keys for the last 60 minutes
	currentTime := time.Now()
	for i := 0; i < 60; i++ {
		key := fmt.Sprintf("%s:%s", result.String(), currentTime.Add(time.Duration(-i)*time.Minute).Format("2006-01-02_15:04"))

		// Fetch the value from Redis
		val, err := s.rdb.Get(ctx, key).Int64()
		if err == redis.Nil {
			// Key does not exist; skip this minute
			continue
		} else if err != nil {
			return nil, fmt.Errorf("could not get count for key %s: %w", key, err)
		}

		// Add to stats
		stats[key] = val
	}

	return stats, nil
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
