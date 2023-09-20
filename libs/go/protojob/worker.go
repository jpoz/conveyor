package protojob

import (
	"context"
	"errors"
	"fmt"
	"reflect"

	"github.com/google/uuid"
	"github.com/jpoz/protojob/wire"
	"github.com/sirupsen/logrus"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
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
	ID     string
	Client *HubClient
	hub    wire.HubClient
	conn   *grpc.ClientConn

	fnMap               map[string]registeredJob
	registeredFullNames []string
}

func NewWorker(hubAddr string) *Worker {
	var opts []grpc.DialOption

	opts = append(opts, grpc.WithTransportCredentials(insecure.NewCredentials()))
	conn, err := grpc.Dial(hubAddr, opts...)
	if err != nil {
		panic(err)
	}

	return &Worker{
		ID: uuid.New().String(),
		Client: &HubClient{
			Hub:  wire.NewHubClient(conn),
			conn: conn,
		},
		hub:                 wire.NewHubClient(conn),
		conn:                conn,
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
	ctx = ClientContext(ctx, w.Client)

	return ctx
}

func (w *Worker) CallJob(ctx context.Context, job *wire.Job) error {
	err := w.callJob(job)
	if err != nil {
		_, ierr := w.hub.Fail(ctx, &wire.FailRequest{
			Uuid: job.Uuid,
		})
		if ierr != nil {
			return fmt.Errorf("failed to fail job %s: %w", job.Uuid, ierr)
		}
		return fmt.Errorf("job %s failed: %w", job.Uuid, err)
	}

	_, err = w.hub.Close(ctx, &wire.CloseRequest{Job: job})
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

func (w *Worker) Run(ctx context.Context) error {
	if len(w.registeredFullNames) == 0 {
		return ErrNoRegisteredJobs
	}

	for {
		resp, err := w.hub.Pop(ctx, &wire.PopRequest{
			Queues: w.registeredFullNames,
		})
		if err != nil {
			logrus.Error(err)
			return err
		}

		if resp.Job == nil {
			select {
			case <-ctx.Done():
				return nil
			default:
			}
			continue
		}

		err = w.CallJob(ctx, resp.Job)
		if err != nil {
			logrus.Error(err)
		}
	}
}

func (w *Worker) Close() error {
	return w.conn.Close()
}
