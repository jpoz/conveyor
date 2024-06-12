package hub

import (
	"embed"
	"fmt"
	"io"
	"io/fs"
	"log/slog"
	"mime"
	"net/http"
	"net/url"
	"os"
	"path"
	"path/filepath"
	"strings"

	"github.com/evanw/esbuild/pkg/api"
)

//go:embed dist/*
var dist embed.FS

func BuildAssets() error {
	buildOptions, err := buildOptions()
	if err != nil {
		slog.Error("[build] Failed to create build options", "error", err)
		return err
	}

	err = build(buildOptions)
	if err != nil {
		slog.Error("[build] Failed to build package", "error", err)
		return err
	}

	return nil
}

func SrcHandler(root string) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		urlPath := r.URL.Path
		requestPath := strings.TrimPrefix(urlPath, root)
		filePath := filepath.Join("src/dist", requestPath)

		slog.Info("Serving embedded file", "path", r.URL.Path, "filename", filePath)

		file, err := dist.Open(filePath)
		if err != nil {
			slog.Error("Failed to open embedded file", "path", filePath, "error", err)
			http.NotFound(w, r)
			return
		}
		defer file.Close()

		contentType := mime.TypeByExtension(filepath.Ext(requestPath))
		if contentType == "" {
			contentType = "application/octet-stream"
		}

		w.Header().Set("Content-Type", contentType)

		_, copyErr := io.Copy(w, file)
		if copyErr != nil {
			slog.Error("Failed to serve embedded file", "path", filePath, "error", copyErr)
		} else {
			slog.Info("Served embedded file", "path", filePath)
		}

		return
	}
}

func buildOptions() (api.BuildOptions, error) {
	buildOptions := api.BuildOptions{
		Outdir: "hub/dist",
		EntryPoints: []string{
			"hub/src/main.ts",
		},
		Platform:     api.PlatformBrowser,
		Bundle:       true,
		MinifySyntax: true,
		Sourcemap:    api.SourceMapLinked,
		Loader: map[string]api.Loader{
			".tsx":   api.LoaderTSX,
			".ts":    api.LoaderTS,
			".ttf":   api.LoaderText,
			".woff2": api.LoaderText,
			".svg":   api.LoaderText,
		},
		Define: map[string]string{
			"process.env.API_HOST": `"` + os.Getenv("API_HOST") + `"`,
		},
		Write: true,
	}

	return buildOptions, nil
}

func build(buildOptions api.BuildOptions) error {
	slog.Info("[build] Building package", "outdir", buildOptions.Outdir, "entrypoints", buildOptions.EntryPoints)
	result := api.Build(buildOptions)
	if len(result.Errors) != 0 {
		return fmt.Errorf("failed to build package: %v", result.Errors)
	}
	return nil
}

func buildAndServerFromESBuild(
	buildOptions api.BuildOptions,
	requestPath string,
	w http.ResponseWriter,
	_ *http.Request,
) error {
	result := api.Build(buildOptions)
	if len(result.Errors) != 0 {
		return fmt.Errorf("failed to build package: %v", result.Errors)
	}

	// Determine the content type of the file.
	contentType := mime.TypeByExtension(filepath.Ext(requestPath))
	if contentType == "" {
		contentType = "application/octet-stream"
	}

	// Set the Content-Type header.
	w.Header().Set("Content-Type", contentType)

	existingFiles := []string{}
	for _, outputFile := range result.OutputFiles {
		relativePath := strings.TrimPrefix(outputFile.Path, buildOptions.Outdir)
		if strings.HasSuffix(relativePath, requestPath) {
			w.Write(outputFile.Contents)
			return nil
		}
		existingFiles = append(existingFiles, outputFile.Path)
	}

	return fmt.Errorf("file not found: %s. Existing files: %v", requestPath, existingFiles)
}

func buildErrorScript(err error) string {
	return fmt.Sprintf("alert(%q)", err.Error())
}

func index(efs fs.FS, w http.ResponseWriter, _ *http.Request) {
	files, err := listEmbeddedFiles(efs)
	if err != nil {
		slog.Error("Failed to list embedded files", "error", err)
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "text/html")
	w.Write([]byte("<html><body><ul>"))
	for _, file := range files {
		w.Write([]byte("<li><a href=\"" + file + "\">" + file + "</a></li>"))
	}
	w.Write([]byte("</ul></body></html>"))
	return
}

func listEmbeddedFiles(efs fs.FS) ([]string, error) {
	var files []string
	err := fs.WalkDir(efs, ".", func(path string, d fs.DirEntry, err error) error {
		if err != nil {
			return err
		}

		if d.IsDir() {
			return nil
		}

		files = append(files, path)
		return nil
	})

	return files, err
}

func getFilename(root, rawurl string) *string {
	// remove root from rawurl
	rawurl = strings.TrimPrefix(rawurl, root)

	parsedURL, err := url.Parse(rawurl)
	if err != nil {
		return nil // or handle the error as you prefer
	}

	filename := path.Base(parsedURL.Path)
	if filename == "/" || filename == "." {
		return nil
	}

	return &filename
}
