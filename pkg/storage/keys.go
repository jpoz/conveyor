package storage

import (
	"fmt"
)

const prefix = "conv"

var (
	activeQueuesKey  = fmt.Sprintf("%s:%s", prefix, "queues:active")
	activeWorkersKey = fmt.Sprintf("%s:%s", prefix, "workers:active")
	activeJobsKey    = fmt.Sprintf("%s:%s", prefix, "jobs:active")
	scheduledJobsKey = fmt.Sprintf("%s:%s", prefix, "scheduled")
	failedJobsKey    = fmt.Sprintf("%s:%s", prefix, "failed")
)

func jobKey(uuid string) string {
	return fmt.Sprintf("%s:job:%s", prefix, uuid)
}

func childenListKey(parentUuid string) string {
	return fmt.Sprintf("%s:job:%s:children", prefix, parentUuid)
}

func childenSetKey(parentUuid string) string {
	return fmt.Sprintf("%s:job:%s:active", prefix, parentUuid)
}

func onCompleteListKey(predecessorUuid string) string {
	return fmt.Sprintf("%s:job:%s:onComplete", prefix, predecessorUuid)
}
