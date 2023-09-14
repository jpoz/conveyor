package main

import (
	"log"

	"github.com/jpoz/protojob/pkg/hub"
)

func main() {
	opts, err := hub.ParseArgs()
	if err != nil {
		log.Fatal(err)
	}
	server, err := hub.NewServer(opts)
	if err != nil {
		log.Fatal(err)
	}

	err = server.Listen(8080)
	if err != nil {
		log.Fatal(err)
	}
}
