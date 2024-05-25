package config

import "log/slog"

const DefaultAddr = ":4567"
const DefaultRedisURL = "redis://localhost:6379"
const DefaultNamespace = "conv"
const DefaultConcurrency = 2

var DefaultLogger = slog.Default().With(slog.String("pkg", "conveyor"))
