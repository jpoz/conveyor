package storage

import (
	context "context"
	"fmt"

	"github.com/jpoz/protojob/wire"
	"github.com/redis/go-redis/v9"
	"google.golang.org/protobuf/proto"
)

func (s *redisHandler) CloseJob(ctx context.Context, job *wire.Job) (bool, error) {
	log := s.log.
		WithField("uuid", job.Uuid).
		WithField("queue", job.Queue).
		WithField("type", job.Type).
		WithField("parent", job.ParentUuid)

	hadChildren := false

	// Parent is dead, enqueue to children
	// TODO: if we have a very fast child, this could be called again while the
	// first close is still running. Which would mean multiple go routines would be
	// adding childen jobs. I think that's okay, but needs testing.
	for {
		childJobBytes, err := s.rdb.RPop(ctx, childenListKey(job.Uuid)).Result()
		if err == redis.Nil {
			log.Debug("No more children")
			break
		}
		if err != nil {
			return false, err
		}

		childJob := &wire.Job{}
		err = proto.Unmarshal([]byte(childJobBytes), childJob)
		if err != nil {
			return false, err
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
	childCount, err := s.rdb.SCard(ctx, childenSetKey(job.Uuid)).Result()
	if err != redis.Nil {
		if err != nil {
			return false, err
		}
		if childCount > 0 {
			// children are still running
			log.Debug("Children are still running")
			return false, nil
		}
	}

	// Parent is dead, childen are complete, enqueue to onComplete jobs
	for {
		onCompleteJobBytes, err := s.rdb.RPop(ctx, onCompleteListKey(job.Uuid)).Result()
		if err == redis.Nil {
			log.Debug("No more onComplete jobs")
			break
		}
		if err != nil {
			return false, err
		}

		onCompleteJob := &wire.Job{}
		err = proto.Unmarshal([]byte(onCompleteJobBytes), onCompleteJob)
		if err != nil {
			return false, err
		}

		log.Debug("Adding onComplete job")
		err = s.add(ctx, onCompleteJob, true)
		if err != nil {
			return false, fmt.Errorf("could not add onComplete job: %w", err)
		}
	}

	// If the job has a parent, remove itself from the children, close the parent
	if job.ParentUuid != "" {
		log.Debug("Removing job from children")
		err = s.rdb.SRem(ctx, childenSetKey(job.ParentUuid), job.Uuid).Err()
		if err != nil {
			return false, err
		}

		parentJob, err := s.GetJob(ctx, job.ParentUuid)
		if err != nil {
			return false, fmt.Errorf("could not get parent job: %w", err)
		}
		if parentJob == nil {
			return false, ErrNoJob
		}

		log.Debug("Closing parent")
		_, err = s.CloseJob(ctx, parentJob)
		if err != nil {
			return false, err
		}
	}

	err = s.rdb.Del(ctx, jobKey(job.Uuid)).Err()
	if err != nil {
		return false, err
	}

	log.Debug("Job closed")
	return true, nil
}
