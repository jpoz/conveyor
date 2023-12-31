package storage_test

import (
	context "context"
	"testing"

	"github.com/jpoz/conveyor/storage"
	"github.com/jpoz/conveyor/wire"
	"github.com/redis/go-redis/v9"
	"github.com/sirupsen/logrus"
	"github.com/stretchr/testify/assert"
	"google.golang.org/protobuf/proto"
)

func TestCloseJob(t *testing.T) {
	ctx := context.Background()
	rdb, s := NewRedisClient(t)
	store := storage.NewRedisHandler(logrus.New(), rdb)
	defer s.Close()

	job := &wire.Job{
		Type:    "foo.Bar",
		Queue:   "foo.Bar",
		Payload: []byte("bar"),
	}

	err := store.AddJob(ctx, job)
	assert.NoError(t, err)

	job, err = store.Pop(ctx, "foo.Bar")
	assert.NoError(t, err)

	bool, err := store.CloseJob(ctx, job)
	assert.NoError(t, err)
	assert.True(t, bool)
}

func TestCloseJob_multiple_closes(t *testing.T) {
	ctx := context.Background()
	rdb, s := NewRedisClient(t)
	store := storage.NewRedisHandler(logrus.New(), rdb)
	defer s.Close()

	job := &wire.Job{
		Type:    "foo.Bar",
		Queue:   "foo.Bar",
		Payload: []byte("bar"),
	}

	err := store.AddJob(ctx, job)
	assert.NoError(t, err)

	job, err = store.Pop(ctx, "foo.Bar")
	assert.NoError(t, err)

	for i := 0; i < 10; i++ {
		bool, err := store.CloseJob(ctx, job)
		assert.NoError(t, err)
		assert.True(t, bool)
	}
}

func TestCloseJob_withChild(t *testing.T) {
	ctx := context.Background()
	rdb, s := NewRedisClient(t)
	store := storage.NewRedisHandler(logrus.New(), rdb)
	defer s.Close()

	job := &wire.Job{
		Type:    "foo.Bar",
		Queue:   "foo.Bar",
		Payload: []byte("bar"),
	}

	err := store.AddJob(ctx, job)
	assert.NoError(t, err)

	job, err = store.Pop(ctx, "foo.Bar")
	assert.NoError(t, err)

	childJob := &wire.Job{
		Type:       "foo.Baz",
		Queue:      "foo.Baz",
		Payload:    []byte("baz"),
		ParentUuid: job.Uuid,
	}

	err = store.AddJob(ctx, childJob)
	assert.NoError(t, err)

	jb, err := rdb.Get(ctx, "job:"+job.Uuid).Result()
	assert.NoError(t, err)
	rjob := &wire.Job{}
	err = proto.Unmarshal([]byte(jb), rjob)
	assert.NoError(t, err)
	assert.Equal(t, "foo.Bar", rjob.Type)
	assert.Equal(t, []byte("bar"), rjob.Payload)

	bool, err := store.CloseJob(ctx, job)
	assert.NoError(t, err)
	assert.False(t, bool) // should not close since the child is still open

	bool, err = store.CloseJob(ctx, childJob)
	assert.NoError(t, err)
	assert.True(t, bool)

	// Job has been deleted
	_, err = rdb.Get(ctx, job.Uuid).Result()
	assert.ErrorIs(t, err, redis.Nil)

	// reclosing a job has no effect
	bool, err = store.CloseJob(ctx, job)
	assert.NoError(t, err)
	assert.True(t, bool)
}

func TestCloseJob_withChildren(t *testing.T) {
	ctx := context.Background()
	rdb, s := NewRedisClient(t)
	store := storage.NewRedisHandler(logrus.New(), rdb)
	defer s.Close()

	job := &wire.Job{
		Type:    "foo.Bar",
		Queue:   "foo.Bar",
		Payload: []byte("bar"),
	}

	err := store.AddJob(ctx, job)
	assert.NoError(t, err)

	job, err = store.Pop(ctx, "foo.Bar")
	assert.NoError(t, err)

	childJobs := []*wire.Job{}
	for i := 0; i < 3; i++ {
		childJob := &wire.Job{
			Type:       "foo.Baz",
			Queue:      "foo.Baz",
			Payload:    []byte("baz"),
			ParentUuid: job.Uuid,
		}
		err = store.AddJob(ctx, childJob)
		assert.NoError(t, err)
		childJobs = append(childJobs, childJob)
	}

	bool, err := store.CloseJob(ctx, job)
	assert.NoError(t, err)
	assert.False(t, bool) // should not close since the child is still open
	_, err = rdb.Get(ctx, "job:"+job.Uuid).Result()
	assert.NoError(t, err)

	bool, err = store.CloseJob(ctx, childJobs[0])
	assert.NoError(t, err)
	assert.False(t, bool) // should not close since siblings are still open
	_, err = rdb.Get(ctx, "job:"+job.Uuid).Result()
	assert.NoError(t, err)

	bool, err = store.CloseJob(ctx, childJobs[1])
	assert.NoError(t, err)
	assert.False(t, bool) // should not close since sibling is still open
	_, err = rdb.Get(ctx, "job:"+job.Uuid).Result()
	assert.NoError(t, err)

	bool, err = store.CloseJob(ctx, childJobs[2])
	assert.NoError(t, err)
	assert.True(t, bool) // all siblings have been closed
}

