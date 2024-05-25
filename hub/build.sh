#!/bin/bash
go run -mod=mod github.com/a-h/templ/cmd/templ generate -path views/ &
npx tailwindcss -i src/app.css -o static/app.css --minify &
wait # This will wait for both background processes to complete
go build -work -o ./tmp/main ../../cmd/hub/main.go
