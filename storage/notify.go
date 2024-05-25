package storage

import (
	"context"
	"fmt"

	"github.com/jpoz/conveyor/wire"
	"google.golang.org/protobuf/proto"
)

func (s *RedisHandler) Notify(ctx context.Context, job *wire.Job, status wire.JobStatus) error {
	job.Status = status

	bts, err := proto.Marshal(job)
	if err != nil {
		return fmt.Errorf("failed to marshal job: %v", err)
	}

	err = s.rdb.Publish(ctx, s.JobEventsChannelKey(), bts).Err()
	if err != nil {
		return fmt.Errorf("failed to publish job: %v", err)
	}

	return nil
}

func (s *RedisHandler) Subscribe(ctx context.Context, onStatusChange OnStatusChange) error {
	pubsub := s.rdb.Subscribe(ctx, s.JobEventsChannelKey())
	incoming := pubsub.Channel()

	for {
		select {
		case <-ctx.Done():
			return ctx.Err()
		case msg := <-incoming:
			payload := msg.Payload
			job := &wire.Job{}

			err := proto.Unmarshal([]byte(payload), job)
			if err != nil {
				return fmt.Errorf("failed to unmarshal job: %v", err)
			}

			onStatusChange(job)
		}
	}
}
