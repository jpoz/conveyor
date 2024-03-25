package main

import (
	"context"
	"fmt"
	"log"
	"log/slog"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/jpoz/conveyor/_examples/chain/job"
	conveyor "github.com/jpoz/conveyor/pkg"
	"github.com/jpoz/conveyor/pkg/hub"
)

const redisURL = "redis://localhost:36379"

var spawn int32 = 3
var levels int32 = 1

func mainJob(ctx context.Context, msg *job.MainJob) error {
	j := conveyor.CurrentJob(ctx)
	client := conveyor.CurrentClient(ctx)

	_, err := client.EnqueueHeir(ctx, &job.LastJob{Level: 0})
	if err != nil {
		return err
	}

	fmt.Printf("[%s] Enqueing %d for %d levels\n", j.Uuid, msg.Spawn, msg.Levels)

	// random spawn
	spawnr := int32(time.Now().Unix()) % spawn

	for i := int32(0); i < msg.Spawn; i++ {
		_, err := client.EnqueueChild(ctx, &job.SubJob{
			Level:  int32(1),
			Count:  int32(i),
			Levels: msg.Levels,
			Spawn:  spawnr,
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

	_, err := client.EnqueueHeir(ctx, &job.LastJob{Level: msg.Level, Count: msg.Count})
	if err != nil {
		return err
	}

	for i := int32(0); i < msg.Level; i++ {
		fmt.Print("  ")
	}

	if time.Now().Unix()%10 == 0 {
		return fmt.Errorf("random error")
	}

	if msg.Level > msg.Levels {
		fmt.Printf("[%s] Last Level %d\n", j.Uuid, msg.Count)
		return nil
	}

	fmt.Printf("[%s] Child %d enqueing %d for %d levels\n", j.Uuid, msg.Count, msg.Spawn, msg.Levels)

	// sleep := time.Duration(time.Now().Unix()%10) * (time.Millisecond)
	// time.Sleep(sleep)

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
			fmt.Print("  ")
		}
		fmt.Printf("[%s]🎉  done level %d count %d\n", job.Uuid, msg.Level, msg.Count)

		return nil
	}

	l := slog.Default()

	fmt.Println("Starting...", lastJob)

	go func() {
		w, err := conveyor.NewWorker(l, redisURL)
		if err != nil {
			log.Fatal(err)
		}

		err = w.RegisterJobs(mainJob, subJob)
		if err != nil {
			log.Fatal(err)
		}
		err = w.Run(ctx)
		if err != nil {
			log.Fatal(err)
		}
	}()
	//
	// go func() {
	// 	c, err := conveyor.NewClient(l, redisURL)
	// 	if err != nil {
	// 		log.Fatal(err)
	// 	}
	// 	for {
	// 		r, err := c.Enqueue(ctx, &job.MainJob{
	// 			Spawn:  spawn,
	// 			Levels: levels,
	// 		})
	// 		if err != nil {
	// 			log.Fatal(err)
	// 		}
	// 		l.Info("Enqueued", slog.String("id", r.Uuid))
	// 		time.Sleep(100 * time.Millisecond)
	// 	}
	// }()

	go func() {
		s, err := hub.NewServer(l, hub.Config{
			Addr:     ":4567",
			RedisURL: redisURL,
		})
		if err != nil {
			log.Fatal(err)
		}

		err = s.RegisterPayloadTypes(&job.MainJob{}, &job.SubJob{}, &job.LastJob{})
		if err != nil {
			log.Fatal(err)
		}

		s.Run(ctx)
	}()

	sigCh := make(chan os.Signal, 1)
	signal.Notify(sigCh, syscall.SIGINT, syscall.SIGTERM, syscall.SIGHUP)

	<-sigCh
	log.Println("Shutting down...")
	cancel()
}
