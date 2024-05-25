package hub

import (
	"log/slog"
	"net/http"

	"github.com/gorilla/websocket"
	"github.com/jpoz/conveyor/hub/views"
	"github.com/jpoz/conveyor/wire"
)

var upgrader = websocket.Upgrader{}

func (s *Server) HomeHandler(w http.ResponseWriter, r *http.Request) {
	views.Dashboard().Render(r.Context(), w)
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
