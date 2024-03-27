package wire

import (
	"encoding/json"
	"fmt"

	"google.golang.org/protobuf/proto"
	"google.golang.org/protobuf/reflect/protoreflect"
)

func InspectPayload(payload []byte, dynMsg proto.Message) (map[string]string, error) {
	err := proto.Unmarshal(payload, dynMsg)
	if err != nil {
		return nil, err
	}

	out := map[string]string{}
	dynMsg.ProtoReflect().Range(func(fd protoreflect.FieldDescriptor, v protoreflect.Value) bool {
		out[string(fd.Name())] = fmt.Sprintf("%v", v)
		return true
	})

	return out, nil
}

func PrintInspectPayload(payload []byte, msg proto.Message) string {
	insp, err := InspectPayload(payload, msg)
	if err != nil {
		return err.Error()
	}

	// pretyprint json
	pretty, err := json.MarshalIndent(insp, "", "  ")
	if err != nil {
		return err.Error()
	}

	return string(pretty)
}
