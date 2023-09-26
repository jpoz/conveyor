package main

import (
	"context"
	"fmt"
	"log"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/jpoz/conveyor/_examples/onComplete/tasks"
	"github.com/jpoz/conveyor/libs/go/conveyor"
)

var spawn int32 = 1

func mainTask(ctx context.Context, msg *tasks.MainTask) error {
	j := conveyor.Job(ctx)
	client := conveyor.Client(ctx)

	_, err := client.EnqueueHeir(ctx, &tasks.OnCompleteTask{Num: -1})
	if err != nil {
		return err
	}

	fmt.Printf("[%s] Enqueing %d children\n", j.Uuid, spawn)

	for i := int32(0); i < spawn; i++ {
		_, err := client.EnqueueChild(ctx, &tasks.ChildTask{Num: i})
		if err != nil {
			return err
		}
	}
	return nil
}

func childTask(ctx context.Context, msg *tasks.ChildTask) error {
	j := conveyor.Job(ctx)

	fmt.Printf("[%s] Running Child\n", j.Uuid)
	time.Sleep(10 * time.Millisecond)

	return nil
}

func onComplete(ctx context.Context, msg *tasks.OnCompleteTask) error {
	j := conveyor.Job(ctx)

	fmt.Printf("[%s] Done!\n", j.Uuid)

	return nil
}

func main() {
	ctx, cancel := context.WithCancel(context.Background())

	go func() {
		w := conveyor.NewWorker("localhost:8080")

		err := w.RegisterJobs(mainTask, childTask, onComplete)
		if err != nil {
			log.Fatal(err)
		}
		w.Run(ctx)
	}()

	c := conveyor.NewClient("localhost:8080")
	_, err := c.Enqueue(ctx, &tasks.MainTask{Num: 1})
	if err != nil {
		log.Fatal(err)
	}

	sigCh := make(chan os.Signal, 1)
	signal.Notify(sigCh, syscall.SIGINT, syscall.SIGTERM, syscall.SIGHUP)

	<-sigCh
	log.Println("Shutting down...")
	cancel()

}
