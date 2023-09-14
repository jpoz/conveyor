package main

import (
	"context"
	"fmt"
	"log"

	"github.com/jpoz/protojob/bg"
	"github.com/jpoz/protojob/examples/helloworld/hello"
)

func main() {
	w := bg.NewWorker("localhost:8080")

	err := w.RegisterJob(func(ctx context.Context, msg *hello.HelloJob) error {
		fmt.Printf("msg: %v\n", msg)
		fmt.Printf("%s %s\n", msg.Greeting, msg.Name)
		return nil
	})
	if err != nil {
		log.Fatal(err)
	}

	log.Fatal(w.Run(context.Background()))
}
