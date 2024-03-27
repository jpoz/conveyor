package storage

import (
	"context"
	"log/slog"
	"time"

	"github.com/jpoz/conveyor/wire"
	"github.com/redis/go-redis/v9"
	"google.golang.org/protobuf/proto"
)

func (s *RedisHandler) FailJob(ctx context.Context, uuid string) error {
	str, err := s.rdb.Get(ctx, s.JobKey(uuid)).Result()
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

	retryAt := time.Now().Add(RetryIn(job))
	job.Retry++

	jobBytes, err := marshalJob(job)
	if err != nil {
		return err
	}

	pipe := s.rdb.Pipeline()

	pipe.Del(ctx, s.JobKey(uuid))
	pipe.Del(ctx, s.OnCompleteListKey(uuid))
	pipe.Del(ctx, s.ChildenListKey(uuid))
	pipe.SRem(ctx, s.ActiveJobsKey(), uuid)

	var result Result
	if job.Retry >= maxRetries {
		result = ResultFailure
		pipe.LPush(ctx, s.FailedJobsKey(), jobBytes)
	} else {
		result = ResultError
		pipe.ZAdd(ctx, s.ScheduledJobsKey(), redis.Z{Score: float64(retryAt.Unix()), Member: jobBytes})
	}

	cmdErrs, err := pipe.Exec(ctx)
	if err != nil {
		s.log.Error("could not fail job: %s", slog.Any("err", err))
		return err
	}
	for _, err := range cmdErrs {
		if err != nil && err.Err() != nil {
			s.log.Error("could not fail job cmd error: %s", slog.Any("err", err.Err()))
			return err.Err()
		}
	}

	err = s.incrResult(ctx, result)
	if err != nil {
		s.log.Error("could not fail job: %s", slog.Any("err", err))
	}

	return nil
}
