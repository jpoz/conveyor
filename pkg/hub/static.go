package hub

import (
	"embed"
	"fmt"
	"io/fs"
	"mime"
	"net/http"
	"path/filepath"
	"strings"
)

//go:embed static/*
var staticContent embed.FS

func (s *Server) StaticHandler(root string) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		trimmedPath := strings.TrimPrefix(r.URL.Path, root)
		// Ensure the path is sanitized to avoid directory traversal issues.
		path := filepath.Join("static", filepath.Clean("/"+trimmedPath))
		fmt.Println(path)

		// Avoid serving directory paths.
		if strings.HasSuffix(r.URL.Path, "/") {
			http.Error(w, "Not Found", http.StatusNotFound)
			return
		}

		// Read the file content from the embedded file system.
		data, err := fs.ReadFile(staticContent, path)
		if err != nil {
			http.Error(w, err.Error(), http.StatusNotFound)
			return
		}

		// Determine the content type of the file.
		contentType := mime.TypeByExtension(filepath.Ext(path))
		if contentType == "" {
			contentType = "application/octet-stream"
		}

		// Set the Content-Type header.
		w.Header().Set("Content-Type", contentType)

		// Write the content to the response writer.
		// Note: This is not using http.ServeContent as it requires io.ReadSeeker.
		// If caching or range requests are not a concern, this method is simpler.
		w.Write(data)
	}
}
