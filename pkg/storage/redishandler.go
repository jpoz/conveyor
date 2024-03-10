package storage

import (
	context "context"
	"fmt"
	"log/slog"

	"github.com/jpoz/conveyor/wire"
	"github.com/redis/go-redis/v9"
	"google.golang.org/protobuf/proto"
)

const DefaultMaxRetries int32 = 3

type redisHandler struct {
	rdb *redis.Client
	log *slog.Logger
}

func NewRedisHandler(log *slog.Logger, redisAddr string) (Handler, error) {
	opt, err := redis.ParseURL(redisAddr)
	if err != nil {
		log.Error("failed to parse redis url", slog.Any("error", err))
		return nil, fmt.Errorf("RedisHandler failed to parse redis url: %w", err)
	}

	rdb := redis.NewClient(opt)

	return &redisHandler{
		rdb: rdb,
		log: log.With(slog.String("handler", "redis")),
	}, nil
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
