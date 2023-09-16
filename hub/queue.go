package hub

import (
	"fmt"
)

func jobKey(uuid string) string {
	return fmt.Sprintf("job:%s", uuid)
}

func childenSetKey(parentUuid string) string {
	return fmt.Sprintf("job:%s:children", parentUuid)
}

func heirListKey(predecessorUuid string) string {
	return fmt.Sprintf("job:%s:heirs", predecessorUuid)
}
