package main

import (
	"context"
	"log"

	"github.com/jpoz/conveyor/_examples/helloworld/hello" // protobuf types
	"github.com/jpoz/conveyor/libs/go/conveyor"
)

func main() {
	client := conveyor.NewClient("localhost:8080")

	response, err := client.Enqueue(context.Background(), &hello.HelloJob{
		Name:     "World",
		Greeting: "Hello",
	})
	if err != nil {
		log.Fatal(err)
	}

	println(response.Uuid)
}
