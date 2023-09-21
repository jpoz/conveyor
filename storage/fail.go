package storage

import (
	"context"
	"time"

	"github.com/jpoz/protojob/wire"
	"github.com/redis/go-redis/v9"
	"google.golang.org/protobuf/proto"
)

func (s *redisHandler) FailJob(ctx context.Context, uuid string) error {
	str, err := s.rdb.Get(ctx, jobKey(uuid)).Result()
	if err != nil {
		return err
	}

	job := &wire.Job{}
	err = proto.Unmarshal([]byte(str), job)
	if err != nil {
		return err
	}

	maxRetries := DefaultMaxRetries
	if job.MaxRetries != 0 {
		maxRetries = job.MaxRetries
	}

	if job.Retry >= maxRetries {
		// already failed
		// TODO send to failed queue
		return nil
	}

	retryAt := time.Now().Add(RetryIn(job))
	job.Retry++

	jobBytes, err := marshalJob(job)
	if err != nil {
		return err
	}

	pipe := s.rdb.Pipeline()

	pipe.Del(ctx, jobKey(uuid))
	pipe.Del(ctx, onCompleteListKey(uuid))
	pipe.ZAdd(ctx, failedJobsKey, redis.Z{Score: float64(retryAt.Unix()), Member: jobBytes})

	cmdErrs, err := pipe.Exec(ctx)
	if err != nil {
		return err
	}
	for _, err := range cmdErrs {
		if err != nil {
			return err.Err()
		}
	}

	return nil
}
