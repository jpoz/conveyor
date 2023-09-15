package hub_test

import (
	context "context"
	"fmt"
	"testing"

	"github.com/alicebob/miniredis/v2"
	"github.com/jpoz/protojob/pkg/hub"
	"github.com/jpoz/protojob/wire"
	"github.com/redis/go-redis/v9"
	"github.com/sirupsen/logrus"
	"github.com/stretchr/testify/assert"
	"google.golang.org/protobuf/proto"
)

func TestGetJob(t *testing.T) {
	ctx := context.Background()
	s := miniredis.RunT(t)
	redisOpts, err := redis.ParseURL(fmt.Sprintf("redis://%s", s.Addr()))
	if err != nil {
		panic(err)
	}
	rdb := redis.NewClient(redisOpts)

	store := hub.NewRedisStorageHandler(logrus.New(), rdb)

	// if the job is missing
	job, err := store.GetJob(ctx, "foo")
	assert.NoError(t, err)
	assert.Nil(t, job)

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

	s.Close()
}
