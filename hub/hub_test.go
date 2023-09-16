package hub_test

import (
	context "context"
	"fmt"
	"testing"

	"github.com/alicebob/miniredis/v2"
	"github.com/jpoz/protojob/hub"
	"github.com/jpoz/protojob/wire"
	"github.com/redis/go-redis/v9"
	"github.com/stretchr/testify/assert"
	"google.golang.org/protobuf/proto"
)

func TestSubmitNewJob(t *testing.T) {
	ctx := context.Background()
	s := miniredis.RunT(t)
	redisURL := fmt.Sprintf("redis://%s", s.Addr())

	hub, err := hub.NewServer(
		hub.ServerArgs{},
		hub.Config{
			RedisURL: redisURL,
		},
	)
	assert.NoError(t, err)

	resp, err := hub.Add(ctx, &wire.AddRequest{
		Type:    "foo.Bar",
		Queue:   "foo.Bar",
		Payload: []byte("bar"), // not a valid protobuf
	})
	assert.NoError(t, err)
	assert.NotEmpty(t, resp.Job.Uuid)
	assert.True(t, resp.Success)

	redisOpts, err := redis.ParseURL(redisURL)
	if err != nil {
		panic(err)
	}
	rdb := redis.NewClient(redisOpts)

	list, err := rdb.LRange(ctx, "foo.Bar", 0, -1).Result()
	assert.NoError(t, err)
	assert.Len(t, list, 1)

	firstJob := &wire.Job{}
	if err := proto.Unmarshal([]byte(list[0]), firstJob); err != nil {
		t.Fatal(err)
	}

	assert.NotEmpty(t, firstJob.Uuid)
	assert.Equal(t, "foo.Bar", firstJob.Type)
	assert.Equal(t, []byte("bar"), firstJob.Payload)

	s.Close()
}

func TestSubmitNewJob_withParent(t *testing.T) {
	ctx := context.Background()
	s := miniredis.RunT(t)
	redisURL := fmt.Sprintf("redis://%s", s.Addr())

	hub, err := hub.NewServer(
		hub.ServerArgs{},
		hub.Config{
			RedisURL: redisURL,
		},
	)
	assert.NoError(t, err)

	resp, err := hub.Add(ctx, &wire.AddRequest{
		Type:       "foo.Bar",
		Queue:      "foo.Bar",
		Payload:    []byte("bar"), // not a valid protobuf
		ParentUuid: "1234-5678-9012-3456",
	})
	assert.NoError(t, err)
	assert.NotEmpty(t, resp.Job.Uuid)
	assert.True(t, resp.Success)

	redisOpts, err := redis.ParseURL(redisURL)
	if err != nil {
		panic(err)
	}
	rdb := redis.NewClient(redisOpts)

	list, err := rdb.LRange(ctx, "foo.Bar", 0, -1).Result()
	assert.NoError(t, err)
	assert.Len(t, list, 1)

	firstJob := &wire.Job{}
	if err := proto.Unmarshal([]byte(list[0]), firstJob); err != nil {
		t.Fatal(err)
	}

	assert.NotEmpty(t, firstJob.Uuid)
	assert.Equal(t, "foo.Bar", firstJob.Type)
	assert.Equal(t, []byte("bar"), firstJob.Payload)

	s.Close()
}
