package hub

import "flag"

type ServerArgs struct {
	ConfigPath string
	Verbose    bool
}

func ParseArgs() (ServerArgs, error) {
	out := ServerArgs{}

	flag.StringVar(&out.ConfigPath, "c", "config.yaml", "path to the hub config file")
	flag.BoolVar(&out.Verbose, "v", false, "verbose output")
	flag.Parse()

	if out.ConfigPath == "" {
		return out, flag.ErrHelp
	}

	return out, nil
}
