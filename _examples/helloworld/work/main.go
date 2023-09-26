package main

import (
	"context"
	"fmt"
	"log"

	"github.com/jpoz/conveyor/_examples/helloworld/hello"
	"github.com/jpoz/conveyor/libs/go/conveyor"
)

func helloJob(ctx context.Context, msg *hello.HelloJob) error {
	job := conveyor.Job(ctx)

	fmt.Printf("%s %s %s\n", job.Uuid, msg.Greeting, msg.Name)
	return nil
}

func main() {
	w := conveyor.NewWorker("localhost:8080")

	err := w.RegisterJob(helloJob)
	if err != nil {
		log.Fatal(err)
	}

	log.Fatal(w.Run(context.Background()))
}
