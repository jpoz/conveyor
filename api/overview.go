package api

import (
	"net/http"

	"github.com/go-chi/render"
)

type OverviewResponse struct {
	ActiveJobCount       int64 `json:"activeJobCount"`
	ActiveQueueCount     int64 `json:"activeQueueCount"`
	ConnectedWorkerCount int64 `json:"connectedWorkerCount"`
}

func (a *API) OverviewHandler(w http.ResponseWriter, r *http.Request) {
	activeJobCount, err := a.stats.ActiveJobCount(r.Context())
	if err != nil {
		render.Status(r, http.StatusInternalServerError)
		render.JSON(w, r, err)
		return
	}

	activeQueueCount, err := a.stats.ActiveQueueCount(r.Context())
	if err != nil {
		render.Status(r, http.StatusInternalServerError)
		render.JSON(w, r, err)
		return
	}

	activeWorkerCount, err := a.stats.ActiveWorkerCount(r.Context())
	if err != nil {
		render.Status(r, http.StatusInternalServerError)
		render.JSON(w, r, err)
		return
	}

	render.JSON(w, r, OverviewResponse{
		ActiveJobCount:       activeJobCount,
		ActiveQueueCount:     activeQueueCount,
		ConnectedWorkerCount: activeWorkerCount,
	})
}
