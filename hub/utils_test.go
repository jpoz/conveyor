package hub_test

import (
	"fmt"
	"testing"

	"github.com/alicebob/miniredis/v2"
	"github.com/redis/go-redis/v9"
)

func NewRedisClient(t *testing.T) (*redis.Client, *miniredis.Miniredis) {
	s := miniredis.RunT(t)
	redisOpts, err := redis.ParseURL(fmt.Sprintf("redis://%s", s.Addr()))
	if err != nil {
		panic(err)
	}
	rdb := redis.NewClient(redisOpts)

	return rdb, s
}
