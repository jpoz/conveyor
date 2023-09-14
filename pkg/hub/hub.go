package hub

import (
	context "context"
	"log"
	"net"
	"os"
	"time"

	"github.com/google/uuid"
	"github.com/redis/go-redis/v9"
	"github.com/sirupsen/logrus"
	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"google.golang.org/protobuf/proto"
	"gopkg.in/yaml.v3"

	"github.com/jpoz/protojob/protos"
)

type Config struct {
	Addr     string `yaml:"addr"`
	RedisURL string `yaml:"redisURL" json:"redisURL"`
}

type Server struct {
	log    *logrus.Logger // TODO make this a interface
	config Config
	rdb    *redis.Client

	protos.UnimplementedHubServer
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

func NewServer(cfg Config) (*Server, error) {
	log := logrus.New()
	log.SetLevel(logrus.DebugLevel)

	log.Printf("hub config: %+v", cfg)

	redisOpts, err := redis.ParseURL(cfg.RedisURL)
	if err != nil {
		panic(err)
	}
	rdb := redis.NewClient(redisOpts)

	if err := rdb.Ping(context.Background()).Err(); err != nil {
		return nil, err
	}

	srv := &Server{
		log:    log,
		config: cfg,
		rdb:    rdb,
	}

	return srv, nil
}

func (s *Server) SubmitNewJob(ctx context.Context, newJob *protos.NewJobRequest) (*protos.NewJobResponse, error) {
	s.log.WithFields(logrus.Fields{"job": newJob.FullName}).Info("Received job")

	jid := uuid.New()
	job := &protos.Job{
		Uuid:     jid.String(),
		FullName: newJob.FullName,
		Payload:  newJob.Payload,
	}

	jobBytes, err := proto.Marshal(job)
	if err != nil {
		return nil, err
	}

	err = s.rdb.LPush(ctx, "jobs", jobBytes).Err()
	if err != nil {
		return nil, err
	}

	response := &protos.NewJobResponse{
		Success: true,
		Message: "Job submitted",
		Job:     job,
	}
	return response, nil
}

func (s *Server) Pop(ctx context.Context, req *protos.PopRequest) (*protos.WorkRequest, error) {
	payload, err := s.rdb.BRPop(ctx, 2*time.Second, "jobs").Result()
	if err == redis.Nil {
		return &protos.WorkRequest{}, nil
	}

	jobStr := payload[1]

	if err != nil {
		return nil, err
	}

	job := &protos.Job{}
	err = proto.Unmarshal([]byte(jobStr), job)
	if err != nil {
		return nil, err
	}

	s.log.WithFields(logrus.Fields{"job": job.FullName, "uuid": job.Uuid}).Info("Sending out job")

	return &protos.WorkRequest{Job: job}, nil
}

func (s *Server) Close(context.Context, *protos.WorkResponse) (*protos.CloseResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Close not implemented")
}

func (s *Server) Listen(ctx context.Context) error {
	lis, err := net.Listen("tcp", s.config.Addr)
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	s.log.Printf("server listening at %v", lis.Addr())

	var opts []grpc.ServerOption
	grpcServer := grpc.NewServer(opts...)
	protos.RegisterHubServer(grpcServer, s)

	// Create a channel to receive any error from grpcServer.Serve()
	errCh := make(chan error, 1)

	// Run grpcServer.Serve in a separate goroutine
	go func() {
		errCh <- grpcServer.Serve(lis)
	}()

	// Listen for ctx.Done() in another goroutine
	go func() {
		<-ctx.Done()
		grpcServer.GracefulStop()
	}()

	// Wait for either grpcServer.Serve to finish or ctx.Done() to be closed
	select {
	case err := <-errCh:
		return err
	case <-ctx.Done():
		return nil
	}
}
