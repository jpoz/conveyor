package storage

import (
	"context"

	"github.com/jpoz/protojob/wire"
)

func (s *redisHandler) addActiveJob(ctx context.Context, job *wire.Job) error {
	err := s.rdb.SAdd(ctx, activeJobsKey, job.Uuid).Err()
	if err != nil {
		return err
	}

	err = s.rdb.SAdd(ctx, activeQueuesKey, job.Queue).Err()
	if err != nil {
		return err
	}

	return nil
}

func (s *redisHandler) removeActiveJob(ctx context.Context, job *wire.Job) error {
	err := s.rdb.SRem(ctx, activeJobsKey, job.Uuid).Err()
	if err != nil {
		return err
	}

	return nil
}
