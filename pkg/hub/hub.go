package hub

import (
	"context"
	"errors"
	"fmt"
	"log/slog"
	"net/http"
	"reflect"
	"runtime/debug"
	"time"

	"github.com/jpoz/conveyor/pkg/config"
	"github.com/jpoz/conveyor/pkg/storage"
	"github.com/jpoz/conveyor/wire"
	"github.com/jpoz/goes"
	"google.golang.org/protobuf/proto"
)

const (
	DefaultMaxRetries = 5
)

var ifaceMessageType = reflect.TypeOf((*proto.Message)(nil)).Elem()
var ErrUnknownType = errors.New("unknown type")

type Server struct {
	log     *slog.Logger
	config  config.HubConfig
	storage storage.Handler
	typeMap map[string]reflect.Type
}

func NewServer(cfg config.HubConfig) (*Server, error) {
	baseLog := cfg.GetLogger()
	l := baseLog.With(slog.String("server", "hub"))
	cfg.SetLogger(l)

	handler, err := storage.NewRedisHandler(cfg)
	if err != nil {
		return nil, fmt.Errorf("failed to create redis handler: %w", err)
	}

	return &Server{
		log:     l,
		config:  cfg,
		storage: handler,
		typeMap: make(map[string]reflect.Type),
	}, nil
}

func (s *Server) RegisterPayloadTypes(fn ...any) error {
	for _, f := range fn {
		err := s.RegisterPayloadType(f)
		if err != nil {
			return err
		}
	}
	return nil
}

func (s *Server) RegisterPayloadType(fn any) error {
	messageType := reflect.TypeOf(fn)
	if !messageType.Implements(ifaceMessageType) {
		return errors.New("types must implement proto.Message, ensure you're passing a pointer to a proto.Message type")
	}

	instance := reflect.New(messageType).Elem().Interface()
	name := proto.MessageName(instance.(proto.Message))

	s.typeMap[string(name)] = messageType

	return nil
}

func (s *Server) UnmarshalJob(job *wire.Job) (proto.Message, error) {
	msgType, ok := s.typeMap[job.Type]
	if !ok {
		return nil, fmt.Errorf("%w: %s", ErrUnknownType, job.Type)
	}

	instance := reflect.New(msgType.Elem()).Interface()

	msg, ok := instance.(proto.Message)
	if !ok {
		return nil, errors.New("invalid message type")
	}

	err := proto.Unmarshal(job.Payload, msg)
	if err != nil {
		return nil, fmt.Errorf("failed to unmarshal payload: %v", err)
	}

	return msg, nil
}

type wrapperWriter struct {
	http.ResponseWriter
	status int
}

func (w *wrapperWriter) WriteHeader(status int) {
	w.status = status
	w.ResponseWriter.WriteHeader(status)
}

func (s *Server) MuxLogger(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		start := time.Now()
		ww := &wrapperWriter{ResponseWriter: w, status: http.StatusOK}

		next.ServeHTTP(ww, r)

		s.log.Info(r.URL.Path,
			slog.String("method", r.Method),
			slog.Int("status", ww.status),
			slog.Duration("duration", time.Since(start)),
		)
	})
}

func (s *Server) MuxRecover(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		defer func() {
			if err := recover(); err != nil {
				stack := debug.Stack()
				s.log.Error("panic", slog.String("error", fmt.Sprintf("%v", err)), slog.String("stack", string(stack)))
				http.Error(w, "Internal Server Error", http.StatusInternalServerError)
			}
		}()
		next.ServeHTTP(w, r)
	})
}

func (s *Server) Mux() http.Handler {
	mux := http.NewServeMux()

	mux.HandleFunc("GET /", s.HomeHandler)
	mux.HandleFunc("GET /api/counts", s.JobsApi)
	mux.HandleFunc("GET /events", s.EventHandler)
	mux.HandleFunc("GET /jobs", s.JobsHandler)
	mux.HandleFunc("GET /queues", s.QueuesPageHandler)
	mux.HandleFunc("GET /queues/{queueName}", s.QueuePageHandler)
	mux.HandleFunc("GET /queues/scheduled", s.ScheduledPageHandler)
	mux.HandleFunc("GET /queues/{queueName}/jobs/{jobUuid}", s.JobPageHandler)
	mux.HandleFunc("GET /queues/scheduled/jobs/{jobUuid}", s.ScheduledJobPageHandler)
	mux.HandleFunc("DELETE /jobs", s.DeleteJobsHandler)
	mux.HandleFunc("DELETE /scheduled/jobs", s.DeleteScheduledJobsHandler)

	mux.HandleFunc("GET /static/*", s.StaticHandler("/static"))
	mux.HandleFunc("GET /js/*", JSHandler("/js", goes.Options{
		Logger: s.log,
		Mode:   goes.ModeBuild,
	}))

	return s.MuxLogger(s.MuxRecover(mux))
}

func (s *Server) Run(ctx context.Context) error {
	s.log.Info("starting conveyor hub server", slog.String("addr", s.config.GetAddr()))
	return http.ListenAndServe(s.config.GetAddr(), s.Mux())
}
