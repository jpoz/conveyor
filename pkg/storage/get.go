package storage

import (
	context "context"
	"fmt"

	"github.com/jpoz/conveyor/wire"
	"github.com/redis/go-redis/v9"
	"google.golang.org/protobuf/proto"
)

func (s *RedisHandler) GetActiveJob(ctx context.Context, uuid string) (*wire.Job, error) {
	jobBytes, err := s.rdb.Get(ctx, s.JobKey(uuid)).Result()
	if err != nil && err != redis.Nil {
		return nil, fmt.Errorf("failed to get job from redis: %v", err)
	}
	fmt.Println("jobBytes", jobBytes)

	if jobBytes == "" {
		return nil, nil
	}

	job := &wire.Job{}
	err = proto.Unmarshal([]byte(jobBytes), job)
	if err != nil {
		return nil, fmt.Errorf("failed to unmarshal job: %v", err)
	}

	return job, nil
}
