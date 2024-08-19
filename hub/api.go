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
	Series []Series `json:"series"`
	Colors []string `json:"colors,omitempty"`
	XAxis  XAxis    `json:"xaxis,omitempty"`
	YAxis  YAxis    `json:"yaxis,omitempty"`
}

type Series struct {
	Name string  `json:"name"`
	Data []int64 `json:"data"`
}

type XAxis struct {
	Categories []string `json:"categories"`
}

type YAxis struct {
	Title struct {
		Text string `json:"text"`
	} `json:"title"`
}

func (s *Server) JobsApi(w http.ResponseWriter, r *http.Request) {
	ctx := r.Context()

	results := []storage.Result{
		storage.ResultSuccess,
		storage.ResultError,
		storage.ResultFailure,
	}

	out := ChartData{
		Series: []Series{
			{
				Name: "Success",
				Data: make([]int64, 60),
			},
			{
				Name: "Error",
				Data: make([]int64, 60),
			},
			{
				Name: "Failure",
				Data: make([]int64, 60),
			},
		},
		Colors: ResultColors,
		XAxis: XAxis{
			Categories: make([]string, 60),
		},
		YAxis: YAxis{
			Title: struct {
				Text string `json:"text"`
			}{
				Text: "Jobs",
			},
		},
	}

	var err error
	for c, r := range results {
		data := make([]int64, 60)
		for i := 0; i < 60; i++ {
			t := time.Now().Add(-time.Duration(i) * time.Minute)
			if c == 0 {
				out.XAxis.Categories[i] = t.Format(time.RFC3339)
			}
			data[i], err = s.storage.HistoricalJobCount(ctx, t, r)
			if err != nil {
				s.log.Error("failed to get historical job count", slog.String("error", err.Error()))
			}
		}

		out.Series[c].Data = data
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
		Series: []Series{
			{
				Name: "Workers",
				Data: make([]int64, 60),
			},
		},
		XAxis: XAxis{
			Categories: make([]string, 60),
		},
		YAxis: YAxis{
			Title: struct {
				Text string `json:"text"`
			}{
				Text: "Workers",
			},
		},
	}

	var err error
	data := make([]int64, 60)
	for i := 0; i < 60; i++ {
		t := time.Now().Add(-time.Duration(i) * time.Minute)
		out.XAxis.Categories[i] = t.Format(time.RFC3339)
		data[i], err = s.storage.HistoricalWorkerCount(ctx, t)
		if err != nil {
			s.log.Error("failed to get historical job count", slog.String("error", err.Error()))
		}
	}

	out.Series[0].Data = data

	outJSON, err := json.Marshal(out)
	if err != nil {
		s.log.Error("failed to marshal chart data", slog.String("error", err.Error()))
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Write(outJSON)
}
