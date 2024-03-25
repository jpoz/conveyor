package config

import "log/slog"

type Worker struct {
	Concurrency int    `yaml:"concurrency"`
	RedisURL    string `yaml:"redisURL"`
	Namespace   string `yaml:"namespace"`
	Logger      *slog.Logger
}

func (w Worker) GetConcurrency() int {
	if w.Concurrency == 0 {
		return DefaultConcurrency
	}
	return w.Concurrency
}

func (w Worker) GetRedisURL() string {
	if w.RedisURL == "" {
		return DefaultRedisURL
	}
	return w.RedisURL
}

func (w Worker) GetNamespace() string {
	if w.Namespace == "" {
		return DefaultNamespace
	}
	return w.Namespace
}

func (w Worker) GetLogger() *slog.Logger {
	if w.Logger == nil {
		return DefaultLogger
	}
	return w.Logger
}

func (w *Worker) SetLogger(l *slog.Logger) {
	w.Logger = l
}
