package storage

import (
	"context"
)

func (s *RedisHandler) Heartbeat(ctx context.Context, workerId string) error {
	return s.workerCheckIn(ctx, workerId)
}
