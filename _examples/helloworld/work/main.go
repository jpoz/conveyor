package main

import (
	"context"
	"fmt"
	"log"

	"github.com/jpoz/protojob/_examples/helloworld/hello"
	"github.com/jpoz/protojob/bg"
)

func helloJob(ctx context.Context, msg *hello.HelloJob) error {
	job := bg.Job(ctx)

	fmt.Printf("%s %s %s\n", job.Uuid, msg.Greeting, msg.Name)
	return nil
}

func main() {
	w := bg.NewWorker("localhost:8080")

	err := w.RegisterJob(helloJob)
	if err != nil {
		log.Fatal(err)
	}

	log.Fatal(w.Run(context.Background()))
}
