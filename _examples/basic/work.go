package basic

import (
	"context"
	"log/slog"
)

func RunBasicJob(ctx context.Context, arg *BasicJob) error {
	slog.Info("starting job", slog.String("name", arg.Name), slog.Int("count", int(arg.Count)))

	for i := int32(0); i < arg.Count; i++ {
		slog.Info("running job", slog.String("name", arg.Name), slog.Int("count", int(i)))
	}

	return nil
}
