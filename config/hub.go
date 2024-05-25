package config

import "log/slog"

type Hub struct {
	Addr      string `yaml:"addr"`
	RedisURL  string `yaml:"redisURL" json:"redisURL"`
	Namespace string `yaml:"namespace"`
	Logger    *slog.Logger
}

func (c Hub) GetRedisURL() string {
	if c.RedisURL == "" {
		return DefaultRedisURL
	}
	return c.RedisURL
}

func (c Hub) GetAddr() string {
	if c.Addr == "" {
		return DefaultAddr
	}
	return c.Addr
}

func (c Hub) GetLogger() *slog.Logger {
	if c.Logger == nil {
		return DefaultLogger
	}
	return c.Logger
}

func (c *Hub) SetLogger(l *slog.Logger) {
	c.Logger = l
}

func (c Hub) GetNamespace() string {
	if c.Namespace == "" {
		return DefaultNamespace
	}
	return c.Namespace
}
