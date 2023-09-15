package hub

import (
	"fmt"
)

func toQueueName(fullName string) string {
	return fullName
}

func toQueueNames(fullNames []string) []string {
	result := make([]string, 0, len(fullNames))
	for _, name := range fullNames {
		result = append(result, toQueueName(name))
	}
	return result
}

func toJobKey(uuid string) string {
	return fmt.Sprintf("job:%s", uuid)
}

func childenSetKey(parentUuid string) string {
	return fmt.Sprintf("job:%s:children", parentUuid)
}

func heirListKey(predecessorUuid string) string {
	return fmt.Sprintf("job:%s:heirs", predecessorUuid)
}
