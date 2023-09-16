package hub

import (
	context "context"
	"errors"
	"fmt"
	"time"

	"github.com/google/uuid"
	"github.com/jpoz/protojob/wire"
	"github.com/redis/go-redis/v9"
	"github.com/sirupsen/logrus"
	"google.golang.org/protobuf/proto"
)

const DefaultMaxRetries int32 = 3

var ErrNoJob = errors.New("the job given was nil")
var ErrMissingPayload = errors.New("there was no payload in the job")
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
	rdb          *redis.Client
	log          *logrus.Entry
	scheduledKey string
	failedKey    string
}

func NewRedisStorageHandler(log *logrus.Logger, client *redis.Client) StorageHandler {
	return &redisStorageHandler{
		rdb:          client,
		log:          log.WithField("storage", "redis"),
		scheduledKey: "scheduled",
		failedKey:    "failed",
	}
}

func (s *redisStorageHandler) GetJob(ctx context.Context, uuid string) (*wire.Job, error) {
	jobBytes, err := s.rdb.Get(ctx, jobKey(uuid)).Result()
	if err == redis.Nil {
		return nil, nil
	}
	if err != nil {
		return nil, fmt.Errorf("failed to get job from redis: %v", err)
	}

	job := &wire.Job{}
	err = proto.Unmarshal([]byte(jobBytes), job)
	if err != nil {
		return nil, fmt.Errorf("failed to unmarshal job: %v", err)
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

	err = s.setJob(ctx, job.Uuid, []byte(payload[1]))
	if err != nil {
		return nil, fmt.Errorf("failed to store job in redis: %v", err)
	}

	return job, nil
}

func (s *redisStorageHandler) AddJob(ctx context.Context, job *wire.Job) error {
	return s.add(ctx, job, false)
}

func (s *redisStorageHandler) add(ctx context.Context, job *wire.Job, deadParent bool) error {
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
		err = s.rdb.LPush(ctx, childenListKey(job.ParentUuid), jobBytes).Err()
		if err != nil {
			return err
		}
		return nil
	} else if job.PredecessorUuid != "" && !deadParent {
		// Parent is still running, add to onComplete list
		err = s.rdb.LPush(ctx, onCompleteListKey(job.PredecessorUuid), jobBytes).Err()
		if err != nil {
			return err
		}
		return nil
	} else if job.RunAt != nil {
		panic("RunAt is not supported")
	}

	if job.ParentUuid != "" {
		// Parent is dead, add to children set to keep track of which
		// children are still running
		err = s.rdb.SAdd(ctx, childenSetKey(job.ParentUuid), job.Uuid).Err()
		if err != nil {
			return err
		}
	}

	err = s.rdb.LPush(ctx, job.Queue, jobBytes).Err()
	if err != nil {
		return err
	}

	return nil
}

func (s *redisStorageHandler) CloseJob(ctx context.Context, job *wire.Job) (bool, error) {
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

	maxRetries := DefaultMaxRetries
	if job.MaxRetries != 0 {
		maxRetries = job.MaxRetries
	}

	if job.Retry >= maxRetries {
		// already failed
		// TODO send to failed queue
		return nil
	}

	retryAt := time.Now().Add(RetryIn(job))
	job.Retry++

	jobBytes, err := marshalJob(job)
	if err != nil {
		return err
	}

	pipe := s.rdb.Pipeline()

	pipe.Del(ctx, jobKey(uuid))
	pipe.Del(ctx, onCompleteListKey(uuid))
	pipe.ZAdd(ctx, s.failedKey, redis.Z{Score: float64(retryAt.Unix()), Member: jobBytes})

	cmdErrs, err := pipe.Exec(ctx)
	if err != nil {
		return err
	}
	for _, err := range cmdErrs {
		if err != nil {
			return err.Err()
		}
	}

	return nil
}

func (s *redisStorageHandler) setJob(ctx context.Context, uuid string, jobBytes []byte) error {
	err := s.rdb.Set(ctx, jobKey(uuid), jobBytes, 0).Err()
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
