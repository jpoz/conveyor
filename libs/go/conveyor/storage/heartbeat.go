package storage

import (
	"context"
)

func (s *redisHandler) Heartbeat(ctx context.Context, workerId string) error {
	return s.workerCheckIn(ctx, workerId)
}