func TestCloseJob_withOnComplete(t *testing.T) {
	ctx := context.Background()
	rdb, s := NewRedisClient(t)
	store := storage.NewRedisHandler(logrus.New(), rdb)
	defer s.Close()

	job := &wire.Job{
		Type:    "foo.Bar",
		Queue:   "foo.Bar",
		Payload: []byte("bar"),
	}

	err := store.AddJob(ctx, job)
	assert.NoError(t, err)

	job, err = store.Pop(ctx, "foo.Bar")
	assert.NoError(t, err)

	completeJob := &wire.Job{
		Type:            "foo.Com",
		Queue:           "foo.Com",
		Payload:         []byte("complete"),
		PredecessorUuid: job.Uuid,
	}
	err = store.AddJob(ctx, completeJob)
	assert.NoError(t, err)

	comJob, err := store.Pop(ctx, "foo.Com")
	assert.NoError(t, err)
	assert.Nil(t, comJob)

	bool, err := store.CloseJob(ctx, job)
	assert.NoError(t, err)
	assert.True(t, bool)

	// onComplete job has been enqueued
	comJob, err = store.Pop(ctx, "foo.Com")
	assert.NoError(t, err)
	assert.NotNil(t, comJob)
	assert.Equal(t, "foo.Com", comJob.Type)
	assert.Equal(t, []byte("complete"), comJob.Payload)
	assert.Equal(t, job.Uuid, comJob.PredecessorUuid)
}

func TestCloseJob_errors_invalid_children_list(t *testing.T) {
	ctx := context.Background()
	rdb, s := NewRedisClient(t)
	store := storage.NewRedisHandler(logrus.New(), rdb)
	defer s.Close()

	job := &wire.Job{
		Type:    "foo.Bar",
		Queue:   "foo.Bar",
		Payload: []byte("bar"),
	}

	err := store.AddJob(ctx, job)
	assert.NoError(t, err)

	job, err = store.Pop(ctx, "foo.Bar")
	assert.NoError(t, err)

	// Force an error by setting the children to a wrong type
	rdb.Del(ctx, "job:"+job.Uuid+":children")
	rdb.Set(ctx, "job:"+job.Uuid+":children", "wrongType", 0)

	bool, err := store.CloseJob(ctx, job)
	assert.ErrorIs(t, err, storage.ErrFatalError)
	assert.False(t, bool)
}

func TestCloseJob_errors_invalid_child_payload(t *testing.T) {
	ctx := context.Background()
	rdb, s := NewRedisClient(t)
	store := storage.NewRedisHandler(logrus.New(), rdb)
	defer s.Close()

	job := &wire.Job{
		Type:    "foo.Bar",
		Queue:   "foo.Bar",
		Payload: []byte("bar"),
	}

	err := store.AddJob(ctx, job)
	assert.NoError(t, err)

	job, err = store.Pop(ctx, "foo.Bar")
	assert.NoError(t, err)

	// Force an error by setting a child as an invalid wire.Job
	err = rdb.LPush(ctx, "job:"+job.Uuid+":children", "invalidPayload").Err()
	assert.NoError(t, err)

	bool, err := store.CloseJob(ctx, job)
	assert.ErrorIs(t, err, storage.ErrFatalError)
	assert.False(t, bool)
}

