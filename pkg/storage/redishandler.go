package storage

import (
	context "context"

	"github.com/jpoz/conveyor/wire"
	"github.com/redis/go-redis/v9"
	"github.com/sirupsen/logrus"
	"google.golang.org/protobuf/proto"
)

const DefaultMaxRetries int32 = 3

type redisHandler struct {
	rdb *redis.Client
	log *logrus.Entry
}

func NewRedisHandler(log *logrus.Logger, client *redis.Client) Handler {
	return &redisHandler{
		rdb: client,
		log: log.WithField("storage", "redis"),
	}
}

func (s *redisHandler) setJob(ctx context.Context, uuid string, jobBytes []byte) error {
	err := s.rdb.Set(ctx, jobKey(uuid), jobBytes, 0).Err()
	if err != nil {
		return err
	}

	return nil
}

func (s *redisHandler) Ping(ctx context.Context) error {
	return s.rdb.Ping(ctx).Err()
}

func (s *redisHandler) Close() error {
	return s.rdb.Close()
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
