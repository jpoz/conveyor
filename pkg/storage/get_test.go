package storage_test

import (
	context "context"
	"testing"

	"github.com/jpoz/conveyor/wire"
	"github.com/stretchr/testify/assert"
	"google.golang.org/protobuf/proto"
)

func TestGetJob(t *testing.T) {
	ctx := context.Background()
	store, s := NewHandler(t)
	defer s.Close()

	// if the job is missing
	job, err := store.GetJob(ctx, "foo")
	assert.NoError(t, err)
	assert.Nil(t, job)

	rdb := RedisClient(t, s)

	// if the job is present
	job = &wire.Job{}
	jobBytes, err := proto.Marshal(job)
	assert.NoError(t, err)
	rdb.Set(ctx, "job:foo", jobBytes, 0)
	job, err = store.GetJob(ctx, "foo")
	assert.NoError(t, err)
	assert.NotNil(t, job)

	// if the job data is corrupted
	rdb.Set(ctx, "job:bar", []byte("baddata"), 0)
	job, err = store.GetJob(ctx, "bar")
	assert.Nil(t, job)
	assert.Error(t, err)
}
