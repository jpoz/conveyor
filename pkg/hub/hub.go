package hub

import (
	"log/slog"

	"github.com/jpoz/conveyor/pkg/storage"
	"github.com/redis/go-redis/v9"
)

const (
	DefaultMaxRetries = 5
)

type Config struct {
	Addr     string `yaml:"addr"`
	RedisURL string `yaml:"redisURL" json:"redisURL"`
}

type Server struct {
	slog    *slog.Logger
	config  Config
	storage storage.Handler
}

func NewServer(log slog.Logger, config Config) (*Server, error) {
	l := log.With(slog.String("server", "hub"))

	rb, err := redis.NewClient(config.RedisURL)
	return &Server{
		slog:    l,
		config:  config,
		storage: storage.NewRedisHandler(l, config.RedisURL),
	}, nil
}
