package main

import (
	"context"
	"log"

	"github.com/jpoz/protojob/_examples/helloworld/hello"
	"github.com/jpoz/protojob/libs/go/protojob"
)

func main() {
	client := protojob.NewClient("localhost:8080")

	response, err := client.Enqueue(context.Background(), &hello.HelloJob{
		Name:     "World",
		Greeting: "Hello",
	})
	if err != nil {
		log.Fatal(err)
	}

	println(response.Uuid)
}
