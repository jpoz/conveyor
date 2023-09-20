package main

import (
	"io/fs"
	"net/http"

	"github.com/jpoz/protojob/ui"
)

func main() {
	// Create a new file system sub-directory for serving files
	subFS, err := fs.Sub(ui.Files, "dist")
	if err != nil {
		panic(err)
	}

	// Serve static files from the embedded file system
	fs := http.FileServer(http.FS(subFS))
	http.Handle("/", http.StripPrefix("/", fs))

	// Start the server
	err = http.ListenAndServe(":8080", nil)
	if err != nil {
		panic(err)
	}
}
