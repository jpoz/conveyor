package conveyor

import (
	"context"

	"github.com/jpoz/conveyor/libs/go/conveyor/storage"
	"github.com/jpoz/conveyor/wire"
	"github.com/redis/go-redis/v9"
	"github.com/sirupsen/logrus"
	"google.golang.org/protobuf/proto"
)

type Client struct {
	handler storage.Handler
}

type Result struct {
	Uuid string
}

func NewClient(redisAddr string) *Client {
	rds := redis.NewClient(&redis.Options{
		Addr: redisAddr,
	})
	return &Client{
		handler: storage.NewRedisHandler(logrus.New(), rds),
	}
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
