package conveyor

import (
	"context"
	"errors"
	"fmt"
	"reflect"
	"time"

	"github.com/google/uuid"
	"github.com/jpoz/conveyor/libs/go/conveyor/storage"
	"github.com/jpoz/conveyor/wire"
	"github.com/redis/go-redis/v9"
	"github.com/sirupsen/logrus"
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

	handler storage.Handler
	log     *logrus.Entry
	client  *Client

	fnMap               map[string]registeredJob
	registeredFullNames []string
}

func NewWorker(redisAddr string) *Worker {
	rds := redis.NewClient(&redis.Options{
		Addr: redisAddr,
	})

	handler := storage.NewRedisHandler(logrus.New(), rds)
	client := NewClient(redisAddr)

	return &Worker{
		ID:                  uuid.New().String(),
		handler:             handler,
		client:              client,
		fnMap:               make(map[string]registeredJob),
		registeredFullNames: make([]string, 0),
	}
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

	fmt.Println("Registered job:", name)

	return nil
}

func (w *Worker) ContextFor(job *wire.Job) context.Context {
	ctx := context.Background()

	ctx = JobContext(ctx, job)
	ctx = AddClientToContext(ctx, w.client)

	return ctx
}

func (w *Worker) CallJob(ctx context.Context, job *wire.Job) error {
	err := w.callJob(job)
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

func (w *Worker) callJob(job *wire.Job) error {
	registered, ok := w.fnMap[string(job.Type)]
	if !ok {
		return fmt.Errorf("[%s] %w, %s", w.ID, ErrJobNotRegistered, job.Type)
	}
	msgType := registered.T
	fn := registered.fn

	instance := reflect.New(msgType.Elem()).Interface()

	msg, ok := instance.(proto.Message)
	if !ok {
		return errors.New("invalid message type")
	}

	err := proto.Unmarshal(job.Payload, msg)
	if err != nil {
		return fmt.Errorf("failed to unmarshal payload: %v", err)
	}

	val := reflect.ValueOf(fn)
	argVal := reflect.ValueOf(msg)

	ctx := w.ContextFor(job)

	results := val.Call([]reflect.Value{
		reflect.ValueOf(ctx),
		argVal,
	})

	err, _ = results[0].Interface().(error)
	if err != nil {
		return fmt.Errorf("failed to call function: %v", err)
	}
	return nil

}

func (w *Worker) Heartbeat(ctx context.Context) error {
	for {
		err := w.handler.Ping(ctx)
		if err != nil {
			logrus.Error(err)
		}

		tick := time.NewTicker(15 * time.Second)
		select {
		case <-tick.C:
		case <-ctx.Done():
			logrus.Info("Stopping heartbeat")
			return nil
		}
	}
}

func (w *Worker) Run(ctx context.Context) error {
	if len(w.registeredFullNames) == 0 {
		return ErrNoRegisteredJobs
	}

	go w.Heartbeat(ctx)

	for {
		job, err := w.handler.Pop(ctx, w.registeredFullNames...)
		if err != nil {
			logrus.Error(err)
			return err
		}

		if job == nil {
			select {
			case <-ctx.Done():
				return nil
			default:
			}
			continue
		}

		err = w.CallJob(ctx, job)
		if err != nil {
			logrus.Error(err)
		}
	}
}

func (w *Worker) Close() error {
	return w.handler.Close()
}
