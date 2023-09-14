package bg

import (
	"context"

	"github.com/jpoz/protojob/protos"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
	"google.golang.org/protobuf/proto"
)

type Client struct {
	hub  protos.HubClient
	conn *grpc.ClientConn
}

type Result struct {
	Uuid string
}

func NewClient(hubAddr string) *Client {
	var opts []grpc.DialOption

	opts = append(opts, grpc.WithTransportCredentials(insecure.NewCredentials()))
	conn, err := grpc.Dial(hubAddr, opts...)
	if err != nil {
		panic(err)
	}

	return &Client{
		hub: protos.NewHubClient(conn),
	}
}

func (c *Client) Close() error {
	return c.conn.Close()
}

func (c *Client) Enqueue(ctx context.Context, msg proto.Message) (*Result, error) {
	payload, err := proto.Marshal(msg)
	if err != nil {
		return nil, err
	}

	msgName := proto.MessageName(msg)

	req := &protos.NewJobRequest{
		FullName: string(msgName),
		Payload:  payload,
	}

	resp, err := c.hub.SubmitNewJob(ctx, req)
	if err != nil {
		return nil, err
	}

	return &Result{Uuid: resp.Job.Uuid}, nil
}
