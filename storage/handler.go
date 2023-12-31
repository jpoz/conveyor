package storage

import (
	"context"

	"github.com/jpoz/conveyor/wire"
)

type Handler interface {
	Heartbeat(ctx context.Context, workerID string) error

	GetJob(ctx context.Context, uuid string) (*wire.Job, error)
	AddJob(ctx context.Context, job *wire.Job) error
	Pop(ctx context.Context, queues ...string) (*wire.Job, error)
	PopScheduledJobs(ctx context.Context) error

	CloseJob(ctx context.Context, job *wire.Job) (bool, error)

	FailJob(ctx context.Context, uuid string) error

	Stats
}
