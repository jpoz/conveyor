package main

import (
	"context"
	"fmt"
	"log"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/jpoz/conveyor/_examples/chain/job"
	"github.com/jpoz/conveyor/libs/go/conveyor"
)

var spawn int32 = 3
var levels int32 = 3

func mainJob(ctx context.Context, msg *job.MainJob) error {
	j := conveyor.CurrentJob(ctx)
	client := conveyor.CurrentClient(ctx)

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
	j := conveyor.CurrentJob(ctx)
	client := conveyor.CurrentClient(ctx)

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
		job := conveyor.CurrentJob(ctx)

		for i := int32(0); i < msg.Level; i++ {
			fmt.Print("\t")
		}
		fmt.Printf("[%s]🎉  done level %d count %d\n", job.Uuid, msg.Level, msg.Count)
		return nil
	}

	go func() {
		w, err := conveyor.NewWorker("redis://localhost:6379")
		if err != nil {
			log.Fatal(err)
		}

		err = w.RegisterJobs(mainJob, subJob, lastJob)
		if err != nil {
			log.Fatal(err)
		}
		err = w.Run(ctx)
		if err != nil {
			log.Fatal(err)
		}
	}()

	go func() {
		for {
			c, err := conveyor.NewClient("redis://localhost:6379")
			if err != nil {
				log.Fatal(err)
			}
			_, err = c.Enqueue(ctx, &job.MainJob{
				Spawn:  spawn,
				Levels: levels,
			})
			if err != nil {
				log.Fatal(err)
			}
			time.Sleep(30 * time.Second)
		}
	}()

	sigCh := make(chan os.Signal, 1)
	signal.Notify(sigCh, syscall.SIGINT, syscall.SIGTERM, syscall.SIGHUP)

	<-sigCh
	log.Println("Shutting down...")
	cancel()
}
