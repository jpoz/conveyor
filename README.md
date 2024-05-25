<p align="center">
  <img src="https://raw.githubusercontent.com/jpoz/conveyor/main/misc/logo.png" height="250" alt="Conveyor Gopher" />
</p>
<p align="center">
  <em>Chain-able background job runner</em>
</p>

# Conveyor

[![Go Report Card](https://goreportcard.com/badge/github.com/jpoz/conveyor)](https://goreportcard.com/report/github.com/jpoz/conveyor)
[![Go Reference](https://pkg.go.dev/badge/github.com/jpoz/conveyor.svg)](https://pkg.go.dev/github.com/jpoz/conveyor)

- ⛓️  Chain-able background jobs
- 📠 Typed payloads using protobuf
- 🛠️ Built in admin, that can be embedded within your app

An asynchronous job runner, enabling developers to efficiently chain jobs together in a highly structured manner. This capability allows for the creation of complex job hierarchies, where a single job can trigger multiple child jobs, followed by an heir job that executes upon the completion of all child jobs.

Conveyor can manage multiple layers of chained jobs, streamlining the execution process and enhancing code performance. It's not just about running tasks; it's about doing so in a way that's both logical and efficient, tailored for developers looking for precision and control in their asynchronous operations.

Leveraging protobuf, Conveyor ensures all jobs are precisely typed.  Using protobufs allows for structured data that evolves with your application. It also supports a language-neutral ecosystem. This versatility opens the door for other programming languages to initiate jobs and serve as Conveyor workers, enhancing interoperability and flexibility across different coding environments.

Conveyor incorporates a built-in admin package, designed to enhance operational efficiency and oversight. This package integrates seamlessly, providing a http.Handler  that can be served where you need it, whether that's within an existing admin service or protected by simple HTTP basic authentication. The admin interface offers comprehensive visibility into the queue, enabling admins to view and cancel jobs as needed.

## Requirements

- [Go >= 1.22](https://golang.org)
- [Protobuf](https://developers.google.com/protocol-buffers)
- [Redis](https://redis.io)

## Example

#### Producer

```go
package main

import (
	"context"
	"log/slog"
	"os"

	"github.com/jpoz/conveyor/_examples/basic"
	conveyor "github.com/jpoz/conveyor"
	"github.com/jpoz/conveyor/config"
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

Run [`basic.RunBasicJob`](_examples/basic/work.go) when a [`basic.BasicJob`](/_examples/basic/jobtypes.pb.go#L23-L30) is received.

```go
package main

import (
	"context"
	"log/slog"
	"os"

	"github.com/jpoz/conveyor/_examples/basic"
	conveyor "github.com/jpoz/conveyor"
	"github.com/jpoz/conveyor/config"
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


#### TODO

- [ ] Move pkg out of pkg dir
- [ ] Fix error when hub is used outside of the project
- [ ] Add Addr to Project config
- [ ] Fail worker if Redis doesn't connect
- [ ] s/RegisterJobs/Register
