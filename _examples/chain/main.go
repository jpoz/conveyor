package main

import (
	"context"
	"fmt"
	"log"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/jpoz/protojob/_examples/chain/job"
	"github.com/jpoz/protojob/libs/go/protojob"
)

var spawn int32 = 3
var levels int32 = 3

func mainJob(ctx context.Context, msg *job.MainJob) error {
	j := protojob.Job(ctx)
	client := protojob.Client(ctx)

	_, err := client.EnqueueHeir(ctx, &job.LastJob{Level: 0})
	if err != nil {
		return err
	}

	fmt.Printf("[%s] Enqueing %d for %d levels\n", j.Uuid, msg.Spawn, msg.Levels)

	for i := int32(0); i < msg.Spawn; i++ {
		_, err := client.EnqueueChild(ctx, &job.SubJob{
			Level:  int32(1),
			Count:  int32(i),
			Levels: msg.Levels,
			Spawn:  msg.Spawn,
		})
		if err != nil {
			return err
		}
	}
	return nil
}

func subJob(ctx context.Context, msg *job.SubJob) error {
	j := protojob.Job(ctx)
	client := protojob.Client(ctx)

	time.Sleep(10 * time.Millisecond)

	_, err := client.EnqueueHeir(ctx, &job.LastJob{Level: msg.Level, Count: msg.Count})
	if err != nil {
		return err
	}

	for i := int32(0); i < msg.Level; i++ {
		fmt.Print("\t")
	}

	if msg.Level > msg.Levels {
		fmt.Printf("[%s] Last Level %d\n", j.Uuid, msg.Count)
		return nil
	}

	fmt.Printf("[%s] Child %d enqueing %d for %d levels\n", j.Uuid, msg.Count, msg.Spawn, msg.Levels)

	for i := int32(0); i < msg.Spawn; i++ {
		_, err := client.EnqueueChild(ctx, &job.SubJob{
			Level:  int32(msg.Level + 1),
			Count:  int32(i),
			Levels: msg.Levels,
			Spawn:  msg.Spawn,
		})
		if err != nil {
			return err
		}
	}
	return nil
}

func main() {
	ctx, cancel := context.WithCancel(context.Background())
	lastJob := func(ctx context.Context, msg *job.LastJob) error {
		job := protojob.Job(ctx)

		for i := int32(0); i < msg.Level; i++ {
			fmt.Print("\t")
		}
		fmt.Printf("[%s]🎉  done level %d count %d\n", job.Uuid, msg.Level, msg.Count)
		return nil
	}

	go func() {
		w := protojob.NewWorker("localhost:8080")

		err := w.RegisterJobs(mainJob, subJob, lastJob)
		if err != nil {
			log.Fatal(err)
		}
		err = w.Run(ctx)
		if err != nil {
			log.Fatal(err)
		}
	}()

	c := protojob.NewClient("localhost:8080")
	_, err := c.Enqueue(ctx, &job.MainJob{
		Spawn:  spawn,
		Levels: levels,
	})
	if err != nil {
		log.Fatal(err)
	}

	sigCh := make(chan os.Signal, 1)
	signal.Notify(sigCh, syscall.SIGINT, syscall.SIGTERM, syscall.SIGHUP)

	<-sigCh
	log.Println("Shutting down...")
	cancel()

}
