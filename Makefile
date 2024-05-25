#!make

CGO_ENABLED?=0
GOCMD=CGO_ENABLED=$(CGO_ENABLED) go
GOTEST=gotestsum -f testname
GOVET=$(GOCMD) vet
SERVICE_PORT?=9000

PROTO_FILES:=$(shell find . -type f -name "*.proto" -print)
GO_PKGS:=$(shell go list ./... | grep -v github.com/jpoz/conveyor/examples/ | grep -v github.com/jpoz/conveyor/fixtures/ | grep -v github.com/jpoz/conveyor/integration/)

GREEN  := $(shell tput -Txterm setaf 2)
YELLOW := $(shell tput -Txterm setaf 3)
WHITE  := $(shell tput -Txterm setaf 7)
CYAN   := $(shell tput -Txterm setaf 6)
RESET  := $(shell tput -Txterm sgr0)

.PHONY: all
all: help


## Initial
.PHONY: install
install: ## install dependencies
	brew install pre-commit protobuf
	pre-commit install
	go install github.com/cespare/reflex@latest
	go install github.com/kisielk/errcheck@latest
	go install honnef.co/go/tools/cmd/staticcheck@latest
	go install google.golang.org/protobuf/cmd/protoc-gen-go@latest
	go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest
	go install github.com/chrusty/protoc-gen-jsonschema/cmd/protoc-gen-jsonschema@latest
	go install github.com/jpoz/protoc-gen-go-sqljson/cmd/protoc-gen-go-sqljson@latest
	go mod download
	cd ui && npm install
	pip install protobuf protoletariat

## Dev
.PHONY: docker
docker: ## setup docker
	docker-compose up -d

.PHONY: docker-down
docker-down: ## shutdown docker
	docker-compose down

.PHONY: docker-clean
docker-clean: ## nuke the docker-compose and volumes
	docker-compose down -v

.PHONY: hub
hub: docker  ## Run hub
	$(GOCMD) run cmd/hub/main.go

.PHONY: dev
dev: docker ## Run hub (rebuilt with air)
	air

.PHONY: dev_recurring_job
dev_recurring_job: docker templ## Run recurring job (for development)
	go run _examples/recurring/main.go

.PHONY: templ
templ: ## Run worker (for development)
	go run -mod=mod github.com/a-h/templ/cmd/templ generate

.PHONY: dev_worker
dev_worker: docker
	(cd ui && npm start)

## Gen
.PHONY: gen
gen: ## Generate protobuf models
	go generate ./...

.PHONY: gen_protos
gen_protos: gen_go_protos ## Generate protobuf models


.PHONY: gen_go_protos
gen_go_protos:
	@echo ${PROTO_FILES}
	protoc --go_out=. --go_opt=paths=source_relative \
			--go-grpc_out=. --go-grpc_opt=paths=source_relative \
			${PROTO_FILES}

## Test
.PHONY: test
test: ## Run tests
	$(GOTEST) -- -race ${GO_PKGS}

.PHONY: cover
cover: test ## Generate coverage report
	$(GOCMD) tool cover -html=coverage.out

.PHONY: integration
integration: ## Run tests + integration
	./run-tests.sh

.PHONY: build
build: ui_build  ## Build hub cmd
	$(GOCMD) build -o conveyor cmd/hub/main.go

## Help:
.PHONY: help
help: ## Show this help.
	@echo ''
	@echo 'Usage:'
	@echo '  ${YELLOW}make${RESET} ${GREEN}<target>${RESET}'
	@echo ''
	@echo 'Targets:'
	@awk 'BEGIN {FS = ":.*?## "} { \
		if (/^[a-zA-Z_-]+:.*?##.*$$/) {printf "    ${YELLOW}%-20s${GREEN}%s${RESET}\n", $$1, $$2} \
		else if (/^## .*$$/) {printf "  ${CYAN}%s${RESET}\n", substr($$1,4)} \
		}' $(MAKEFILE_LIST)
