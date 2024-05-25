package conveyor

import (
	"context"
	"fmt"
	"log/slog"
	"time"

	"google.golang.org/protobuf/proto"
	"google.golang.org/protobuf/types/known/timestamppb"

	"github.com/jpoz/conveyor/config"
	"github.com/jpoz/conveyor/storage"
	"github.com/jpoz/conveyor/wire"
)

type Client struct {
	handler storage.Handler
	cfg     config.ClientConfig
}

type Result struct {
	Uuid string
}

func NewClient(cfg config.ClientConfig) (*Client, error) {
	cfg.SetLogger(cfg.GetLogger().With(slog.String("client", "conveyor")))
	handler, err := storage.NewRedisHandler(cfg)
	if err != nil {
		return nil, fmt.Errorf("failed to create redis handler: %w", err)
	}

	err = handler.Ping(context.Background())
	if err != nil {
		return nil, fmt.Errorf("failed to ping redis: %w", err)
	}

	return &Client{
		handler: handler,
		cfg:     cfg,
	}, nil
}

func (c *Client) Close() error {
	return c.handler.Close()
}

type JobOption func(job *wire.Job) error

func Delay(delay time.Duration) JobOption {
	return func(job *wire.Job) error {
		runAt := time.Now().Add(delay)
		job.RunAt = timestamppb.New(runAt)
		return nil
	}
}

func RunAt(t time.Time) JobOption {
	return func(job *wire.Job) error {
		job.RunAt = timestamppb.New(t)
		return nil
	}
}

func (c *Client) Enqueue(ctx context.Context, msg proto.Message, opts ...JobOption) (*Result, error) {
	payload, err := proto.Marshal(msg)
	if err != nil {
		return nil, err
	}

	msgName := proto.MessageName(msg)

	job := &wire.Job{
		Type:    string(msgName),
		Queue:   string(msgName),
		Payload: payload,
	}

	for _, opt := range opts {
		err := opt(job)
		if err != nil {
			return nil, fmt.Errorf("failed to apply option: %#v %w", opt, err)
		}
	}

	return c.add(ctx, job)
}

func (c *Client) EnqueueChild(ctx context.Context, msg proto.Message) (*Result, error) {
	parent := CurrentJob(ctx)
	payload, err := proto.Marshal(msg)
	if err != nil {
		return nil, err
	}

	msgName := proto.MessageName(msg)

	job := &wire.Job{
		Type:       string(msgName),
		Queue:      string(msgName),
		Payload:    payload,
		ParentUuid: parent.Uuid,
	}

	return c.add(ctx, job)
}

func (c *Client) EnqueueHeir(ctx context.Context, msg proto.Message) (*Result, error) {
	predecessor := CurrentJob(ctx)
	payload, err := proto.Marshal(msg)
	if err != nil {
		return nil, err
	}

	msgName := proto.MessageName(msg)

	job := &wire.Job{
		Type:            string(msgName),
		Queue:           string(msgName),
		Payload:         payload,
		PredecessorUuid: predecessor.Uuid,
	}

	return c.add(ctx, job)
}

func (c *Client) add(ctx context.Context, job *wire.Job) (*Result, error) {
	err := c.handler.AddJob(ctx, job)
	if err != nil {
		return nil, err
	}

	return &Result{Uuid: job.Uuid}, nil
}
