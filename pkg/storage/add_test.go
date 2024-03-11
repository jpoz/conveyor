package storage_test

import (
	context "context"
	"testing"

	"github.com/jpoz/conveyor/pkg/storage"
	"github.com/jpoz/conveyor/wire"
	"github.com/stretchr/testify/assert"
	"google.golang.org/protobuf/proto"
)

func TestAddJob(t *testing.T) {
	ctx := context.Background()
	store, s := NewHandler(t)
	defer s.Close()

	// if the job is nil
	err := store.AddJob(ctx, nil)
	assert.Error(t, err)

	job := &wire.Job{
		Type:    "foo.Bar",
		Queue:   "foo.Bar",
		Payload: []byte("bar"), // not a valid protobuf
	}

	// Valid job
	err = store.AddJob(ctx, job)
	assert.NoError(t, err)
	assert.NotNil(t, job.Uuid) // Make sure we got a uuid

	rdb := RedisClient(t, s)
	count, err := rdb.LLen(ctx, storage.QueueKey(job.Queue)).Result()
	assert.NoError(t, err)
	assert.Equal(t, int64(1), count)

	jbytes, err := rdb.LPop(ctx, storage.QueueKey(job.Queue)).Result()
	assert.NoError(t, err)
	assert.NotNil(t, jbytes)

	rjob := &wire.Job{}
	err = proto.Unmarshal([]byte(jbytes), rjob)
	assert.NoError(t, err)

	assert.Equal(t, job.Type, rjob.Type)
	assert.Equal(t, job.Queue, rjob.Queue)
	assert.Equal(t, job.Payload, rjob.Payload)
}

func TestAddJob_Child(t *testing.T) {
	ctx := context.Background()
	store, s := NewHandler(t)
	defer s.Close()

	job := &wire.Job{
		Type:       "foo.Baz",
		Queue:      "foo.Baz",
		Payload:    []byte("bar"), // not a valid protobuf
		ParentUuid: "1234-5678-9012-3456",
	}

	// Valid job
	err := store.AddJob(ctx, job)
	assert.NoError(t, err)
	assert.NotNil(t, job.Uuid) // Make sure we got a uuid

	rdb := RedisClient(t, s)
	count, err := rdb.LLen(ctx, storage.ChildenListKey(job.ParentUuid)).Result()
	assert.NoError(t, err)
	assert.Equal(t, int64(1), count)

	jbytes, err := rdb.RPop(ctx, storage.ChildenListKey(job.ParentUuid)).Result()
	assert.NoError(t, err)
	assert.NotNil(t, jbytes)

	rjob := &wire.Job{}
	err = proto.Unmarshal([]byte(jbytes), rjob)
	assert.NoError(t, err)

	assert.Equal(t, job.Uuid, rjob.Uuid)
	assert.Equal(t, job.Type, rjob.Type)
	assert.Equal(t, job.Queue, rjob.Queue)
	assert.Equal(t, job.Payload, rjob.Payload)
	assert.Equal(t, job.ParentUuid, rjob.ParentUuid)
}

func TestAddJob_OnComplete(t *testing.T) {
	ctx := context.Background()
	store, s := NewHandler(t)
	defer s.Close()

	job := &wire.Job{
		Type:            "foo.Baz",
		Queue:           "foo.Baz",
		Payload:         []byte("bar"),
		PredecessorUuid: "1234-5678-9012-3456",
	}

	err := store.AddJob(ctx, job)
	assert.NoError(t, err)

	rdb := RedisClient(t, s)
	count, err := rdb.LLen(ctx, storage.OnCompleteListKey(job.PredecessorUuid)).Result()
	assert.NoError(t, err)
	assert.Equal(t, int64(1), count)

	jbytes, err := rdb.RPop(ctx, storage.OnCompleteListKey(job.PredecessorUuid)).Result()
	assert.NoError(t, err)
	assert.NotNil(t, jbytes)

	rjob := &wire.Job{}
	err = proto.Unmarshal([]byte(jbytes), rjob)
	assert.NoError(t, err)

	assert.Equal(t, job.Uuid, rjob.Uuid)
	assert.Equal(t, job.Type, rjob.Type)
	assert.Equal(t, job.Queue, rjob.Queue)
	assert.Equal(t, job.Payload, rjob.Payload)
	assert.Equal(t, job.ParentUuid, rjob.ParentUuid)
}
