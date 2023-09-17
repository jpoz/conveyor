package storage

import (
	context "context"
	"time"

	"github.com/jpoz/protojob/wire"
	"github.com/redis/go-redis/v9"
	"github.com/sirupsen/logrus"
	"google.golang.org/protobuf/proto"
)

const DefaultMaxRetries int32 = 3

type redisHandler struct {
	rdb          *redis.Client
	log          *logrus.Entry
	scheduledKey string
	failedKey    string
}

func NewRedisHandler(log *logrus.Logger, client *redis.Client) Handler {
	return &redisHandler{
		rdb:          client,
		log:          log.WithField("storage", "redis"),
		scheduledKey: "scheduled",
		failedKey:    "failed",
	}
}

func (s *redisHandler) FailJob(ctx context.Context, uuid string) error {
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

func (s *redisHandler) setJob(ctx context.Context, uuid string, jobBytes []byte) error {
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
