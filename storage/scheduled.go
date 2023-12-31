package storage

import (
	"context"
	"fmt"
	"time"

	"github.com/jpoz/conveyor/wire"
	"github.com/redis/go-redis/v9"
	"google.golang.org/protobuf/proto"
)

func (s *redisHandler) PopScheduledJobs(ctx context.Context) error {
	t := time.Now().Unix()
	ts := fmt.Sprintf("%d", t)
	jobs, err := s.rdb.ZRangeByScore(
		ctx,
		scheduledJobsKey,
		&redis.ZRangeBy{Min: "-inf", Max: ts},
	).Result()
	if err != nil {
		return err
	}
	if len(jobs) == 0 {
		return nil
	}

	for _, jobBytes := range jobs {
		err := s.rdb.ZRem(ctx, scheduledJobsKey, jobBytes).Err()
		if err != nil {
			return err
		}

		job := &wire.Job{}
		err = proto.Unmarshal([]byte(jobBytes), job)
		if err != nil {
			return err
		}

		s.log.Debugf("Popped job off: %#v %s", jobBytes, job)
		err = s.add(ctx, job, false)
		if err != nil {
			return err
		}
	}

	return nil
}
