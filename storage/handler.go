package storage

import (
	"context"

	"github.com/jpoz/conveyor/wire"
)

type OnStatusChange func(job *wire.Job)

type Handler interface {
	Heartbeat(ctx context.Context, workerID string) error

	GetActiveJob(ctx context.Context, uuid string) (*wire.Job, error)
	AddJob(ctx context.Context, job *wire.Job) error
	Pop(ctx context.Context, workerUuid string, queues ...string) (*wire.Job, error)
	PopScheduledJobs(ctx context.Context) error

	RemoveJob(ctx context.Context, job *wire.Job) error
	RemoveScheduledJob(ctx context.Context, job *wire.Job) error

	Notify(ctx context.Context, job *wire.Job, status wire.JobStatus) error
	Subscribe(ctx context.Context, onStatusChange OnStatusChange) error

	CloseJob(ctx context.Context, workerUuid string, job *wire.Job) (bool, error)

	FailJob(ctx context.Context, uuid string) error

	Ping(ctx context.Context) error
	Close() error

	Stats
}
