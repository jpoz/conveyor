package main

import (
	"context"
	"fmt"
	"log"
	"os"
	"os/signal"
	"syscall"

	"github.com/jpoz/protojob/_examples/error/tasks"
	"github.com/jpoz/protojob/libs/go/protojob"
)

var spawn int32 = 1

func task(ctx context.Context, msg *tasks.Task) error {
	j := protojob.Job(ctx)

	if j.Retry == 4 {
		return nil
	}

	return fmt.Errorf("retry %d", j.Retry)
}

func main() {
	ctx, cancel := context.WithCancel(context.Background())

	go func() {
		w := protojob.NewWorker("localhost:8080")

		err := w.RegisterJobs(task)
		if err != nil {
			log.Fatal(err)
		}
		w.Run(ctx)
	}()

	c := protojob.NewClient("localhost:8080")
	_, err := c.Enqueue(ctx, &tasks.Task{Num: 1})
	if err != nil {
		log.Fatal(err)
	}

	sigCh := make(chan os.Signal, 1)
	signal.Notify(sigCh, syscall.SIGINT, syscall.SIGTERM, syscall.SIGHUP)

	<-sigCh
	log.Println("Shutting down...")
	cancel()

}
