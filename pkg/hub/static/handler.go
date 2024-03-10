package static

import (
	"embed"
	"net/http"
	"strings"

	"github.com/charmbracelet/log"
)

// TODO FIX THIS
//
//go:embed *.css *.svg *.js shoelace/*
var content embed.FS

func Handler(root string) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		// remove root from rawurl
		filePath := strings.TrimPrefix(r.URL.Path, root)

		log.Info("Serving static file", "filename", filePath)
		// Serve file from embedded file system
		file, err := content.ReadFile(filePath)
		if err != nil {
			http.NotFound(w, r)
			return
		}

		// Set the correct content type (you might want to handle more types)
		switch {
		case strings.HasSuffix(filePath, ".css"):
			w.Header().Set("Content-Type", "text/css")
		case strings.HasSuffix(filePath, ".svg"):
			w.Header().Set("Content-Type", "image/svg+xml")
		}

		w.Write(file)
	}
}
