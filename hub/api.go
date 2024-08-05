package hub

import (
	"encoding/json"
	"log/slog"
	"net/http"
	"time"

	"github.com/jpoz/conveyor/storage"
)

var ResultColors = []string{"#4caf50", "#2196f3", "#f44336"}

type ChartData struct {
	Labels   []string  `json:"labels"`
	Datasets []Dataset `json:"datasets"`
}

type Dataset struct {
	Label           string  `json:"label"`
	Data            []int64 `json:"data"`
	BackgroundColor string  `json:"backgroundColor"`
	Stack           string  `json:"stack"`
}

func (s *Server) JobsApi(w http.ResponseWriter, r *http.Request) {
	ctx := r.Context()

	results := []storage.Result{
		storage.ResultSuccess,
		storage.ResultError,
		storage.ResultFailure,
	}

	out := ChartData{
		Labels:   make([]string, 60),
		Datasets: make([]Dataset, len(results)),
	}

	var err error
	for c, r := range results {
		data := make([]int64, 60)
		for i := 0; i < 60; i++ {
			t := time.Now().Add(-time.Duration(i) * time.Minute)
			if c == 0 {
				out.Labels[i] = t.Format("15:04")
			}
			data[i], err = s.storage.HistoricalJobCount(ctx, t, r)
			if err != nil {
				s.log.Error("failed to get historical job count", slog.String("error", err.Error()))
			}
		}

		out.Datasets[c] = Dataset{
			Label:           r.String(),
			Data:            data,
			BackgroundColor: ResultColors[c],
			Stack:           "Stack 0",
		}
	}

	outJSON, err := json.Marshal(out)
	if err != nil {
		s.log.Error("failed to marshal chart data", slog.String("error", err.Error()))
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Write(outJSON)
}

func (s *Server) WorkersApi(w http.ResponseWriter, r *http.Request) {
	ctx := r.Context()

	out := ChartData{
		Labels:   make([]string, 60),
		Datasets: make([]Dataset, 1),
	}

	var err error
	data := make([]int64, 60)
	for i := 0; i < 60; i++ {
		t := time.Now().Add(-time.Duration(i) * time.Minute)
		out.Labels[i] = t.Format("15:04")
		data[i], err = s.storage.HistoricalWorkerCount(ctx, t)
		if err != nil {
			s.log.Error("failed to get historical job count", slog.String("error", err.Error()))
		}
	}

	out.Datasets[0] = Dataset{
		Label:           "Active Workers",
		Data:            data,
		BackgroundColor: "#4caf50",
		Stack:           "Stack 0",
	}

	outJSON, err := json.Marshal(out)
	if err != nil {
		s.log.Error("failed to marshal chart data", slog.String("error", err.Error()))
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Write(outJSON)
}
