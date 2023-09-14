package hub

import "flag"

type ServerArgs struct {
	ConfigPath string `yaml:"configPath" json:"configPath"`
}

func ParseArgs() (ServerArgs, error) {
	out := ServerArgs{}

	flag.StringVar(&out.ConfigPath, "c", "config.yaml", "path to the hub config file")
	flag.Parse()

	if out.ConfigPath == "" {
		return out, flag.ErrHelp
	}

	return out, nil
}
