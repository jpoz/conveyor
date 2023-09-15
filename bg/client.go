package bg

import (
	"context"

	"github.com/jpoz/protojob/wire"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
	"google.golang.org/protobuf/proto"
)

type HubClient struct {
	Hub  wire.HubClient
	conn *grpc.ClientConn
}

type Result struct {
	Uuid string
}

func NewClient(hubAddr string) *HubClient {
	var opts []grpc.DialOption

	opts = append(opts, grpc.WithTransportCredentials(insecure.NewCredentials()))
	conn, err := grpc.Dial(hubAddr, opts...)
	if err != nil {
		panic(err)
	}

	return &HubClient{
		Hub:  wire.NewHubClient(conn),
		conn: conn,
	}
}

func (c *HubClient) Close() error {
	if c.conn == nil {
		return nil
	}
	return c.conn.Close()
}

func (c *HubClient) Enqueue(ctx context.Context, msg proto.Message) (*Result, error) {
	payload, err := proto.Marshal(msg)
	if err != nil {
		return nil, err
	}

	msgName := proto.MessageName(msg)

	req := &wire.AddRequest{
		Type:    string(msgName),
		Queue:   string(msgName),
		Payload: payload,
	}

	return c.add(ctx, req)
}

func (c *HubClient) EnqueueChild(ctx context.Context, msg proto.Message) (*Result, error) {
	parent := Job(ctx)
	payload, err := proto.Marshal(msg)
	if err != nil {
		return nil, err
	}

	msgName := proto.MessageName(msg)

	req := &wire.AddRequest{
		Type:       string(msgName),
		Queue:      string(msgName),
		Payload:    payload,
		ParentUuid: parent.Uuid,
	}

	return c.add(ctx, req)
}

func (c *HubClient) EnqueueHeir(ctx context.Context, msg proto.Message) (*Result, error) {
	predecessor := Job(ctx)
	payload, err := proto.Marshal(msg)
	if err != nil {
		return nil, err
	}

	msgName := proto.MessageName(msg)

	req := &wire.AddRequest{
		Type:            string(msgName),
		Queue:           string(msgName),
		Payload:         payload,
		PredecessorUuid: predecessor.Uuid,
	}

	return c.add(ctx, req)
}

func (c *HubClient) add(ctx context.Context, request *wire.AddRequest) (*Result, error) {
	resp, err := c.Hub.Add(ctx, request)
	if err != nil {
		return nil, err
	}

	if resp != nil {
		return &Result{Uuid: resp.Job.Uuid}, nil
	}

	return nil, nil
}
