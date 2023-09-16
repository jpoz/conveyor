# Storage

## Introduction

This documentation describes the architecture and design of how storage works with Redis. This package is responsible for handling job queues and job states, using Redis as a data store. The package ensures that jobs are properly enqueued, processed, and tracked.

---

## Queues in Redis

### Overview

All the job queues are stored as lists in Redis. Each list represents a separate queue, and the values in each list serve as the job along with its payload.

### Schema

- Key: `queue:<queue_name>`
- Value: Serialized job and payload
- Data Type: List


---

## Jobs in Progress

### Overview

While a job is being worked on, it is stored as a key-value pair in Redis to denote its in-progress status.

### Schema

- Key: `job:<job_id>`
- Value: Serialized job details and payload
- Data Type: String

---

## Child Jobs

### Overview

If a child job is created while a parent job is running, it is enqueued like a regular job. Additionally, the child job is also added to a Redis set, which helps in keeping track of child jobs that the parent job needs to wait for completion.

### Schema for Child Job Set

- Key: `job:<parent_job_id>`
- Value: Child job IDs
- Data Type: Set


---

## CompletedAt Jobs

### Overview

If a `completedAt` job is created, it will be stored in a `completedAt` list in Redis. These jobs will be enqueued back into the normal queue only after their parent jobs and all associated child jobs have completed execution.

### Schema for CompletedAt List

- Key: `job:<parent_job_id>:completed`
- Value: Serialized `completedAt` job details and payload
- Data Type: List

---

## Scheduled / Retried Jobs

### Overview

If a job fails it's added to the scheduled queue. Alternatively, if you want a job to run in the future, you can also add it to the same queue.

The job payload itself is stored in a `job:<job_id>` key in Redis.

### Schema for Scheduled Set

- Key: `scheduled`
- Value: `timestamp|<job_id>`
- Data Type: SortedSet
