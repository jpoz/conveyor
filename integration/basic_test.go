// //go:build integration
// // +build integration
package integration_test

import (
	"context"
	"fmt"
	"log/slog"
	"os"
	"sync"
	"testing"

	"github.com/jpoz/conveyor/fixtures"
	conveyor "github.com/jpoz/conveyor"
	"github.com/jpoz/conveyor/config"
	"github.com/stretchr/testify/assert"
)

func TestBasic(t *testing.T) {
	ctx := context.Background()
	ctx, cancel := context.WithCancel(ctx)
	var wg sync.WaitGroup
	errs := make(chan error, 1)

	cfg := &config.Project{
		RedisURL:  os.Getenv("REDIS_URL"),
		Namespace: "TestBasic",
		Logger:    slog.Default(),
	}
	data := &SafeData{}

	wg.Add(1) // wait for worker
	go func() {
		fmt.Println("starting worker")
		worker, err := conveyor.NewWorker(cfg)
		if err != nil {
			fmt.Println("could not create worker", err)
			errs <- fmt.Errorf("could not create worker: %w", err)
			return
		}

		worker.RegisterJobs(func(ctx context.Context, msg *fixtures.Basic) error {
			fmt.Println("running job", msg.Str, msg.Int)
			data.SetString(msg.Str)
			data.SetInt(msg.Int)
			wg.Done()
			return nil
		})

		fmt.Println("running worker")
		wg.Done() // done waiting for worker
		err = worker.Run(ctx)
		if err != nil {
			fmt.Println("could not run worker", err)
			errs <- fmt.Errorf("could not run worker: %w", err)
			return
		}
	}()

	go func() {
		client, err := conveyor.NewClient(cfg)
		if err != nil {
			errs <- fmt.Errorf("could not create client: %w", err)
			return
		}

		wg.Add(1)
		result, err := client.Enqueue(ctx, &fixtures.Basic{
			Str: "test",
			Int: 1,
		})
		if err != nil {
			errs <- fmt.Errorf("could not enqueue job: %w", err)
			return
		}

		assert.Nil(t, err)
		assert.NotEmpty(t, result.Uuid)

		fmt.Println("client done")
	}()

	wg.Wait()

	select {
	case msg := <-errs:
		t.Fatal(msg)
	default:
		// noop
	}

	assert.Equal(t, "test", data.GetString())
	assert.Equal(t, int32(1), data.GetInt())

	cancel()
}
