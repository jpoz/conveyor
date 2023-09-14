package bg

import (
	"context"
	"fmt"

	"github.com/jpoz/protojob/protos"
)

type ContextKey struct{ Name string }

var JobContextKey = &ContextKey{"job"}

func JobContext(ctx context.Context, obj *protos.Job) context.Context {
	return context.WithValue(ctx, JobContextKey, obj)
}

func Job(ctx context.Context) *protos.Job {
	obj, ok := ctx.Value(JobContextKey).(*protos.Job)
	if !ok {
		panic(fmt.Errorf("job not found in context"))
	}

	return obj
}
