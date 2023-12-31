package storage

import (
	"fmt"
)

const activeQueuesKey = "queues:active"
const activeWorkersKey = "workers:active"
const activeJobsKey = "jobs:active"

const scheduledJobsKey = "scheduled"
const failedJobsKey = "failed"

func jobKey(uuid string) string {
	return fmt.Sprintf("job:%s", uuid)
}

func childenListKey(parentUuid string) string {
	return fmt.Sprintf("job:%s:children", parentUuid)
}

func childenSetKey(parentUuid string) string {
	return fmt.Sprintf("job:%s:active", parentUuid)
}

func onCompleteListKey(predecessorUuid string) string {
	return fmt.Sprintf("job:%s:onComplete", predecessorUuid)
}
