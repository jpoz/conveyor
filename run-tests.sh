#!/bin/bash
set -e

# Start Redis container
docker-compose -f test-docker-compose.yml up -d

# Wait for Redis to initialize
echo "Waiting for Redis..."
# sleep 3

# Run integration tests
go test ./... -v -tags=integration

# Stop Redis container
docker-compose -f test-docker-compose.yml down
