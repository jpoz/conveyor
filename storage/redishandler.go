package storage

import (
	"fmt"
	"log/slog"

	"github.com/redis/go-redis/v9"
	"google.golang.org/protobuf/proto"

	"github.com/jpoz/conveyor/config"
	"github.com/jpoz/conveyor/wire"
)

const DefaultMaxRetries int32 = 3

type RedisHandler struct {
	Namespace string
	rdb       *redis.Client
	log       *slog.Logger
}

func NewRedisHandler(cfg config.RedisConfig) (Handler, error) {
	log := cfg.GetLogger()
	opt, err := redis.ParseURL(cfg.GetRedisURL())
	if err != nil {
		log.Error("failed to parse redis url", slog.Any("error", err))
		return nil, fmt.Errorf("RedisHandler failed to parse redis url: %w", err)
	}

	rdb := redis.NewClient(opt)

	return &RedisHandler{
		rdb:       rdb,
		log:       log.With(slog.String("handler", "redis")),
		Namespace: cfg.GetNamespace(),
	}, nil
}

func (s *RedisHandler) Close() error {
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
