package main

import (
	"context"
	"fmt"
	"log/slog"
	"os"
	sync "sync"

	"github.com/jpoz/conveyor"
	"github.com/jpoz/conveyor/config"
)

func main() {
	cfg := &config.Project{
		RedisURL:  os.Getenv("REDIS_URL"),
		Namespace: "TestBasic",
		Logger:    slog.Default(),
	}

	ctx := context.Background()

	worker, err := conveyor.NewWorker(cfg)
	if err != nil {
		panic(err)
	}

	var wg sync.WaitGroup
	RunBasicJob := func(ctx context.Context, arg *BasicJob) error {
		slog.Info("starting job", slog.String("name", arg.Name), slog.Int("count", int(arg.Count)))

		for i := int32(0); i < arg.Count; i++ {
			slog.Info("running job", slog.String("name", arg.Name), slog.Int("count", int(i+1)))
		}

		wg.Done()
		return nil
	}

	worker.RegisterJobs(RunBasicJob)

	go func() {
		fmt.Println("running worker")
		err = worker.Run(ctx)
		if err != nil {
			panic(err)
		}
	}()

	client, err := conveyor.NewClient(cfg)
	if err != nil {
		return
	}

	wg.Add(1)
	result, err := client.Enqueue(ctx, &BasicJob{
		Name:  "test",
		Count: 5,
	})
	if err != nil {
		panic(err)
	}

	fmt.Println("wait")
	wg.Wait()

	fmt.Printf("result id: %v\n", result.Uuid)
}
