package api

import (
	"net/http"
	"time"

	"github.com/go-chi/render"
	"github.com/jpoz/conveyor/libs/go/conveyor/storage"
)

type JobStat struct {
	Name    string `json:"name"`
	Success int64  `json:"success"`
	Error   int64  `json:"error"`
	Failure int64  `json:"failure"`
}

type JobsTimelineResponse struct {
	Timeline []JobStat `json:"timeline"`
}

func (a *API) JobsTimelineHandler(w http.ResponseWriter, r *http.Request) {
	var stats []JobStat
	ctx := r.Context()

	currentTime := time.Now()
	for i := 0; i < 60; i++ {
		minuteTime := currentTime.Add(time.Duration(-i) * time.Minute)
		name := minuteTime.Format("15:04")

		success, err := a.stats.GetJobCount(ctx, minuteTime, storage.ResultSuccess)
		if err != nil {
			a.log.Errorf("failed to get job count for %s: %v", name, err)
		}

		errors, err := a.stats.GetJobCount(ctx, minuteTime, storage.ResultError)
		if err != nil {
			a.log.Errorf("failed to get job count for %s: %v", name, err)
		}

		failure, err := a.stats.GetJobCount(ctx, minuteTime, storage.ResultFailure)
		if err != nil {
			a.log.Errorf("failed to get job count for %s: %v", name, err)
		}

		stats = append([]JobStat{{Name: name, Success: success, Error: errors, Failure: failure}}, stats...)
	}

	render.JSON(w, r, JobsTimelineResponse{Timeline: stats})
}
