package conveyor

import (
	"context"
	"fmt"
	"log/slog"

	"github.com/jpoz/conveyor/pkg/storage"
	"github.com/jpoz/conveyor/wire"
	"google.golang.org/protobuf/proto"
)

type Client struct {
	handler storage.Handler
	log     *slog.Logger
}

type Result struct {
	Uuid string
}

func NewClient(log *slog.Logger, redisAddr string) (*Client, error) {
	l := log.With(slog.String("client", "conveyor"))
	handler, err := storage.NewRedisHandler(l, redisAddr)
	if err != nil {
		return nil, fmt.Errorf("failed to create redis handler: %w", err)
	}

	err = handler.Ping(context.Background())
	if err != nil {
		return nil, fmt.Errorf("failed to ping redis: %w", err)
	}

	return &Client{
		handler: handler,
	}, nil
}

func (c *Client) Close() error {
	return c.handler.Close()
}

func (c *Client) Enqueue(ctx context.Context, msg proto.Message) (*Result, error) {
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
