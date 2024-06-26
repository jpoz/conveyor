package hub

import (
	"errors"
	"log/slog"
	"net/http"

	"github.com/jpoz/conveyor/hub/views"
)

func (s *Server) QueuesPageHandler(w http.ResponseWriter, r *http.Request) {
	queues, err := s.storage.ActiveQueues(r.Context())
	if err != nil {
		s.log.Error("failed to get queues", slog.String("error", err.Error()))
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	queueViews := make([]views.QueueView, len(queues)+1)
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

	count, err := s.storage.CountScheduledJobs(r.Context())
	if err != nil {
		s.log.Error("failed to count scheduled jobs", slog.String("error", err.Error()))
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	queueViews[len(queues)] = views.QueueView{
		Name:     "scheduled",
		JobCount: count,
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

	jobViews := make([]views.JobView, len(jobs))
	for i, job := range jobs {
		jobViews[i] = views.JobView{
			Job: job,
		}

		msg, err := s.UnmarshalJob(job)
		if err != nil {
			if errors.Is(err, ErrUnknownType) {
				continue
			}
			s.log.Error("failed to unmarshal job", slog.String("error", err.Error()))
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		jobViews[i].UnmarshaledPayload = msg
	}

	view := views.QueueView{
		Name:     queueName,
		JobCount: count,
		Jobs:     jobViews,
	}

	views.Queue(view).Render(r.Context(), w)
}

func (s *Server) ScheduledPageHandler(w http.ResponseWriter, r *http.Request) {
	count, err := s.storage.CountScheduledJobs(r.Context())
	if err != nil {
		s.log.Error("failed to count jobs", slog.String("error", err.Error()))
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	jobs, err := s.storage.ListScheduledJobs(r.Context(), 0, 50)
	if err != nil {
		s.log.Error("failed to list jobs", slog.String("error", err.Error()))
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	jobViews := make([]views.JobView, len(jobs))
	for i, job := range jobs {
		jobViews[i] = views.JobView{
			Job: job,
		}

		msg, err := s.UnmarshalJob(job)
		if err != nil {
			if errors.Is(err, ErrUnknownType) {
				continue
			}
			s.log.Error("failed to unmarshal job", slog.String("error", err.Error()))
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		jobViews[i].UnmarshaledPayload = msg
	}

	view := views.QueueView{
		Name:     "scheduled",
		JobCount: count,
		Jobs:     jobViews,
	}

	views.Queue(view).Render(r.Context(), w)
}
