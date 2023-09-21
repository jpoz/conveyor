package api

import (
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/jpoz/protojob/storage"
)

type API struct {
	stats storage.Stats
}

func NewAPI(stats storage.Stats) *API {
	return &API{
		stats: stats,
	}
}

func (a *API) Handler() http.Handler {
	r := chi.NewRouter()

	r.Get("/overview.json", a.OverviewHandler)

	return r
}
