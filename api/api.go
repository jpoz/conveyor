package api

import (
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/jpoz/conveyor/libs/go/conveyor/storage"
	"github.com/sirupsen/logrus"
)

type API struct {
	stats storage.Stats
	log   *logrus.Entry
}

func NewAPI(stats storage.Stats) *API {
	log := logrus.New().WithField("pkg", "api")
	return &API{
		stats: stats,
		log:   log,
	}
}

func (a *API) Handler() http.Handler {
	r := chi.NewRouter()

	r.Get("/overview.json", a.OverviewHandler)
	r.Get("/jobs/timeline.json", a.JobsTimelineHandler)

	return r
}
