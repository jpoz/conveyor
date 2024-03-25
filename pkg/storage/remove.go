package storage

import (
	context "context"

	"github.com/jpoz/conveyor/wire"
	"github.com/redis/go-redis/v9"
)

func (s *RedisHandler) RemoveJob(ctx context.Context, job *wire.Job) error {
	bts, err := marshalJob(job)
	if err != nil {
		return err
	}

	err = s.rdb.LRem(ctx, s.QueueKey(job.Queue), 1, bts).Err()
	if err != nil {
		if err == redis.Nil {
			return nil
		}
		return err
	}

	return nil
}
