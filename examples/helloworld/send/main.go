package main

import (
	"context"
	"log"

	"github.com/jpoz/protojob/bg"
	"github.com/jpoz/protojob/examples/helloworld/hello"
)

func main() {
	client := bg.NewClient("localhost:8080")

	response, err := client.Enqueue(context.Background(), &hello.HelloJob{
		Name:     "World",
		Greeting: "Hello",
	})
	if err != nil {
		log.Fatal(err)
	}

	println(response.Uuid)
}
