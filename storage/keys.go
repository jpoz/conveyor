package storage

import (
	"fmt"
	"time"
)

func (r RedisHandler) ActiveJobsKey() string {
	return fmt.Sprintf("%s:jobs:active", r.Namespace)
}

func (r RedisHandler) ActiveQueuesKey() string {
	return fmt.Sprintf("%s:queues:active", r.Namespace)
}

func (r RedisHandler) ActiveWorkersKey() string {
	return fmt.Sprintf("%s:workers:active", r.Namespace)
}

func (r RedisHandler) FailedJobsKey() string {
	return fmt.Sprintf("%s:failed", r.Namespace)
}

func (r RedisHandler) JobEventsChannelKey() string {
	return fmt.Sprintf("%s:events", r.Namespace)
}

func (r RedisHandler) ScheduledJobsKey() string {
	return fmt.Sprintf("%s:scheduled", r.Namespace)
}

func (r RedisHandler) QueueKey(queue string) string {
	return fmt.Sprintf("%s:queue:%s", r.Namespace, queue)
}

func (r RedisHandler) ChildenListKey(parentUuid string) string {
	return fmt.Sprintf("%s:job:%s:children", r.Namespace, parentUuid)
}

func (r RedisHandler) ChildenSetKey(parentUuid string) string {
	return fmt.Sprintf("%s:job:%s:active", r.Namespace, parentUuid)
}

func (r RedisHandler) JobKey(uuid string) string {
	return fmt.Sprintf("%s:job:%s", r.Namespace, uuid)
}

func (r RedisHandler) HistoricalResultKey(t time.Time, result Result) string {
	return fmt.Sprintf("%s:hist:%s:%s", r.Namespace, result.String(), t.Format("2006-01-02_15:04"))
}

func (r RedisHandler) OnCompleteListKey(predecessorUuid string) string {
	return fmt.Sprintf("%s:job:%s:onComplete", r.Namespace, predecessorUuid)
}