func TestCloseJob_errors_child_queue_is_invalid_type(t *testing.T) {
	ctx := context.Background()
	rdb, s := NewRedisClient(t)
	store := storage.NewRedisHandler(logrus.New(), rdb)
	defer s.Close()

	job := &wire.Job{
		Type:    "foo.Bar",
		Queue:   "foo.Bar",
		Payload: []byte("bar"),
	}

	err := store.AddJob(ctx, job)
	assert.NoError(t, err)

	job, err = store.Pop(ctx, "foo.Bar")
	assert.NoError(t, err)

	childJob := &wire.Job{
		Type:       "foo.Boo",
		Queue:      "foo.Boo",
		Payload:    []byte("bar"),
		ParentUuid: job.Uuid,
	}

	err = store.AddJob(ctx, childJob)
	assert.NoError(t, err)

	// Force an setting the children's queue to the wrong type
	err = rdb.Set(ctx, childJob.Queue, "oops", 0).Err()
	assert.NoError(t, err)

	bool, err := store.CloseJob(ctx, job)
	assert.ErrorIs(t, err, storage.ErrFatalError)
	assert.False(t, bool)
}

func TestCloseJob_errors_children_set_invalid_type(t *testing.T) {
	ctx := context.Background()
	rdb, s := NewRedisClient(t)
	store := storage.NewRedisHandler(logrus.New(), rdb)
	defer s.Close()

	job := &wire.Job{
		Type:    "foo.Bar",
		Queue:   "foo.Bar",
		Payload: []byte("bar"),
	}

	err := store.AddJob(ctx, job)
	assert.NoError(t, err)

	job, err = store.Pop(ctx, "foo.Bar")
	assert.NoError(t, err)

	// Force an error by setting the active children set to the wrong type
	err = rdb.Set(ctx, "job:"+job.Uuid+":active", "oops", 0).Err()
	assert.NoError(t, err)

	bool, err := store.CloseJob(ctx, job)
	assert.ErrorIs(t, err, storage.ErrFatalError)
	assert.False(t, bool)
}

func TestCloseJob_errors_onCompelete_list_invalid_type(t *testing.T) {
	ctx := context.Background()
	rdb, s := NewRedisClient(t)
	store := storage.NewRedisHandler(logrus.New(), rdb)
	defer s.Close()

	job := &wire.Job{
		Type:    "foo.Bar",
		Queue:   "foo.Bar",
		Payload: []byte("bar"),
	}

	err := store.AddJob(ctx, job)
	assert.NoError(t, err)

	job, err = store.Pop(ctx, "foo.Bar")
	assert.NoError(t, err)

	// Force an error by setting the onComplete list to the wrong type
	err = rdb.Set(ctx, "job:"+job.Uuid+":onComplete", "oops", 0).Err()
	assert.NoError(t, err)

	bool, err := store.CloseJob(ctx, job)
	assert.ErrorIs(t, err, storage.ErrFatalError)
	assert.False(t, bool)
}

func TestCloseJob_errors_onComplete_list_item_is_invalid(t *testing.T) {
	ctx := context.Background()
	rdb, s := NewRedisClient(t)
	store := storage.NewRedisHandler(logrus.New(), rdb)
	defer s.Close()

	job := &wire.Job{
		Type:    "foo.Bar",
		Queue:   "foo.Bar",
		Payload: []byte("bar"),
	}

	err := store.AddJob(ctx, job)
	assert.NoError(t, err)

	job, err = store.Pop(ctx, "foo.Bar")
	assert.NoError(t, err)

	// Force an setting the children's queue to the wrong type
	err = rdb.LPush(ctx, "job:"+job.Uuid+":onComplete", "oops").Err()
	assert.NoError(t, err)

	bool, err := store.CloseJob(ctx, job)
	assert.ErrorIs(t, err, storage.ErrFatalError)
	assert.False(t, bool)
}

func TestCloseJob_errors_onComplete_queue_is_invalid_type(t *testing.T) {
	ctx := context.Background()
	rdb, s := NewRedisClient(t)
	store := storage.NewRedisHandler(logrus.New(), rdb)
	defer s.Close()

	job := &wire.Job{
		Type:    "foo.Bar",
		Queue:   "foo.Bar",
		Payload: []byte("bar"),
	}

	err := store.AddJob(ctx, job)
	assert.NoError(t, err)

	job, err = store.Pop(ctx, "foo.Bar")
	assert.NoError(t, err)

	onCompleteJob := &wire.Job{
		Type:            "foo.Baz",
		Queue:           "foo.Baz",
		Payload:         []byte("baz"),
		PredecessorUuid: job.Uuid,
	}

	err = store.AddJob(ctx, onCompleteJob)
	assert.NoError(t, err)

	// Force an setting the children's queue to the wrong type
	err = rdb.Set(ctx, "foo.Baz", "oops", 0).Err()
	assert.NoError(t, err)

	bool, err := store.CloseJob(ctx, job)
	assert.ErrorIs(t, err, storage.ErrFatalError)
	assert.False(t, bool)
}
