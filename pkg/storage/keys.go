package storage

import (
	"fmt"
)

const prefix = "conv"

var (
	activeJobsKey       = fmt.Sprintf("%s:%s", prefix, "jobs:active")
	activeQueuesKey     = fmt.Sprintf("%s:%s", prefix, "queues:active")
	activeWorkersKey    = fmt.Sprintf("%s:%s", prefix, "workers:active")
	failedJobsKey       = fmt.Sprintf("%s:%s", prefix, "failed")
	jobEventsChannelKey = fmt.Sprintf("%s:%s", prefix, "events")
	scheduledJobsKey    = fmt.Sprintf("%s:%s", prefix, "scheduled")
)

func queueKey(queue string) string {
	return fmt.Sprintf("%s:queue:%s", prefix, queue)
}

func childenListKey(parentUuid string) string {
	return fmt.Sprintf("%s:job:%s:children", prefix, parentUuid)
}

func childenSetKey(parentUuid string) string {
	return fmt.Sprintf("%s:job:%s:active", prefix, parentUuid)
}

func jobKey(uuid string) string {
	return fmt.Sprintf("%s:job:%s", prefix, uuid)
}

func onCompleteListKey(predecessorUuid string) string {
	return fmt.Sprintf("%s:job:%s:onComplete", prefix, predecessorUuid)
}
