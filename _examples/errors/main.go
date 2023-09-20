package main

import (
	"context"
	"fmt"
	"log"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/jpoz/protojob/_examples/errors/work"
	"github.com/jpoz/protojob/bg"
)

func failSometimes(ctx context.Context, msg *work.FailSometimes) error {
	j := bg.Job(ctx)
	client := bg.Client(ctx)

	fmt.Printf("[FailSometimes] Running: %s (%d)\n", j.Uuid, j.Retry)

	result, err := client.EnqueueHeir(ctx, &work.OnComplete{})
	if err != nil {
		return fmt.Errorf("failed to enqueue: %w", err)
	}

	fmt.Printf("[FailSometimes] Enqueued: %s\n", result.Uuid)

	if j.Retry < 1 {
		fmt.Printf("[FailSometimes] Failed: %s\n", j.Uuid)
		return fmt.Errorf("ooops")
	}

	return nil
}

func child(ctx context.Context, msg *work.Child) error {
	j := bg.Job(ctx)
	fmt.Printf("[Child] Running: %s\n", j.Uuid)
	time.Sleep(50 * time.Millisecond)
	return nil
}

func onComplete(ctx context.Context, msg *work.OnComplete) error {
	j := bg.Job(ctx)

	fmt.Printf("[Completed] Running: %s\n", j.Uuid)
	return nil
}

func main() {
	ctx, cancel := context.WithCancel(context.Background())

	go func() {
		w := bg.NewWorker("localhost:8080")

		err := w.RegisterJobs(failSometimes, onComplete)
		if err != nil {
			log.Fatal(err)
		}
		err = w.Run(ctx)
		if err != nil {
			log.Fatal(err)
		}
	}()

	c := bg.NewClient("localhost:8080")
	result, err := c.Enqueue(ctx, &work.FailSometimes{
		Payload: "Hello",
	})
	if err != nil {
		log.Fatal(err)
	}

	fmt.Printf("[main] Enqueued: %s\n", result.Uuid)

	sigCh := make(chan os.Signal, 1)
	signal.Notify(sigCh, syscall.SIGINT, syscall.SIGTERM, syscall.SIGHUP)

	<-sigCh
	log.Println("Shutting down...")
	cancel()
}
