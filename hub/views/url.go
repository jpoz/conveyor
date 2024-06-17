package views

import (
	"context"
	"path/filepath"

	"github.com/a-h/templ"
)

const prefixKey = "prefix"
const homeKey = "home"

func SetPrefix(ctx context.Context, prefix string) context.Context {
	return context.WithValue(ctx, prefixKey, prefix)
}

func SetHomeURL(ctx context.Context, home string) context.Context {
	return context.WithValue(ctx, homeKey, home)
}

func URL(ctx context.Context, path string) string {
	prefix := ctx.Value(prefixKey).(string)
	return filepath.Join(prefix, path)
}

func SafeURL(ctx context.Context, path string) templ.SafeURL {
	path = URL(ctx, path)
	return templ.SafeURL(path)
}

func SafeHomeURL(ctx context.Context) templ.SafeURL {
	path := ctx.Value(homeKey).(string)
	return templ.SafeURL(path)
}
