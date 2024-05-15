package config

import (
	"log/slog"
	"sync"
)

type Project struct {
	RedisURL    string `yaml:"redisURL"`
	Namespace   string `yaml:"namespace"`
	Concurrency int    `yaml:"concurrency"`
	Logger      *slog.Logger

	mutex sync.Mutex
}

func (p *Project) GetConcurrency() int {
	p.mutex.Lock()
	defer p.mutex.Unlock()
	if p.Concurrency == 0 {
		return DefaultConcurrency
	}
	return p.Concurrency
}

func (p *Project) GetRedisURL() string {
	p.mutex.Lock()
	defer p.mutex.Unlock()
	if p.RedisURL == "" {
		return DefaultRedisURL
	}
	return p.RedisURL
}

func (p *Project) GetNamespace() string {
	p.mutex.Lock()
	defer p.mutex.Unlock()
	if p.Namespace == "" {
		return DefaultNamespace
	}
	return p.Namespace
}

func (p *Project) GetLogger() *slog.Logger {
	p.mutex.Lock()
	defer p.mutex.Unlock()
	if p.Logger == nil {
		return DefaultLogger
	}
	return p.Logger
}

func (p *Project) SetLogger(l *slog.Logger) {
	p.mutex.Lock()
	defer p.mutex.Unlock()
	p.Logger = l
}
