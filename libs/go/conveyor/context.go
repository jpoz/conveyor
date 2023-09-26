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

func Job(ctx context.Context) *wire.Job {
	obj, ok := ctx.Value(JobContextKey).(*wire.Job)
	if !ok {
		panic(fmt.Errorf("job not found in context"))
	}

	return obj
}

var ClientContextKey = &ContextKey{"client"}

func ClientContext(ctx context.Context, obj *HubClient) context.Context {
	return context.WithValue(ctx, ClientContextKey, obj)
}

func Client(ctx context.Context) *HubClient {
	obj, ok := ctx.Value(ClientContextKey).(*HubClient)
	if !ok {
		panic(fmt.Errorf("hub client not found in context"))
	}

	return obj
}
