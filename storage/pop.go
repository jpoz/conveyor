package storage

import (
	"context"
	"fmt"
	"time"

	"github.com/jpoz/conveyor/wire"
	"github.com/redis/go-redis/v9"
	"google.golang.org/protobuf/proto"
)

func (s *redisHandler) Pop(ctx context.Context, queues ...string) (*wire.Job, error) {
	s.log.Debugf("Popping jobs from queues: %#v", queues)

	go func() {
		for _, queue := range queues {
			err := s.queueCheckIn(ctx, queue)
			if err != nil {
				s.log.Errorf("failed to check in to queue %s: %v", queue, err)
			}
		}
	}()

	payload, err := s.rdb.BRPop(ctx, 2*time.Second, queues...).Result()
	if err == redis.Nil {
		return nil, nil
	}
	if err != nil {
		return nil, err
	}

	s.log.Debugf("Popped job off: %#v %s", payload[0], payload[1])

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
		s.log.Errorf("failed to add job as active in redis: %v", err)
		return job, fmt.Errorf("failed to add job as active in redis: %v", err)
	}

	return job, nil
}
