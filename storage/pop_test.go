package storage_test

import (
	"context"
	"fmt"
	"testing"

	"github.com/google/uuid"
	"github.com/jpoz/conveyor/storage"
	"github.com/jpoz/conveyor/wire"
	"github.com/redis/go-redis/v9"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
	"google.golang.org/protobuf/proto"
)

func TestPop(t *testing.T) {
	ctx := context.Background()
	var err error
	store, s := NewHandler(t)
	rHandler, ok := store.(*storage.RedisHandler)
	require.True(t, ok)
	defer s.Close()

	queue := "foo." + uuid.NewString()

	job := &wire.Job{
		Uuid:    uuid.New().String(),
		Type:    "foo.Bar",
		Queue:   queue,
		Payload: []byte("bar"),
	}

	err = store.AddJob(ctx, job)
	assert.NoError(t, err)

	poppedJob, err := store.Pop(ctx, "workerUuid", job.Queue)
	assert.NoError(t, err)
	require.NotNil(t, job)
	require.Equal(t, job.Uuid, poppedJob.Uuid)

	opt, err := redis.ParseURL(fmt.Sprintf("redis://%s", s.Addr()))
	require.NoError(t, err)
	rdb := redis.NewClient(opt)

	jb, err := rdb.Get(ctx, rHandler.JobKey(job.Uuid)).Result()
	assert.NoError(t, err)
	rjob := &wire.Job{}
	err = proto.Unmarshal([]byte(jb), rjob)
	assert.NoError(t, err)
	assert.Equal(t, "foo.Bar", rjob.Type)
	assert.Equal(t, []byte("bar"), rjob.Payload)

	members, err := rdb.SMembers(ctx, rHandler.WorkerActiveJobsKey("workerUuid")).Result()
	assert.NoError(t, err)
	assert.Equal(t, []string{job.Uuid}, members)
}
