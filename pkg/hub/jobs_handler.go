package hub

import (
	"errors"
	"io"
	"log/slog"
	"net/http"
	"net/url"

	"google.golang.org/protobuf/encoding/protojson"
	"google.golang.org/protobuf/types/known/anypb"

	"github.com/jpoz/conveyor/pkg/hub/views"
	"github.com/jpoz/conveyor/wire"
)

func (s *Server) JobsHandler(w http.ResponseWriter, r *http.Request) {
	views.Jobs().Render(r.Context(), w)
}

// DeleteJobsHandler handles deleting jobs, it's a DELETE request with a body, which is unconventional
// the normal r.ParseForm() would normally parse the form, but it does not work on delete requests
func (s *Server) DeleteJobsHandler(w http.ResponseWriter, r *http.Request) {
	body, err := io.ReadAll(r.Body)
	if err != nil {
		s.log.Error("Error reading request body", slog.String("error", err.Error()))
		http.Error(w, "Error reading request body", http.StatusBadRequest)
		return
	}
	defer r.Body.Close()

	formData, err := url.ParseQuery(string(body))
	if err != nil {
		s.log.Error("Error parsing form data", slog.String("error", err.Error()))
		http.Error(w, "Error parsing form data", http.StatusBadRequest)
		return
	}

	payload, ok := formData["job"]
	if !ok || len(payload) != 1 {
		s.log.Error("could not find job in form data")
		http.Error(w, "could not find job in form data", http.StatusBadRequest)
		return
	}

	// unmarshal request body into a struct
	job := &wire.Job{}
	err = protojson.Unmarshal([]byte(payload[0]), job)
	if err != nil {
		s.log.Error("could not unmarshal request body", slog.String("error", err.Error()))
		http.Error(w, "could not unmarshal request body", http.StatusBadRequest)
		return
	}

	s.log.Info("deleting job", slog.String("uuid", job.Uuid))

	err = s.storage.RemoveJob(r.Context(), job)
	if err != nil {
		s.log.Error("could not delete job", slog.String("error", err.Error()))
		http.Error(w, "could not delete job", http.StatusInternalServerError)
		return
	}

	// return success
	w.WriteHeader(http.StatusOK)
}

func (s *Server) JobPageHandler(w http.ResponseWriter, r *http.Request) {
	queueName := r.PathValue("queueName")
	if queueName == "" {
		http.Error(w, "missing queueName", http.StatusNotFound)
		return
	}

	jobUUID := r.PathValue("jobUuid")
	if jobUUID == "" {
		http.Error(w, "missing job uuid", http.StatusNotFound)
		return
	}

	job, err := s.storage.GetActiveJob(r.Context(), jobUUID)
	if err != nil {
		s.log.Error("failed to get job", slog.String("error", err.Error()))
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	if job == nil {
		jobs, err := s.storage.ListQueueJobs(r.Context(), queueName, 0, 50)
		if err != nil {
			s.log.Error("failed to list jobs", slog.String("error", err.Error()))
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		for _, j := range jobs {
			if j.Uuid == jobUUID {
				job = j
				break
			}
		}
	}

	if job == nil {
		http.Error(w, "job not found", http.StatusNotFound)
		return
	}

	jobView := views.JobView{
		Job: job,
	}

	msg, err := s.UnmarshalJob(job)
	if err != nil {
		if errors.Is(err, ErrUnknownType) {
			msg = &anypb.Any{}
		} else {
			s.log.Error("failed to unmarshal job", slog.String("error", err.Error()))
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
	}

	jobView.UnmarshaledPayload = msg

	views.Job(jobView).Render(r.Context(), w)
}
