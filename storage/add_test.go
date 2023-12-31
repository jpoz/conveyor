package storage_test

import (
	context "context"
	"testing"

	"github.com/jpoz/conveyor/storage"
	"github.com/jpoz/conveyor/wire"
	"github.com/sirupsen/logrus"
	"github.com/stretchr/testify/assert"
	"google.golang.org/protobuf/proto"
)

func TestAddJob(t *testing.T) {
	ctx := context.Background()
	rdb, s := NewRedisClient(t)
	store := storage.NewRedisHandler(logrus.New(), rdb)
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

	count, err := rdb.LLen(ctx, "foo.Bar").Result()
	assert.NoError(t, err)
	assert.Equal(t, int64(1), count)

	jbytes, err := rdb.LPop(ctx, "foo.Bar").Result()
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
	rdb, s := NewRedisClient(t)
	store := storage.NewRedisHandler(logrus.New(), rdb)
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

	count, err := rdb.LLen(ctx, "job:1234-5678-9012-3456:children").Result()
	assert.NoError(t, err)
	assert.Equal(t, int64(1), count)

	jbytes, err := rdb.RPop(ctx, "job:1234-5678-9012-3456:children").Result()
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
	rdb, s := NewRedisClient(t)
	store := storage.NewRedisHandler(logrus.New(), rdb)
	defer s.Close()

	job := &wire.Job{
		Type:            "foo.Baz",
		Queue:           "foo.Baz",
		Payload:         []byte("bar"),
		PredecessorUuid: "1234-5678-9012-3456",
	}

	err := store.AddJob(ctx, job)
	assert.NoError(t, err)

	count, err := rdb.LLen(ctx, "job:1234-5678-9012-3456:onComplete").Result()
	assert.NoError(t, err)
	assert.Equal(t, int64(1), count)

	jbytes, err := rdb.RPop(ctx, "job:1234-5678-9012-3456:onComplete").Result()
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
