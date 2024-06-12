package views

import (
	"context"
	"path/filepath"

	"github.com/a-h/templ"
)

const prefixKey = "prefix"

func SetPrefix(ctx context.Context, prefix string) context.Context {
	return context.WithValue(ctx, prefixKey, prefix)
}

func URL(ctx context.Context, path string) string {
	prefix := ctx.Value(prefixKey).(string)
	return filepath.Join(prefix, path)
}

func SafeURL(ctx context.Context, path string) templ.SafeURL {
	return templ.SafeURL(URL(ctx, path))
}
