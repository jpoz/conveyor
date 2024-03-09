package hub

import (
	"log/slog"

	"github.com/jpoz/conveyor/pkg/storage"
	"github.com/jpoz/conveyor/wire"
)

const (
	DefaultMaxRetries = 5
)

type Config struct {
	Addr     string `yaml:"addr"`
	UiAddr   string `yaml:"uiAddr"`
	RedisURL string `yaml:"redisURL" json:"redisURL"`
}

type Server struct {
	slog    *slog.Logger
	config  Config
	storage storage.Handler

	wire.UnimplementedHubServer
}
