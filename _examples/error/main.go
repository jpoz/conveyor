package main

import (
	"context"
	"fmt"
	"log"
	"os"
	"os/signal"
	"syscall"

	"github.com/jpoz/conveyor/_examples/error/tasks"
	"github.com/jpoz/conveyor/libs/go/conveyor"
)

var spawn int32 = 1

func task(ctx context.Context, msg *tasks.Task) error {
	j := conveyor.Job(ctx)

	if j.Retry == 4 {
		return nil
	}

	return fmt.Errorf("retry %d", j.Retry)
}

func main() {
	ctx, cancel := context.WithCancel(context.Background())

	go func() {
		w := conveyor.NewWorker("localhost:8080")

		err := w.RegisterJobs(task)
		if err != nil {
			log.Fatal(err)
		}
		w.Run(ctx)
	}()

	c := conveyor.NewClient("localhost:8080")
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
