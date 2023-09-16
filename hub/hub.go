package hub

import (
	context "context"
	"log"
	"net"
	"os"

	"github.com/google/uuid"
	"github.com/redis/go-redis/v9"
	"github.com/sirupsen/logrus"
	"google.golang.org/grpc"
	"gopkg.in/yaml.v3"

	"github.com/jpoz/protojob/wire"
)

type Config struct {
	Addr     string `yaml:"addr"`
	RedisURL string `yaml:"redisURL" json:"redisURL"`
}

type Server struct {
	log     *logrus.Logger // TODO make this a interface
	config  Config
	rdb     *redis.Client
	storage StorageHandler

	wire.UnimplementedHubServer
}

func ReadConfig(path string) (Config, error) {
	data, err := os.ReadFile(path)
	if err != nil {
		log.Fatalf("Error reading YAML file: %s\n", err)
	}

	var config Config
	err = yaml.Unmarshal([]byte(data), &config)
	if err != nil {
		log.Fatalf("Error unmarshaling YAML: %s\n", err)
	}

	return config, nil
}

func NewServer(args ServerArgs, cfg Config) (*Server, error) {
	log := logrus.New()
	log.SetLevel(logrus.InfoLevel)
	log.Printf("hub config: %+v", cfg)

	if args.Verbose {
		log.SetLevel(logrus.DebugLevel)
	}

	redisOpts, err := redis.ParseURL(cfg.RedisURL)
	if err != nil {
		panic(err)
	}
	rdb := redis.NewClient(redisOpts)

	if err := rdb.Ping(context.Background()).Err(); err != nil {
		return nil, err
	}

	redisStorageHandler := NewRedisStorageHandler(log, rdb)

	log.Printf("level: %+v", log.GetLevel())

	srv := &Server{
		log:     log,
		config:  cfg,
		rdb:     rdb,
		storage: redisStorageHandler,
	}

	return srv, nil
}

func (s *Server) Add(ctx context.Context, newJob *wire.AddRequest) (*wire.AddResponse, error) {
	jid := uuid.New()
	job := &wire.Job{
		Uuid:            jid.String(),
		Type:            newJob.Type,
		Queue:           newJob.Queue,
		Payload:         newJob.Payload,
		PredecessorUuid: newJob.PredecessorUuid,
		ParentUuid:      newJob.ParentUuid,
	}

	entry := s.log.WithFields(logrus.Fields{"job": job.Type, "uuid": job.Uuid, "queue": job.Queue})

	err := s.storage.AddJob(ctx, job)
	if err != nil {
		entry.Error(err)
		response := &wire.AddResponse{
			Success: false,
			Message: err.Error(),
		}
		return response, nil
	}

	entry.Info("Added")

	response := &wire.AddResponse{
		Success: true,
		Message: "Job submitted",
		Job:     job,
	}
	return response, nil
}

func (s *Server) Pop(ctx context.Context, req *wire.PopRequest) (*wire.WorkRequest, error) {
	out := &wire.WorkRequest{}
	job, err := s.storage.Pop(ctx, req.Queues...)
	if err != nil {
		return out, err
	}
	if job == nil {
		return out, nil
	}

	s.log.WithFields(logrus.Fields{"job": job.Type, "uuid": job.Uuid, "queue": job.Queue}).Info("Pop")
	out.Job = job
	return out, nil
}

func (s *Server) Close(ctx context.Context, req *wire.CloseRequest) (*wire.CloseResponse, error) {
	s.log.WithField("uuid", req.Job.Uuid).Info("Close")
	closed, err := s.storage.CloseJob(ctx, req.Job)
	return &wire.CloseResponse{Closed: closed}, err
}

func (s *Server) Fail(ctx context.Context, req *wire.FailRequest) (*wire.FailResponse, error) {
	s.log.WithField("uuid", req.Uuid).Warn("Fail")
	err := s.storage.FailJob(ctx, req.Uuid)
	return &wire.FailResponse{}, err
}

func (s *Server) Listen(ctx context.Context) error {
	lis, err := net.Listen("tcp", s.config.Addr)
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	s.log.Printf("server listening at %v", lis.Addr())

	var opts []grpc.ServerOption
	grpcServer := grpc.NewServer(opts...)
	wire.RegisterHubServer(grpcServer, s)

	errCh := make(chan error, 1)

	go func() {
		errCh <- grpcServer.Serve(lis)
	}()

	go func() {
		<-ctx.Done()
		grpcServer.GracefulStop()
	}()

	select {
	case err := <-errCh:
		return err
	case <-ctx.Done():
		return nil
	}
}
