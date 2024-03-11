package storage

import (
	context "context"
	"fmt"

	"github.com/jpoz/conveyor/wire"
	"github.com/redis/go-redis/v9"
	"google.golang.org/protobuf/proto"
)

func (s *redisHandler) GetJob(ctx context.Context, uuid string) (*wire.Job, error) {
	jobBytes, err := s.rdb.Get(ctx, JobKey(uuid)).Result()
	if err == redis.Nil {
		return nil, nil
	}
	if err != nil {
		return nil, fmt.Errorf("failed to get job from redis: %v", err)
	}

	job := &wire.Job{}
	err = proto.Unmarshal([]byte(jobBytes), job)
	if err != nil {
		return nil, fmt.Errorf("failed to unmarshal job: %v", err)
	}

	return job, nil
}
