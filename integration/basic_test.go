//go:build integration
// +build integration

package integration_test

import (
	context "context"
	"fmt"
	"net"
	"sync"
	"testing"
	"time"

	"github.com/jpoz/conveyor/fixtures"
	"github.com/jpoz/conveyor/hub"
	"github.com/jpoz/conveyor/libs/go/conveyor"
	"github.com/stretchr/testify/assert"
)

func TestBasic(t *testing.T) {
	fmt.Println("test basic")
	ctx := context.Background()
	ctx, cancel := context.WithCancel(ctx)
	var wg sync.WaitGroup
	errs := make(chan error, 1)

	addr := GetFreeAddress(t)

	data := &SafeData{}

	// Run Hub
	wg.Add(1)
	go func(t *testing.T) {
		args := hub.Config{
			Addr:     addr,
			RedisURL: "redis://localhost:6382",
		}
		server, err := hub.NewServer(hub.ServerArgs{}, args)
		fmt.Println("server created")
		wg.Done()
		if err != nil {
			errs <- err
		}

		close(errs)
		err = server.Listen(ctx)
		if err != nil {
			fmt.Println(err)
		}

		fmt.Println("hub done")
	}(t)

	wg.Wait()
	for err := range errs {
		t.Error(err)
	}

	go func(t *testing.T) {
		worker := conveyor.NewWorker(addr)

		worker.RegisterJob(func(ctx context.Context, msg *fixtures.Basic) error {
			data.SetString(msg.Str)
			data.SetInt(msg.Int)
			return nil
		})

		err := worker.Run(ctx)
		if err != nil {
			fmt.Println(err)
		}
		fmt.Println("worker done")
	}(t)

	time.Sleep(1 * time.Second)

	go func(t *testing.T) {
		client := conveyor.NewClient(addr)

		result, err := client.Enqueue(ctx, &fixtures.Basic{
			Str: "test",
			Int: 1,
		})

		assert.Nil(t, err)
		assert.NotEmpty(t, result.Uuid)

		fmt.Println("client done")
	}(t)

	time.Sleep(2 * time.Second)

	assert.Equal(t, "test", data.GetString())
	assert.Equal(t, int32(1), data.GetInt())

	cancel()
}

func GetFreeAddress(t *testing.T) string {
	listener, err := net.Listen("tcp", "localhost:0")
	if err != nil {
		t.Fatalf("Could not listen on a port: %s", err)
	}
	defer listener.Close()

	return listener.Addr().String()
}

// SafeData is a goroutine-safe data holder using a mutex
type SafeData struct {
	mu     sync.Mutex
	s      string
	number int32
}

// SetString sets the string value
func (sd *SafeData) SetString(value string) {
	sd.mu.Lock()
	sd.s = value
	sd.mu.Unlock()
}

// GetString returns the string value
func (sd *SafeData) GetString() string {
	sd.mu.Lock()
	defer sd.mu.Unlock()
	return sd.s
}

// SetInt sets the int32 value
func (sd *SafeData) SetInt(value int32) {
	sd.mu.Lock()
	sd.number = value
	sd.mu.Unlock()
}

// GetInt returns the int32 value
func (sd *SafeData) GetInt() int32 {
	sd.mu.Lock()
	defer sd.mu.Unlock()
	return sd.number
}
