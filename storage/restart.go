package storage

import (
	"context"
	"log/slog"

	"github.com/jpoz/conveyor/wire"
	"google.golang.org/protobuf/proto"
)

func (s *RedisHandler) RestartJob(ctx context.Context, uuid string) error {
	str, err := s.rdb.Get(ctx, s.JobKey(uuid)).Result()
	if err != nil {
		return err
	}

	job := &wire.Job{}
	err = proto.Unmarshal([]byte(str), job)
	if err != nil {
		return err
	}

	jobBytes, err := marshalJob(job)
	if err != nil {
		return err
	}

	pipe := s.rdb.Pipeline()

	pipe.Del(ctx, s.JobKey(uuid))
	pipe.Del(ctx, s.OnCompleteListKey(uuid))
	pipe.Del(ctx, s.ChildenListKey(uuid))
	pipe.SRem(ctx, s.ActiveJobsKey(), uuid)
	key := s.QueueKey(job.Queue)
	err = pipe.LPush(ctx, key, jobBytes).Err()

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

	return nil
}
