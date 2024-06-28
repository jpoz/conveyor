package storage

import (
	"context"
	"fmt"
	"log/slog"
	"time"

	"github.com/jpoz/conveyor/wire"
	"github.com/redis/go-redis/v9"
	"google.golang.org/protobuf/proto"
)

func (s *RedisHandler) Pop(ctx context.Context, queues ...string) (*wire.Job, error) {
	s.log.Debug("Popping jobs from queues", slog.Any("queues", queues))

	go func() {
		for _, queue := range queues {
			err := s.queueCheckIn(ctx, queue)
			if err != nil {
				s.log.Error(
					"failed to check in to queue",
					slog.Any("queue", queue),
					slog.Any("error", err),
				)
			}
		}
	}()

	queueKeys := make([]string, len(queues))
	for i, queue := range queues {
		queueKeys[i] = s.QueueKey(queue)
	}

	var payload []string
	var err error

	// TODO: configure the timeout here
	// TODO: configure retries here
	for attempt := 0; attempt < 10; attempt++ {
		payload, err = s.rdb.BRPop(ctx, 2*time.Second, queueKeys...).Result()
		if err == nil || err == redis.Nil {
			break
		}
		s.log.Error("pop job error", "error", err, "attempt", attempt+1)
		time.Sleep(1 * time.Second) // Wait a bit before retrying
	}
	if err == redis.Nil {
		return nil, nil
	}
	if err != nil {
		s.log.Error("fatal error to pop job", "error", err)
		return nil, err
	}

	s.log.Debug("Popped job off", slog.Any("payload", payload))

	job := &wire.Job{}
	err = proto.Unmarshal([]byte(payload[1]), job)
	if err != nil {
		return nil, err
	}

	err = s.setJob(ctx, job.Uuid, []byte(payload[1]))
	if err != nil {
		return nil, fmt.Errorf("failed to store job in redis: %v", err)
	}

	err = s.addActiveJob(ctx, job)
	if err != nil {
		// TODO try to readd job to queue?
		s.log.Error(
			"failed to add job as active in redis",
			slog.Any("job", job),
			slog.Any("error", err),
		)
		return job, fmt.Errorf("failed to add job as active in redis: %v", err)
	}

	return job, nil
}
