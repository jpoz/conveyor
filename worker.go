package conveyor

import (
	"context"
	"errors"
	"fmt"
	"log/slog"
	"reflect"
	"sync"
	"time"

	"github.com/google/uuid"
	"github.com/jpoz/conveyor/config"
	"github.com/jpoz/conveyor/storage"
	"github.com/jpoz/conveyor/wire"
	"google.golang.org/protobuf/proto"
)

var ErrNoRegisteredJobs = errors.New("no registered jobs")
var ErrJobNotRegistered = errors.New("job not registered")

var ctxType = reflect.TypeOf((*context.Context)(nil)).Elem()
var errType = reflect.TypeOf((*error)(nil)).Elem()
var ifaceMessageType = reflect.TypeOf((*proto.Message)(nil)).Elem()

type registeredJob struct {
	fn any
	T  reflect.Type
}

type Worker struct {
	ID string

	cfg     config.WorkerConfig
	handler storage.Handler
	log     *slog.Logger
	client  *Client

	fnMap               map[string]registeredJob
	registeredFullNames []string
	middlewares         []WorkerMiddleware
}

type WorkerMiddleware func(ctx context.Context, job *wire.Job, next func(ctx context.Context) error) error

func NewWorker(cfg config.WorkerConfig) (*Worker, error) {
	baseLog := cfg.GetLogger()
	wlog := baseLog.With(slog.String("worker", uuid.New().String()))
	cfg.SetLogger(wlog)
	handler, err := storage.NewRedisHandler(cfg)
	if err != nil {
		return nil, fmt.Errorf("failed to create redis handler: %w", err)
	}

	err = handler.Ping(context.Background()) // TODO add a timeout
	if err != nil {
		return nil, fmt.Errorf("failed to ping redis: %w", err)
	}

	client, err := NewClient(cfg)
	if err != nil {
		return nil, fmt.Errorf("failed to create client: %w", err)
	}

	return &Worker{
		ID:                  uuid.New().String(),
		cfg:                 cfg,
		handler:             handler,
		client:              client,
		log:                 wlog,
		fnMap:               make(map[string]registeredJob),
		registeredFullNames: make([]string, 0),
	}, nil
}

func (w *Worker) RegisterJobs(fn ...any) error {
	for _, f := range fn {
		err := w.RegisterJob(f)
		if err != nil {
			return err
		}
	}
	return nil
}

func (w *Worker) RegisterJob(fn any) error {
	fnType := reflect.TypeOf(fn)
	// Make sure it's a function
	if fnType.Kind() != reflect.Func {
		return errors.New("fn must be a function")
	}

	// Get the number of input parameters
	numIn := fnType.NumIn()
	if numIn != 2 {
		return errors.New("fn must have 2 input parameters func(context.Context, proto.Message)")
	}

	contextType := fnType.In(0)
	if contextType != ctxType {
		return errors.New("first argument must be context.Context")
	}

	messageType := fnType.In(1)
	if !messageType.Implements(ifaceMessageType) {
		return errors.New("second argument must implement proto.Message")
	}

	if fnType.NumOut() != 1 {
		return errors.New("function must have a single return value")
	}

	outputType := fnType.Out(0)
	if outputType != errType {
		return errors.New("invalid return type")
	}

	instance := reflect.New(messageType).Elem().Interface()
	name := proto.MessageName(instance.(proto.Message))

	w.fnMap[string(name)] = registeredJob{
		fn: fn,
		T:  messageType,
	}
	w.registeredFullNames = append(w.registeredFullNames, string(name))

	return nil
}

func (w *Worker) Use(fn ...WorkerMiddleware) {
	w.middlewares = append(w.middlewares, fn...)
}

func (w *Worker) ContextFor(ctx context.Context, job *wire.Job) context.Context {
	ctx = JobContext(ctx, job)
	ctx = AddClientToContext(ctx, w.client)

	return ctx
}

func (w *Worker) CallJob(ctx context.Context, job *wire.Job) error {
	handler := func(ictx context.Context) error {
		w.log.Info("calling job!!", slog.String("uuid", job.Uuid), slog.Any("job", job))
		return w.callJob(ictx, job)
	}

	for i := len(w.middlewares) - 1; i >= 0; i-- {
		mw := w.middlewares[i]
		next := handler
		handler = func(ictx context.Context) error {
			return mw(ictx, job, next)
		}
	}

	err := handler(ctx)
	if err != nil {
		ierr := w.handler.FailJob(ctx, job.Uuid)
		if ierr != nil {
			return fmt.Errorf("failed to fail job %s: %w", job.Uuid, ierr)
		}
		return fmt.Errorf("job %s failed: %w", job.Uuid, err)
	}

	_, err = w.handler.CloseJob(ctx, job)
	if err != nil {
		return fmt.Errorf("failed to close job %s: %w", job.Uuid, err)
	}
	return nil
}

