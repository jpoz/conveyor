package hub

import "flag"

func ParseArgs() (ServerOpts, error) {
	out := ServerOpts{}

	flag.StringVar(&out.ConfigPath, "c", "config.yaml", "path to the hub config file")
	flag.Parse()

	if out.ConfigPath == "" {
		return out, flag.ErrHelp
	}

	return out, nil
}
