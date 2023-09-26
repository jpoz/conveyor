package main

import (
	"context"
	"log"
	"os"
	"os/signal"
	"syscall"

	"github.com/jpoz/conveyor/hub"
)

func main() {
	ctx := context.Background()
	ctx, cancel := context.WithCancel(ctx)
	opts, err := hub.ParseArgs()
	if err != nil {
		log.Fatal(err)
	}

	config, err := hub.ReadConfig(opts.ConfigPath)
	if err != nil {
		log.Fatal(err)
	}

	server, err := hub.NewServer(opts, config)
	if err != nil {
		log.Fatal(err)
	}

	go func() {
		err = server.Run(ctx)
		if err != nil {
			log.Fatal(err)
		}
	}()

	sigCh := make(chan os.Signal, 1)
	signal.Notify(sigCh, syscall.SIGINT, syscall.SIGTERM, syscall.SIGHUP)

	<-sigCh
	log.Println("Shutting down...")
	cancel()
}
