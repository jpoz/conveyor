package storage_test

import (
	context "context"
	"fmt"
	"testing"

	"github.com/google/uuid"
	"github.com/jpoz/conveyor/storage"
	"github.com/jpoz/conveyor/wire"
	"github.com/stretchr/testify/assert"
	"google.golang.org/protobuf/proto"
)

func TestGetJob(t *testing.T) {
	ctx := context.Background()
	istore, s := NewHandler(t)
	defer s.Close()
	store := istore.(*storage.RedisHandler)
	jobid := uuid.New().String()

	// if the job is missing
	job, err := store.GetActiveJob(ctx, jobid)
	assert.NoError(t, err)
	assert.Nil(t, job)

	rdb := RedisClient(t, s)

	// if the job is present
	job = &wire.Job{
		Type:    "foo.Bar",
		Queue:   "foo.Bar",
		Payload: []byte("bar"),
		Uuid:    jobid,
	}
	jobBytes, err := proto.Marshal(job)
	assert.NoError(t, err)
	fmt.Println("jobBytes", jobBytes)
	rdb.Set(ctx, store.JobKey(jobid), jobBytes, 0)
	job, err = store.GetActiveJob(ctx, jobid)
	assert.NoError(t, err)
	assert.NotNil(t, job)

	// if the job data is corrupted
	rdb.Set(ctx, store.JobKey(jobid), []byte("baddata"), 0)
	job, err = store.GetActiveJob(ctx, jobid)
	assert.Nil(t, job)
	assert.Error(t, err)
}
