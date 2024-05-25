package conveyor

import (
	"context"
	"fmt"

	"github.com/jpoz/conveyor/wire"
)

type ContextKey struct{ Name string }

var JobContextKey = &ContextKey{"job"}

func JobContext(ctx context.Context, obj *wire.Job) context.Context {
	return context.WithValue(ctx, JobContextKey, obj)
}

func CurrentJob(ctx context.Context) *wire.Job {
	obj, ok := ctx.Value(JobContextKey).(*wire.Job)
	if !ok {
		panic(fmt.Errorf("job not found in context"))
	}

	return obj
}

var ClientContextKey = &ContextKey{"client"}

func AddClientToContext(ctx context.Context, obj *Client) context.Context {
	return context.WithValue(ctx, ClientContextKey, obj)
}

func CurrentClient(ctx context.Context) *Client {
	obj, ok := ctx.Value(ClientContextKey).(*Client)
	if !ok {
		panic(fmt.Errorf("hub client not found in context"))
	}

	return obj
}
