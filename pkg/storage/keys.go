package storage

import (
	"fmt"
)

const prefix = "conv"

var (
	ActiveJobsKey       = fmt.Sprintf("%s:%s", prefix, "jobs:active")
	ActiveQueuesKey     = fmt.Sprintf("%s:%s", prefix, "queues:active")
	ActiveWorkersKey    = fmt.Sprintf("%s:%s", prefix, "workers:active")
	FailedJobsKey       = fmt.Sprintf("%s:%s", prefix, "failed")
	JobEventsChannelKey = fmt.Sprintf("%s:%s", prefix, "events")
	ScheduledJobsKey    = fmt.Sprintf("%s:%s", prefix, "scheduled")
)

func QueueKey(queue string) string {
	return fmt.Sprintf("%s:queue:%s", prefix, queue)
}

func ChildenListKey(parentUuid string) string {
	return fmt.Sprintf("%s:job:%s:children", prefix, parentUuid)
}

func ChildenSetKey(parentUuid string) string {
	return fmt.Sprintf("%s:job:%s:active", prefix, parentUuid)
}

func JobKey(uuid string) string {
	return fmt.Sprintf("%s:job:%s", prefix, uuid)
}

func OnCompleteListKey(predecessorUuid string) string {
	return fmt.Sprintf("%s:job:%s:onComplete", prefix, predecessorUuid)
}
