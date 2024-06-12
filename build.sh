#!/bin/bash
go run -mod=mod github.com/a-h/templ/cmd/templ generate -path hub/views &
(cd hub && npx tailwindcss -i src/app.css -o static/app.css --minify) &
go run cmd/build/main.go
wait # This will wait for both background processes to complete
go build -work -o ./tmp/main ./_dev/
