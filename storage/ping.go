package storage

import "context"

// Ping pings the redis server, and keeps the worker in the active worker list
func (s *RedisHandler) Ping(ctx context.Context) error {
	return s.rdb.Ping(ctx).Err()
}
