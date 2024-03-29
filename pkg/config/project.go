package config

import "log/slog"

type Project struct {
	RedisURL    string `yaml:"redisURL"`
	Namespace   string `yaml:"namespace"`
	Concurrency int    `yaml:"concurrency"`
	Logger      *slog.Logger
}

func (p Project) GetConcurrency() int {
	if p.Concurrency == 0 {
		return DefaultConcurrency
	}
	return p.Concurrency
}

func (p Project) GetRedisURL() string {
	if p.RedisURL == "" {
		return DefaultRedisURL
	}
	return p.RedisURL
}

func (p Project) GetNamespace() string {
	if p.Namespace == "" {
		return DefaultNamespace
	}
	return p.Namespace
}

func (p Project) GetLogger() *slog.Logger {
	if p.Logger == nil {
		return DefaultLogger
	}
	return p.Logger
}

func (p *Project) SetLogger(l *slog.Logger) {
	p.Logger = l
}
