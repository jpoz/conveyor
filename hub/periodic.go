package hub

import (
	"context"
	"time"
)

func (s *Server) Periodic(ctx context.Context, duration time.Duration, fn func(ctx context.Context) error) error {
	// Create a new ticker
	ticker := time.NewTicker(duration)
	defer ticker.Stop()

	// Loop and select statement for ticker and context
	for {
		select {
		// Ticker case
		case <-ticker.C:
			err := fn(ctx)
			if err != nil {
				return err // handle the error how you'd like
			}

		// Context cancellation or deadline exceeded
		case <-ctx.Done():
			return ctx.Err()
		}
	}
}
