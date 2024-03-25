package storage

import (
	"context"
	"fmt"
	"time"

	"github.com/google/uuid"
	"github.com/jpoz/conveyor/wire"
	"github.com/redis/go-redis/v9"
)

func (s *RedisHandler) AddJob(ctx context.Context, job *wire.Job) error {
	return s.add(ctx, job, false)
}

func (s *RedisHandler) add(ctx context.Context, job *wire.Job, deadParent bool) error {
	if job == nil {
		return ErrNoJob
	}

	if job.Uuid == "" {
		job.Uuid = uuid.New().String()
	}

	jobBytes, err := marshalJob(job)
	if err != nil {
		return fmt.Errorf("add failed to marshal job: %v", err)
	}

	if job.ParentUuid != "" && !deadParent {
		// Parent is still running, add to children list
		err = s.rdb.LPush(ctx, s.ChildenListKey(job.ParentUuid), jobBytes).Err()
		if err != nil {
			return fmt.Errorf("%w add failed to add to children list: %v", ErrFatalError, err)
		}
		return nil
	} else if job.PredecessorUuid != "" && !deadParent {
		// Parent is still running, add to onComplete list
		err = s.rdb.LPush(ctx, s.OnCompleteListKey(job.PredecessorUuid), jobBytes).Err()
		if err != nil {
			return err
		}
		return nil
	} else if job.RunAt != nil {
		if job.RunAt.AsTime().After(time.Now()) {
			return s.rdb.ZAdd(
				ctx,
				s.ScheduledJobsKey(),
				redis.Z{
					Score:  float64(job.RunAt.AsTime().Unix()),
					Member: jobBytes,
				},
			).Err()
		}
	}

	if job.ParentUuid != "" {
		// Parent is dead, add to children set to keep track of which
		// children are still running
		err = s.rdb.SAdd(ctx, s.ChildenSetKey(job.ParentUuid), job.Uuid).Err()
		if err != nil {
			return err
		}
	}

	key := s.QueueKey(job.Queue)
	err = s.rdb.LPush(ctx, key, jobBytes).Err()
	if err != nil {
		return fmt.Errorf("%w failed to add to job to queue: %v", ErrFatalError, err)
	}

	return nil
}
