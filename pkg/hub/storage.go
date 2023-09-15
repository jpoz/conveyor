package hub

import (
	context "context"
	"errors"
	"fmt"
	"time"

	"github.com/jpoz/protojob/wire"
	"github.com/redis/go-redis/v9"
	"github.com/sirupsen/logrus"
	"google.golang.org/protobuf/proto"
)

var ErrNoJob = errors.New("the job given was nil")
var ErrNoQueue = errors.New("the queue in the job is blank, there must be a queue")
var ErrNoType = errors.New("there was no type given in the job")
var ErrParentIsMissing = errors.New("a child job's parent is no longer set")

type StorageHandler interface {
	GetJob(ctx context.Context, uuid string) (*wire.Job, error)
	AddJob(ctx context.Context, job *wire.Job) error
	Pop(ctx context.Context, queues ...string) (*wire.Job, error)
	CloseJob(ctx context.Context, job *wire.Job) (bool, error)

	FailJob(ctx context.Context, uuid string) error
}

type redisStorageHandler struct {
	rdb *redis.Client
	log *logrus.Entry
}

func NewRedisStorageHandler(log *logrus.Logger, client *redis.Client) StorageHandler {
	return &redisStorageHandler{
		rdb: client,
		log: log.WithField("storage", "redis"),
	}
}

func (s *redisStorageHandler) GetJob(ctx context.Context, uuid string) (*wire.Job, error) {
	jobBytes, err := s.rdb.Get(ctx, jobKey(uuid)).Result()
	if err == redis.Nil {
		return nil, nil
	}
	if err != nil {
		return nil, err
	}

	job := &wire.Job{}
	err = proto.Unmarshal([]byte(jobBytes), job)
	if err != nil {
		return nil, err
	}

	return job, nil
}

func (s *redisStorageHandler) Pop(ctx context.Context, queues ...string) (*wire.Job, error) {
	s.log.Debugf("Popping jobs from queues: %#v", queues)
	payload, err := s.rdb.BRPop(ctx, 2*time.Second, queues...).Result()
	if err == redis.Nil {
		return nil, nil
	}
	if err != nil {
		return nil, err
	}

	s.log.Debugf("Popped job off: %#v %s", payload[0], payload[1])

	job := &wire.Job{}
	err = proto.Unmarshal([]byte(payload[1]), job)
	if err != nil {
		return nil, err
	}

	err = s.rdb.Set(ctx, jobKey(job.Uuid), payload[1], 0).Err()
	if err != nil {
		return nil, err
	}

	return job, nil
}

func (s *redisStorageHandler) AddJob(ctx context.Context, job *wire.Job) error {
	return s.add(ctx, job, false)
}

func (s *redisStorageHandler) add(ctx context.Context, job *wire.Job, deadParent bool) error {
	jobBytes, err := marshalJob(job)
	if err != nil {
		return fmt.Errorf("add failed to marshal job: %v", err)
	}

	s.log.
		WithFields(logrus.Fields{
			"job":         job.Type,
			"uuid":        job.Uuid,
			"queue":       job.Queue,
			"predecessor": job.PredecessorUuid,
			"parent":      job.ParentUuid,
			"deadParent":  deadParent,
		}).
		Debugf("Adding job")

	if job.ParentUuid != "" {
		err = s.rdb.SAdd(ctx, childenSetKey(job.ParentUuid), job.Uuid).Err()
		if err != nil {
			return err
		}
	} else if job.PredecessorUuid != "" && !deadParent {
		// Parent is still running, add to heir list
		err = s.rdb.LPush(ctx, heirListKey(job.PredecessorUuid), jobBytes).Err()
		if err != nil {
			return err
		}
		return nil
	}

	err = s.rdb.LPush(ctx, job.Queue, jobBytes).Err()
	if err != nil {
		return err
	}

	return nil

}

func (s *redisStorageHandler) CloseJob(ctx context.Context, job *wire.Job) (bool, error) {
	childCount, err := s.rdb.SCard(ctx, childenSetKey(job.Uuid)).Result()
	if err != redis.Nil {
		if err != nil {
			return false, err
		}
		if childCount > 0 {
			// children are still running
			return false, nil
		}
	}

	// Parent is dead, enqueue to heir their queuse
	for {
		heirJobBytes, err := s.rdb.RPop(ctx, heirListKey(job.Uuid)).Result()
		if err == redis.Nil {
			break
		}
		if err != nil {
			return false, err
		}

		heirJob := &wire.Job{}
		err = proto.Unmarshal([]byte(heirJobBytes), heirJob)
		if err != nil {
			return false, err
		}

		if job.ParentUuid != "" {
			heirJob.ParentUuid = job.ParentUuid
		}

		err = s.add(ctx, heirJob, true)
		if err != nil {
			return false, fmt.Errorf("could not add heir job: %w", err)
		}
	}

	// Kill parent if all children are closed
	if job.ParentUuid != "" {
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

		_, err = s.CloseJob(ctx, parentJob)
		if err != nil {
			return false, err
		}
	}

	err = s.rdb.Del(ctx, jobKey(job.Uuid)).Err()
	if err != nil {
		return false, err
	}

	s.log.
		WithField("uuid", job.Uuid).
		WithField("queue", job.Queue).
		WithField("type", job.Type).
		Debug("Closed")

	return true, nil
}

func (s *redisStorageHandler) FailJob(ctx context.Context, uuid string) error {
	str, err := s.rdb.Get(ctx, jobKey(uuid)).Result()
	if err != nil {
		return err
	}

	job := &wire.Job{}
	err = proto.Unmarshal([]byte(str), job)
	if err != nil {
		return err
	}

	return nil
}

func marshalJob(job *wire.Job) ([]byte, error) {
	if job == nil {
		return nil, ErrNoJob
	}
	if job.Queue == "" {
		return nil, ErrNoQueue
	}
	if job.Type == "" {
		return nil, ErrNoType
	}

	return proto.Marshal(job)
}
