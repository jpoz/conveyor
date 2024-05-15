package integration_test

import (
	"net"
	"sync"
	"testing"
)

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

// SetInt sets the int32 value
func (sd *SafeData) IncrInt(value int32) {
	sd.mu.Lock()
	sd.number += value
	sd.mu.Unlock()
}

// GetInt returns the int32 value
func (sd *SafeData) GetInt() int32 {
	sd.mu.Lock()
	defer sd.mu.Unlock()
	return sd.number
}
