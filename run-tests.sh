#!/bin/bash
set -e

# Start Redis container
docker-compose -f test-docker-compose.yml up -d

# Run integration tests
gotestsum -f testname -- -race ./... -tags=integration

# Stop Redis container
docker-compose -f test-docker-compose.yml down
