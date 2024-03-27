<p align="center">
  <img src="https://raw.githubusercontent.com/jpoz/conveyor/main/misc/logo.png" height="250" alt="Conveyor Gopher" />
</p>
<p align="center">
  <em>Chain-able background job runner</em>
</p>

# Conveyor

[![Go Report Card](https://goreportcard.com/badge/github.com/jpoz/conveyor)](https://goreportcard.com/report/github.com/jpoz/conveyor)

⛓️  Chain-able background jobs
📠 Typed payloads using protobuf
🛠️ Built in admin, that can be embedded within your app

An asynchronous job runner, enabling developers to efficiently chain jobs together in a highly structured manner. This capability allows for the creation of complex job hierarchies, where a single job can trigger multiple child jobs, followed by an heir job that executes upon the completion of all child jobs.

Conveyor can manage multiple layers of chained jobs, streamlining the execution process and enhancing code performance. It's not just about running tasks; it's about doing so in a way that's both logical and efficient, tailored for developers looking for precision and control in their asynchronous operations.

All jobs are fully typed using protobuf. Allowing structured data that can evolve with your application. Since protobuf is language-neutral it also allows the possibility for other languages to start jobs and other languages to be conveyor workers.

## Example

#### Producer

```go
package main

import (
	"context"
	"log/slog"
	"os"

	"github.com/jpoz/conveyor/_examples/basic"
	conveyor "github.com/jpoz/conveyor/pkg"
	"github.com/jpoz/conveyor/pkg/config"
)

func main() {
	cfg := config.Project{
		RedisURL: "redis://localhost:6379",
		Logger:   slog.Default(),
	}

	client, err := conveyor.NewClient(&cfg)
	if err != nil {
		slog.Error("failed to create client", slog.String("error", err.Error()))
		os.Exit(1)
	}

	result, err := client.Enqueue(context.Background(), &basic.BasicJob{
		Name:  "Bob",
		Count: 123,
	})
	if err != nil {
		slog.Error("failed to enqueue job", slog.String("error", err.Error()))
		os.Exit(1)
	}

	slog.Info("job enqueued", slog.String("uuid", result.Uuid))
}
```

#### Worker

Run [basic.RunBasicJob](_examples/basic/work.go) when a `basic.BasicJob` is received.

```go
package main

import (
	"context"
	"log/slog"
	"os"

	"github.com/jpoz/conveyor/_examples/basic"
	conveyor "github.com/jpoz/conveyor/pkg"
	"github.com/jpoz/conveyor/pkg/config"
)

func main() {
	cfg := config.Project{
		RedisURL: "redis://localhost:6379",
		Logger:   slog.Default(),
	}

	w, err := conveyor.NewWorker(&cfg)
	if err != nil {
		slog.Error("failed to create worker", slog.String("error", err.Error()))
		os.Exit(1)
	}

	err = w.RegisterJobs(basic.RunBasicJob)
	if err != nil {
		slog.Error("failed to register jobs", slog.String("error", err.Error()))
		os.Exit(1)
	}

	w.Run(context.Background())
}
```
