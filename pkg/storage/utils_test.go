package storage_test

import (
	"fmt"
	"log/slog"
	"testing"

	"github.com/alicebob/miniredis/v2"
	"github.com/jpoz/conveyor/pkg/storage"
	"github.com/redis/go-redis/v9"
	"github.com/stretchr/testify/require"
)

func NewMiniRedis(t *testing.T) (string, *miniredis.Miniredis) {
	s := miniredis.RunT(t)
	return fmt.Sprintf("redis://%s", s.Addr()), s
}

func NewHandler(t *testing.T) (storage.Handler, *miniredis.Miniredis) {
	url, s := NewMiniRedis(t)
	store, err := storage.NewRedisHandler(slog.Default(), url)
	require.NoError(t, err)
	return store, s
}

func RedisClient(t *testing.T, s *miniredis.Miniredis) *redis.Client {
	opt, err := redis.ParseURL(fmt.Sprintf("redis://%s", s.Addr()))
	require.NoError(t, err)
	return redis.NewClient(opt)
}
