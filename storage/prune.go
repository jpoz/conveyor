package storage

import (
	"context"
	"fmt"
	"log/slog"
	"time"

	"github.com/redis/go-redis/v9"
)

func (s *RedisHandler) PruneActiveWorkers(ctx context.Context, duration time.Duration) error {
	s.log.Info("Pruning active workers list")

	// Define the score range for inactive workers
	scoreMax := fmt.Sprintf("%d", time.Now().Add(-duration).Unix())

	// Retrieve the list of inactive workers
	inactiveWorkers, err := s.rdb.ZRangeByScore(ctx, s.ActiveWorkersKey(), &redis.ZRangeBy{
		Min: "-inf",
		Max: scoreMax,
	}).Result()
	if err != nil {
		return fmt.Errorf("could not get inactive workers: %w", err)
	}

	s.log.Info("Inactive workers", slog.Any("workers", inactiveWorkers))

	for _, workerID := range inactiveWorkers {
		// s.log.Info("Pruning inactive worker", slog.String("worker_id", workerID))

		// Get active jobs for the worker
		jobUuid, err := s.rdb.SPop(ctx, s.WorkerActiveJobsKey(workerID)).Result()
		if err != nil && err != redis.Nil {
			return fmt.Errorf("could not get active jobs for worker %s: %w", workerID, err)
		}

		for jobUuid != "" {
			s.log.Info("adding active job for worker", slog.String("worker_id", workerID), slog.String("job_uuid", jobUuid))
			// Requeue the job
			err = s.RestartJob(ctx, jobUuid)
			if err != nil {
				return fmt.Errorf("could not restart the job %s: %w", jobUuid, err)
			}

			jobUuid, err = s.rdb.SPop(ctx, s.WorkerActiveJobsKey(workerID)).Result()
			if err != nil && err != redis.Nil {
				return fmt.Errorf("could not get active jobs for worker %s: %w", workerID, err)
			}
		}
	}

	if len(inactiveWorkers) > 0 {
		// Convert the slice of strings to a slice of interface{}
		members := make([]interface{}, len(inactiveWorkers))
		for i, v := range inactiveWorkers {
			members[i] = v
		}
		err = s.rdb.ZRem(ctx, s.ActiveWorkersKey(), members...).Err()
		if err != nil {
			return fmt.Errorf("could not remove inactive workers: %w", err)
		}
	}

	// TODO: move this to just a stats call
	// Count the active workers after pruning
	err = s.countWorkers(ctx)
	if err != nil {
		return fmt.Errorf("could not count workers: %w", err)
	}

	return nil
}
