package config

import "log/slog"

type Client struct {
	RedisURL  string `yaml:"redisURL"`
	Namespace string `yaml:"namespace"`
	Logger    *slog.Logger
}

func (c Client) GetRedisURL() string {
	if c.RedisURL == "" {
		return DefaultRedisURL
	}
	return c.RedisURL
}

func (c Client) GetNamespace() string {
	if c.Namespace == "" {
		return DefaultNamespace
	}
	return c.Namespace
}

func (c Client) GetLogger() *slog.Logger {
	if c.Logger == nil {
		return DefaultLogger
	}
	return c.Logger
}

func (c *Client) SetLogger(l *slog.Logger) {
	c.Logger = l
}
