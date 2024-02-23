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

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/go-chi/cors"
	"github.com/jpoz/conveyor/api"
	"github.com/jpoz/conveyor/libs/go/conveyor/storage"
	"github.com/sirupsen/logrus"
)

//go:embed dist/*
var Files embed.FS

type ServerConfig struct {
	Addr    string
	Log     *logrus.Logger
	Storage storage.Stats
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
	log := s.Config.Log.WithFields(logrus.Fields{"pkg": "ui"})

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

	r := chi.NewRouter()

	r.Use(middleware.RequestID)
	r.Use(middleware.RealIP)
	r.Use(middleware.Logger)
	r.Use(middleware.Recoverer)

	// CORS
	r.Use(cors.Handler(cors.Options{
		// AllowedOrigins:   []string{"https://foo.com"}, // Use this to allow specific origin hosts
		AllowedOrigins: []string{"https://*", "http://*"},
		// AllowOriginFunc:  func(r *http.Request, origin string) bool { return true },
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"Accept", "Authorization", "Content-Type", "X-CSRF-Token", "Cookie"},
		ExposedHeaders:   []string{"Link", "SetCookie"},
		AllowCredentials: true,
		MaxAge:           300, // Maximum value not ignored by any of major browsers
	}))

	r.Mount("/api", api.NewAPI(s.Config.Storage).Handler())

	// Catch-all route
	r.NotFound(func(w http.ResponseWriter, r *http.Request) {
		path := strings.TrimPrefix(r.URL.Path, "/")
		log.Infof("%s %s", r.Method, r.URL.Path)

		s.ServePath(path, subFS, w, r)
	})

	s.Config.Log.Infof("UI listening on %s", s.Config.Addr)
	return http.ListenAndServe(s.Config.Addr, r)
}

func (s *Server) ServePath(path string, subFS fs.FS, w http.ResponseWriter, r *http.Request) {
	log := s.Config.Log.WithFields(logrus.Fields{
		"pkg": "ui",
	})

	log.Debugf("\t serving %s", path)
	data, err := fs.ReadFile(subFS, path)
	if err != nil {
		// TODO handle this better
		// right now if a file doesn't exist, we return the index
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
