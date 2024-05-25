package hub

import (
	"embed"

	"github.com/jpoz/goes"
)

//go:embed dist/*
var dist embed.FS

const configJSON = `{
	"Outdir": "dist",
	"Entrypoints": [ "src/main.ts" ],
	"Bundle": true,
	"Write": true,
	"Sourcemap": 2
}`

// "MinifyWhitespace": true,
// "MinifyIdentifiers": true,
// "MinifySyntax": true

var JSHandler = goes.ESHandler(
	"pkg/hub",
	goes.MustParseConfig(configJSON),
	dist,
)
