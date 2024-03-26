package main

import (
	"context"
	"flag"
	"io"
	"log/slog"
	"os"
	"os/signal"
	"syscall"
	"time"

	conveyor "github.com/jpoz/conveyor/pkg"
	"github.com/jpoz/conveyor/pkg/config"
	"github.com/jpoz/conveyor/pkg/hub"
	"github.com/lmittmann/tint"
)

var redisURL = "redis://localhost:36379"

func main() {
	var (
		serverFlag = flag.Bool("hub", true, "Run the hub only")
		workerFlag = flag.Bool("worker", true, "Run the worker only")
	)
	flag.Parse()

	log := slog.New(tint.NewHandler(os.Stderr, &tint.Options{
		Level:      slog.LevelDebug,
		TimeFormat: time.Kitchen,
	}))

	cfg := config.Project{
		RedisURL: redisURL,
		Logger:   log,
	}

	w, err := conveyor.NewWorker(&config.Worker{
		RedisURL: redisURL,
		Logger: slog.New(tint.NewHandler(io.Discard, &tint.Options{
			Level:      slog.LevelDebug,
			TimeFormat: time.Kitchen,
		})),
	})

	if err != nil {
		log.Error("failed to create worker", slog.String("error", err.Error()))
		os.Exit(1)
	}

	err = w.RegisterJobs(StartJob, ChildJob)
	// err = w.RegisterJobs(StartJob, ChildJob, LastJob)
	if err != nil {
		log.Error("failed to register jobs", slog.String("error", err.Error()))
		os.Exit(1)
	}

	ctx, cancel := context.WithCancel(context.Background())
	if *workerFlag {
		log.Info("Starting worker...")
		go w.Run(ctx)
	}

	if *serverFlag {
		go func() {
			s, err := hub.NewServer(&config.Hub{
				Addr:     ":4567",
				RedisURL: redisURL,
			})
			if err != nil {
				log.Error("failed to create server", slog.String("error", err.Error()))
				os.Exit(1)
			}

			err = s.RegisterPayloadTypes(&Start{}, &Last{})
			if err != nil {
				log.Error("failed to register payload types", slog.String("error", err.Error()))
				os.Exit(1)
			}

			s.Run(ctx)
		}()
	}

	client, err := conveyor.NewClient(&cfg)
	if err != nil {
		log.Error("failed to create client", slog.String("error", err.Error()))
		os.Exit(1)
	}

	_, err = client.Enqueue(ctx, &Start{
		Spawn:   3,
		Levels:  3,
		Message: "Hello, World!",
	})
	if err != nil {
		log.Error("failed to enqueue job", slog.String("error", err.Error()))
		os.Exit(1)
	}

	_, err = client.Enqueue(ctx, &Start{
		Spawn:   3,
		Levels:  3,
		Message: "Hello, World!",
	}, conveyor.Delay(10*60*time.Second))
	if err != nil {
		log.Error("failed to enqueue job", slog.String("error", err.Error()))
		os.Exit(1)
	}

	sigCh := make(chan os.Signal, 1)
	signal.Notify(sigCh, syscall.SIGINT, syscall.SIGTERM, syscall.SIGHUP)

	<-sigCh
	log.Warn("Shutting down...")
	cancel()
}

func StartJob(ctx context.Context, arg *Start) error {
	// j := conveyor.CurrentJob(ctx)
	client := conveyor.CurrentClient(ctx)

	_, err := client.EnqueueHeir(ctx, &Last{Level: 0, Message: arg.Message})
	if err != nil {
		return err
	}

	// slog.Info("[%s] Enqueing %d for %d levels\n", j.Uuid, arg.Spawn, arg.Levels)

	// random spawn
	spawnr := int32(time.Now().Unix()) % (arg.Spawn + 1)

	for i := int32(0); i < arg.Spawn; i++ {
		_, err := client.EnqueueChild(ctx, &Child{
			Level:  int32(1),
			Count:  int32(i),
			Levels: arg.Levels,
			Spawn:  spawnr,
		})
		if err != nil {
			return err
		}
	}
	return nil
}

func ChildJob(ctx context.Context, arg *Child) error {
	return nil
}

func LastJob(ctx context.Context, arg *Last) error {
	client := conveyor.CurrentClient(ctx)
	_, err := client.Enqueue(ctx, &Start{})
	if err != nil {
		slog.Error("failed to enqueue job", slog.String("error", err.Error()))
		os.Exit(1)
	}
	return nil
}
