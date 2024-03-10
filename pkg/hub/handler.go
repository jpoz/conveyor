package hub

import (
	"net/http"

	"github.com/jpoz/conveyor/pkg/hub/views"
)

func (s *Server) HomeHandler(w http.ResponseWriter, r *http.Request) {
	views.Dashboard().Render(r.Context(), w)
}

func (s *Server) JobsHandler(w http.ResponseWriter, r *http.Request) {
	views.Jobs().Render(r.Context(), w)
}

func (s *Server) EventHandler(w http.ResponseWriter, r *http.Request) {
	conn, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Println(err)
		return
	}

	s.storage.Subscribe(conn)
}
