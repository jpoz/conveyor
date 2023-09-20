package ui

import (
	"bytes"
	"embed"
	"fmt"
	"io/fs"
	"mime"
	"net/http"
	"path/filepath"
	"strings"

	"github.com/sirupsen/logrus"
)

//go:embed dist/*
var Files embed.FS

type ServerConfig struct {
	Addr string
	Log  *logrus.Logger
}

type Server struct {
	Config ServerConfig
}

func NewServer(cfg ServerConfig) *Server {
	return &Server{
		Config: cfg,
	}
}

func (s *Server) ListenAndServe() error {
	log := s.Config.Log.WithFields(logrus.Fields{
		"pkg": "ui",
	})

	// Create a new file system sub-directory for serving files
	subFS, err := fs.Sub(Files, "dist")
	if err != nil {
		return fmt.Errorf("failed to create file system sub-directory: %w", err)
	}
	// Print all files in subFS and their paths
	err = fs.WalkDir(subFS, ".", func(path string, d fs.DirEntry, err error) error {
		if err != nil {
			return err
		}
		if !d.IsDir() {
			log.Debug("File:", path)
		}
		return nil
	})
	if err != nil {
		return err
	}

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		path := strings.TrimPrefix(r.URL.Path, "/")
		log.Infof("%s %s", r.Method, r.URL.Path)

		s.ServePath(path, subFS, w, r)
	})

	// Start the server
	s.Config.Log.Infof("UI listening on %s", s.Config.Addr)
	return http.ListenAndServe(s.Config.Addr, nil)
}

func (s *Server) ServePath(path string, subFS fs.FS, w http.ResponseWriter, r *http.Request) {
	log := s.Config.Log.WithFields(logrus.Fields{
		"pkg": "ui",
	})
	// if !strings.HasPrefix(path, "assets/") {
	// 	path = "index.html"
	// }

	log.Debugf("\t serving %s", path)
	data, err := fs.ReadFile(subFS, path)
	if err != nil {
		if path == "index.html" {
			log.Error(fmt.Sprintf("Error reading file: %s", err))
			http.Error(w, err.Error(), http.StatusNotFound)
			return
		}

		s.ServePath("index.html", subFS, w, r)
		return
	}

	file, err := subFS.Open(path)
	if err != nil {
		log.Error(fmt.Sprintf("Error opening file: %s", err))
		http.Error(w, err.Error(), http.StatusNotFound)
		return
	}
	defer func() {
		err := file.Close()
		if err != nil {
			log.Error(fmt.Sprintf("Error closing file: %s", err))
		}
	}()

	// Determine the MIME type of the file based on its extension
	ext := filepath.Ext(path)
	mimeType := mime.TypeByExtension(ext)
	if mimeType != "" {
		w.Header().Set("Content-Type", mimeType)
	}

	f, err := file.Stat()
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	http.ServeContent(w, r, path, f.ModTime(), bytes.NewReader(data))
}
