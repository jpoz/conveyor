package hub

import (
	"context"
	"fmt"
	"log/slog"
	"net/http"

	"github.com/jpoz/conveyor/pkg/storage"
	"github.com/jpoz/goes"
)

const (
	DefaultMaxRetries = 5
)

type Config struct {
	Addr     string `yaml:"addr"`
	RedisURL string `yaml:"redisURL" json:"redisURL"`
}

type Server struct {
	log     *slog.Logger
	config  Config
	storage storage.Handler
}

func NewServer(log *slog.Logger, config Config) (*Server, error) {
	l := log.With(slog.String("server", "hub"))

	handler, err := storage.NewRedisHandler(l, config.RedisURL)
	if err != nil {
		return nil, fmt.Errorf("failed to create redis handler: %w", err)
	}

	return &Server{
		log:     l,
		config:  config,
		storage: handler,
	}, nil
}

func (s *Server) Run(ctx context.Context) error {
	s.log.Info("starting conveyor hub server", slog.String("addr", s.config.Addr))
	mux := http.NewServeMux()

	mux.HandleFunc("GET /", s.HomeHandler)
	mux.HandleFunc("GET /jobs", s.JobsHandler)
	mux.HandleFunc("GET /queues", s.QueuesPageHandler)
	mux.HandleFunc("GET /queues/{queueName}", s.QueuePageHandler)
	mux.HandleFunc("GET /events", s.EventHandler)

	mux.HandleFunc("GET /static/*", s.StaticHandler("/static"))
	mux.HandleFunc("GET /js/*", JSHandler("/js", goes.Options{
		Logger: slog.Default(),
		Mode:   goes.ModeBuild,
	}))

	return http.ListenAndServe(s.config.Addr, mux)
}
