package hub

import (
	"time"

	"github.com/jpoz/protojob/wire"
)

func RetryIn(job *wire.Job) time.Duration {
	return 60 * time.Second
}
