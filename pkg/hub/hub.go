package hub

import (
	context "context"
	"fmt"
	"io/ioutil"
	"log"
	"net"
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
	RedisURL string `yaml:"redisURL" json:"redisURL"`
}

type Server struct {
	log    *logrus.Logger // TODO make this a interface
	config Config
	rdb    *redis.Client

	protos.UnimplementedHubServer
}

func NewServer(opts ServerOpts) (*Server, error) {
	log := logrus.New()
	log.SetLevel(logrus.DebugLevel)
	log.Infof("hub loading config at %v", opts.ConfigPath)

	// Read YAML file
	data, err := ioutil.ReadFile(opts.ConfigPath)
	if err != nil {
		log.Fatalf("Error reading YAML file: %s\n", err)
	}

	var config Config

	err = yaml.Unmarshal([]byte(data), &config)
	if err != nil {
		log.Fatalf("Error unmarshaling YAML: %s\n", err)
	}

	log.Printf("hub config: %+v", config)

	redisOpts, err := redis.ParseURL(config.RedisURL)
	if err != nil {
		panic(err)
	}
	rdb := redis.NewClient(redisOpts)

	if err := rdb.Ping(context.Background()).Err(); err != nil {
		return nil, err
	}

	srv := &Server{
		log:    log,
		config: config,
		rdb:    rdb,
	}

	return srv, nil
}

func (s *Server) SubmitNewJob(ctx context.Context, newJob *protos.NewJobRequest) (*protos.NewJobResponse, error) {
	s.log.Println("SubmitNewJob")
	s.log.Println(newJob)

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

	return &protos.WorkRequest{Job: job}, nil
}

func (s *Server) Close(context.Context, *protos.WorkResponse) (*protos.CloseResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Close not implemented")
}

func (s *Server) Listen(port int) error {
	lis, err := net.Listen("tcp", fmt.Sprintf("localhost:%d", port))
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	s.log.Printf("server listening at %v", lis.Addr())

	var opts []grpc.ServerOption
	grpcServer := grpc.NewServer(opts...)
	protos.RegisterHubServer(grpcServer, s)

	return grpcServer.Serve(lis)
}
