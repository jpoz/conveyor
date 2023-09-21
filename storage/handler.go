package storage

import (
	"context"

	"github.com/jpoz/protojob/wire"
)

type Handler interface {
	GetJob(ctx context.Context, uuid string) (*wire.Job, error)
	AddJob(ctx context.Context, job *wire.Job) error
	Pop(ctx context.Context, queues ...string) (*wire.Job, error)
	CloseJob(ctx context.Context, job *wire.Job) (bool, error)

	FailJob(ctx context.Context, uuid string) error

	Stats
}