func (w *Worker) callJob(ctx context.Context, job *wire.Job) error {
	defer func() {
		if r := recover(); r != nil {
			w.log.Error("panic", slog.Any("panic", r))
		}
	}()

	registered, ok := w.fnMap[string(job.Type)]
	if !ok {
		w.log.Error("job not registered", slog.String("job", job.Type))
		return fmt.Errorf("[%s] %w, %s", w.ID, ErrJobNotRegistered, job.Type)
	}
	msgType := registered.T
	fn := registered.fn

	instance := reflect.New(msgType.Elem()).Interface()

	msg, ok := instance.(proto.Message)
	if !ok {
		w.log.Error("invalid message type", slog.String("job", job.Type))
		return errors.New("invalid message type")
	}

	err := proto.Unmarshal(job.Payload, msg)
	if err != nil {
		w.log.Error("failed to unmarshal payload", slog.String("job", job.Type))
		return fmt.Errorf("failed to unmarshal payload: %v", err)
	}

	val := reflect.ValueOf(fn)
	argVal := reflect.ValueOf(msg)

	ctx = w.ContextFor(ctx, job)

	ierr := w.handler.Notify(ctx, job, wire.JobStatus_RUNNING)
	if ierr != nil {
		w.log.Error("failed to notify on start", slog.String("error", ierr.Error()))
	}

	results := val.Call([]reflect.Value{
		reflect.ValueOf(ctx),
		argVal,
	})

	err, _ = results[0].Interface().(error)
	if err != nil {
		ierr := w.handler.Notify(ctx, job, wire.JobStatus_FAILED)
		if ierr != nil {
			w.log.Error("failed to notify on failure", slog.String("error", ierr.Error()))
		}
		w.log.Error("failed to call function", slog.String("error", err.Error()))
		return fmt.Errorf("failed to call function: %v", err)
	}

	ierr = w.handler.Notify(ctx, job, wire.JobStatus_COMPLETED)
	if ierr != nil {
		w.log.Error("failed to notify on completion", slog.String("error", ierr.Error()))
	}

	return nil
}

func (w *Worker) Heartbeat(ctx context.Context) error {
	for {
		err := w.handler.Ping(ctx)
		if err != nil {
			slog.Error("failed to ping redis", err)
		}

		tick := time.NewTicker(15 * time.Second)
		select {
		case <-tick.C:
		case <-ctx.Done():
			slog.Info("Stopping heartbeat")
			return nil
		}
	}
}

func (w *Worker) Run(ctx context.Context) error {
	if len(w.registeredFullNames) == 0 {
		return ErrNoRegisteredJobs
	}

	go w.Heartbeat(ctx)
	go w.Periodic(ctx, 24*time.Hour, w.handler.PruneActiveQueues)
	go w.Periodic(ctx, 30*time.Second, w.handler.PruneActiveWorkers)
	go w.Periodic(ctx, 1*time.Second, w.handler.PopScheduledJobs)

	w.log.Info("Starting worker", slog.String("id", w.ID))

	// Create a channel for jobs and a wait group for synchronization
	jobsChan := make(chan *wire.Job)
	var wg sync.WaitGroup

	// Start a fixed number of goroutines to process jobs
	numWorkers := w.cfg.GetConcurrency()
	wg.Add(numWorkers)
	for i := 0; i < numWorkers; i++ {
		go func() {
			defer wg.Done()
			for job := range jobsChan {
				if err := w.CallJob(ctx, job); err != nil {
					slog.Error("failed to call job", "error", err)
				}
			}
		}()
	}

	for {
		slog.Info("Waiting for next job")
		job, err := w.handler.Pop(ctx, w.registeredFullNames...)
		if err != nil {
			slog.Error("failed to pop job", "error", err)
			return err
		}

		if job == nil {
			select {
			case <-ctx.Done():
				slog.Info("Stopping worker(s)")
				close(jobsChan) // Close the channel to stop workers
				wg.Wait()       // Wait for all workers to finish processing
				slog.Info("Stopped worker(s)")
				return nil
			default:
			}
			continue
		}

		jobsChan <- job
	}
}

func (w *Worker) Periodic(ctx context.Context, duration time.Duration, fn func(ctx context.Context) error) error {
	// Create a new ticker
	ticker := time.NewTicker(duration)
	defer ticker.Stop()

	// Loop and select statement for ticker and context
	for {
		select {
		// Ticker case
		case <-ticker.C:
			err := fn(ctx)
			if err != nil {
				return err // handle the error how you'd like
			}

		// Context cancellation or deadline exceeded
		case <-ctx.Done():
			return ctx.Err()
		}
	}
}

func (w *Worker) Close() error {
	return w.handler.Close()
}
