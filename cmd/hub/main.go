package main

import (
	"context"
	"log/slog"
	"os"
	"os/signal"
	"syscall"

	"github.com/jpoz/conveyor/pkg/hub"
)

func main() {
	ctx := context.Background()

	log := slog.New(slog.NewTextHandler(os.Stdout, nil))

	addr := os.Getenv("ADDR")
	if addr == "" {
		addr = ":4567"
	}
	redisAddr := os.Getenv("REDIS_ADDR")
	if redisAddr == "" {
		redisAddr = "redis://localhost:6379"
	}

	server, err := hub.NewServer(log, hub.Config{
		Addr:     addr,
		RedisURL: redisAddr,
	})

	ctx, cancel := context.WithCancel(ctx)
	go func() {
		err = server.Run(ctx)
		if err != nil {
			log.Error("failed to run server", slog.Any("error", err))
			os.Exit(1)
		}
	}()

	sigCh := make(chan os.Signal, 1)
	signal.Notify(sigCh, syscall.SIGINT, syscall.SIGTERM, syscall.SIGHUP)

	<-sigCh
	log.Info("Shutting down")
	cancel()
}
