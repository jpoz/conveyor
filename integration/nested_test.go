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
	conveyor "github.com/jpoz/conveyor/pkg"
	"github.com/jpoz/conveyor/pkg/config"
	"github.com/stretchr/testify/assert"
)

// TestNestedJobs starts with one job (MainJob) with a number
// It then runs that number of ChildJobs
// After all those ChildJobs are done, it runs the OnCompleteJob
func TestNestedJobs(t *testing.T) {
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

	wg.Add(1) // wait for one full round of jobs
	go func() {
		fmt.Println("starting worker")
		worker, err := conveyor.NewWorker(cfg)
		if err != nil {
			fmt.Println("could not create worker", err)
			errs <- fmt.Errorf("could not create worker: %w", err)
			return
		}

		worker.RegisterJobs(func(ctx context.Context, msg *fixtures.MainTask) error {
			j := conveyor.CurrentJob(ctx)
			client := conveyor.CurrentClient(ctx)
			fmt.Println("running main job", j.Uuid, msg.Num)

			for i := int32(1); i <= msg.Num; i++ {
				client.Enqueue(ctx, &fixtures.ChildTask{
					Num: i,
				})
			}

			client.EnqueueHeir(ctx, &fixtures.OnCompleteTask{Num: msg.Num})

			return nil
		})
		worker.RegisterJobs(func(ctx context.Context, msg *fixtures.ChildTask) error {
			j := conveyor.CurrentJob(ctx)
			fmt.Println("running child job", j.Uuid, msg.Num)

			data.IncrInt(msg.Num)

			return nil
		})
		worker.RegisterJobs(func(ctx context.Context, msg *fixtures.OnCompleteTask) error {
			fmt.Println("running on complete job", msg.Num)
			data.SetString("one two three four five")
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
		result, err := client.Enqueue(ctx, &fixtures.MainTask{
			Num: 5,
		})
		if err != nil {
			errs <- fmt.Errorf("could not enqueue job: %w", err)
			return
		}
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

	// Check the value set from the onComplete job
	assert.Equal(t, "one two three four five", data.GetString())

	// Check the value set from the child jobs
	assert.Equal(t, int32(1+2+3+4+5), data.GetInt())

	cancel()
}
