package storage

import (
	"context"
	"fmt"
	"time"

	"github.com/jpoz/protojob/wire"
	"github.com/redis/go-redis/v9"
	"google.golang.org/protobuf/proto"
)

func (s *redisHandler) Pop(ctx context.Context, queues ...string) (*wire.Job, error) {
	s.log.Debugf("Popping jobs from queues: %#v", queues)
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

	return job, nil
}