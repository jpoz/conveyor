package storage

import (
	context "context"
	"fmt"
	"log/slog"

	"github.com/jpoz/conveyor/wire"
	"github.com/redis/go-redis/v9"
	"google.golang.org/protobuf/proto"
)

func (s *RedisHandler) CloseJob(ctx context.Context, workerUuid string, job *wire.Job) (bool, error) {
	log := s.log.With(
		slog.String("uuid", job.Uuid),
		slog.String("queue", job.Queue),
		slog.String("type", job.Type),
		slog.String("parent", job.ParentUuid),
	)

	// Remove from active jobs
	err := s.rdb.SRem(ctx, s.WorkerActiveJobsKey(workerUuid), job.Uuid).Err()
	if err != nil {
		log.Error("could not remove active job", slog.Any("error", err), slog.String("uuid", job.Uuid), slog.String("worker", workerUuid))
		return false, fmt.Errorf("[worker: %s] could not remove active job %s: %w", workerUuid, job.Uuid, err)
	}

	hadChildren := false

	// Parent is dead, enqueue to children
	// TODO: if we have a very fast child, this could be called again while the
	// first close is still running. Which would mean multiple go routines would be
	// adding childen jobs. I think that's okay, but needs testing.
	for {
		childJobBytes, err := s.rdb.RPop(ctx, s.ChildenListKey(job.Uuid)).Result()
		if err == redis.Nil {
			log.Debug("No more children")
			break
		}
		if err != nil {
			return false, fmt.Errorf("%w getting child jobs: %s", ErrFatalError, err)
		}

		childJob := &wire.Job{}
		err = proto.Unmarshal([]byte(childJobBytes), childJob)
		if err != nil {
			return false, fmt.Errorf("%w invalid child payload: %s", ErrFatalError, err)
		}

		log.Debug("Adding child")
		err = s.add(ctx, childJob, true)
		if err != nil {
			return false, fmt.Errorf("could not add child job: %w", err)
		}
		hadChildren = true
	}

	// Exit early since we know the childen will call closed on the parent
	if hadChildren {
		log.Debug("Had children")
		return false, nil
	}

	// Close will be called each time a child job is closed
	// Even if no new child jobs are added, we still want to
	// check if there are any children still running
	childCount, err := s.rdb.SCard(ctx, s.ChildenSetKey(job.Uuid)).Result()
	if err != redis.Nil {
		if err != nil {
			return false, fmt.Errorf("%w getting child count: %s", ErrFatalError, err)
		}
		if childCount > 0 {
			// children are still running
			log.Debug("Children are still running")
			return false, nil
		}
	}

	// Parent is dead, childen are complete, enqueue to onComplete jobs
	for {
		onCompleteJobBytes, err := s.rdb.RPop(ctx, s.OnCompleteListKey(job.Uuid)).Result()
		if err == redis.Nil {
			log.Debug("No more onComplete jobs")
			break
		}
		if err != nil {
			return false, fmt.Errorf("%w getting onComplete jobs: %s", ErrFatalError, err)
		}

		onCompleteJob := &wire.Job{}
		err = proto.Unmarshal([]byte(onCompleteJobBytes), onCompleteJob)
		if err != nil {
			return false, fmt.Errorf("%w invalid onComplete payload: %s", ErrFatalError, err)
		}

		log.Debug("Adding onComplete job")
		err = s.add(ctx, onCompleteJob, true)
		if err != nil {
			return false, fmt.Errorf("could not add onComplete job: %w", err)
		}
	}

	parentClosed := false

	// If the job has a parent, remove itself from the children, close the parent
	if job.ParentUuid != "" {
		log.Debug("Removing job from children")
		err = s.rdb.SRem(ctx, s.ChildenSetKey(job.ParentUuid), job.Uuid).Err()
		if err != nil {
			return false, err
		}

		parentJob, err := s.GetActiveJob(ctx, job.ParentUuid)
		if err != nil {
			return false, fmt.Errorf("could not get parent job: %w", err)
		}
		if parentJob == nil {
			return false, ErrNoJob
		}

		log.Debug("Closing parent")
		parentClosed, err = s.CloseJob(ctx, workerUuid, parentJob)
		if err != nil {
			return false, err
		}
	} else {
		parentClosed = true
	}

	err = s.removeActiveJob(ctx, job, ResultSuccess)
	if err != nil {
		return false, fmt.Errorf("could not remove job from active jobs: %w", err)
	}

	err = s.rdb.Del(ctx, s.JobKey(job.Uuid)).Err()
	if err != nil {
		return false, err
	}
	log.Debug("Job closed")

	return parentClosed, nil
}
