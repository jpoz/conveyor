<p align="center">
  <img src="https://raw.githubusercontent.com/jpoz/conveyor/main/misc/logo.png" height="250" alt="Conveyor Gopher" />
</p>
<p align="center">
  <em>Chainable background job runner</em>
</p>

# Conveyor

[![Go Report Card](https://goreportcard.com/badge/github.com/jpoz/conveyor)](https://goreportcard.com/report/github.com/jpoz/conveyor)

**Multi-language background job runner.**

Conveyor is an asyncronous job runner that can run in multiple languages. It uses protobufs to have typed communication between languages.

## Go Example

#### Producer

```go
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
```

#### Worker

```go
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

```
