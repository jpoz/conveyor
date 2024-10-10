package main

import (
	"context"
	"flag"
	"fmt"
	"log/slog"
	"os"
	"os/signal"
	"syscall"
	"time"

	conveyor "github.com/jpoz/conveyor"
	"github.com/jpoz/conveyor/config"
	"github.com/jpoz/conveyor/hub"
	"github.com/lmittmann/tint"
)

var redisURL = "redis://localhost:36379"
var sleep = 3 * time.Second

func main() {
	var (
		serverFlag = flag.Bool("hub", true, "Run the hub only")
		workerFlag = flag.Bool("worker", true, "Run the worker only")
	)
	flag.Parse()

	log := slog.New(tint.NewHandler(os.Stdout, &tint.Options{
		Level:      slog.LevelDebug,
		TimeFormat: time.Kitchen,
	}))

	cfg := config.Project{
		RedisURL: redisURL,
		Logger:   log,
	}

	w, err := conveyor.NewWorker(&config.Worker{
		RedisURL: redisURL,
		Logger: slog.New(tint.NewHandler(os.Stdout, &tint.Options{
			Level:      slog.LevelInfo,
			TimeFormat: time.Kitchen,
		})),
		Concurrency: 5,
	})

	if err != nil {
		log.Error("failed to create worker", slog.String("error", err.Error()))
		os.Exit(1)
	}

	err = w.RegisterJobs(StartJob, ChildJob, LastJob)
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

			log.Info("Starting hub...")
			s.Run(ctx)
		}()
	}

	client, err := conveyor.NewClient(&cfg)
	if err != nil {
		log.Error("failed to create client", slog.String("error", err.Error()))
		os.Exit(1)
	}

	fmt.Println("client created", client)

	_, err = client.Enqueue(ctx, &Child{
		Count: 10,
	})
	if err != nil {
		log.Error("failed to enqueue job", slog.String("error", err.Error()))
		os.Exit(1)
	}

	// _, err = client.Enqueue(ctx, &Start{
	// 	Spawn:   3,
	// 	Levels:  3,
	// 	Message: "Hello, World!",
	// }, conveyor.Delay(5*60*time.Second))
	// if err != nil {
	// 	log.Error("failed to enqueue job", slog.String("error", err.Error()))
	// 	os.Exit(1)
	// }

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
		slog.Error("failed to enqueue job", slog.String("error", err.Error()))
		return err
	}

	// random spawn
	spawnr := int32(time.Now().Unix()) % (arg.Spawn + 1)

	time.Sleep(sleep)

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
	j := conveyor.CurrentJob(ctx)

	for i := int32(0); i < arg.Count; i++ {
		slog.Info("Boooop job",
			slog.Int("count", int(i+1)),
			slog.String("uuid", j.Uuid),
		)
		time.Sleep(time.Millisecond * 500)
	}

	// if rand.Intn(5) > 2 {
	// 	return fmt.Errorf("child job failed")
	// }

	return nil
}

func LastJob(ctx context.Context, arg *Last) error {
	client := conveyor.CurrentClient(ctx)
	time.Sleep(sleep)
	_, err := client.Enqueue(ctx, &Start{})
	if err != nil {
		slog.Error("failed to enqueue job", slog.String("error", err.Error()))
		os.Exit(1)
	}
	return nil
}
