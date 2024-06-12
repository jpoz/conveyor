package config

import "log/slog"

type RedisConfig interface {
	GetLogger() *slog.Logger
	SetLogger(*slog.Logger)
	GetRedisURL() string
	GetNamespace() string
}

type ClientConfig interface {
	RedisConfig
}

type WorkerConfig interface {
	GetConcurrency() int
	RedisConfig
}

type HubConfig interface {
	GetAddr() string
	RedisConfig
}

type ProjectConfig interface {
	ClientConfig
	WorkerConfig
	HubConfig
}
