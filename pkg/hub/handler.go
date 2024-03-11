package hub

import (
	"fmt"
	"log/slog"
	"net/http"

	"github.com/gorilla/websocket"
	"github.com/jpoz/conveyor/pkg/hub/views"
	"github.com/jpoz/conveyor/wire"
)

var upgrader = websocket.Upgrader{}

func (s *Server) HomeHandler(w http.ResponseWriter, r *http.Request) {
	views.Dashboard().Render(r.Context(), w)
}

func (s *Server) JobsHandler(w http.ResponseWriter, r *http.Request) {
	views.Jobs().Render(r.Context(), w)
}

func (s *Server) QueuesPageHandler(w http.ResponseWriter, r *http.Request) {
	queues, err := s.storage.ActiveQueues(r.Context())
	if err != nil {
		s.log.Error("failed to get queues", slog.String("error", err.Error()))
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	queueViews := make([]views.QueueView, len(queues))
	for i, queue := range queues {
		count, err := s.storage.CountQueueJobs(r.Context(), queue)
		if err != nil {
			s.log.Error("failed to count jobs", slog.String("error", err.Error()))
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		queueViews[i] = views.QueueView{
			Name:     queue,
			JobCount: count,
		}
	}

	views.Queues(queueViews).Render(r.Context(), w)
}

func (s *Server) QueuePageHandler(w http.ResponseWriter, r *http.Request) {
	queueName := r.PathValue("queueName")

	count, err := s.storage.CountQueueJobs(r.Context(), queueName)
	if err != nil {
		s.log.Error("failed to count jobs", slog.String("error", err.Error()))
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	jobs, err := s.storage.ListQueueJobs(r.Context(), queueName, 0, 50)
	if err != nil {
		s.log.Error("failed to list jobs", slog.String("error", err.Error()))
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	fmt.Println(jobs)

	view := views.QueueView{
		Name:     queueName,
		JobCount: count,
		Jobs:     jobs,
	}

	views.Queue(view).Render(r.Context(), w)
}

func (s *Server) EventHandler(w http.ResponseWriter, r *http.Request) {
	conn, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		s.log.Error("failed to upgrade websocket", slog.String("error", err.Error()))
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	err = s.storage.Subscribe(r.Context(), func(job *wire.Job) {
		s.log.Info("received job", slog.String("id", job.Uuid), slog.String("status", job.Status.String()))
		conn.WriteJSON(job)
	})

	if err != nil {
		s.log.Error("failed to subscribe to events", slog.String("error", err.Error()))
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	s.log.Info("subscribed to events")
}
