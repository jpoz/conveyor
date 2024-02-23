package storage

import (
	"time"

	"github.com/jpoz/conveyor/wire"
)

func RetryIn(job *wire.Job) time.Duration {
	return 2 * time.Second
}
