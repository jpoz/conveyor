# Conveyor Spec

## Add

### Overview
This specification outlines the procedure for adding a job to a Redis database. It includes generating unique identifiers, managing parent-child relationships, scheduling jobs, and error handling.

### Inputs
1. **Context (`ctx`)**: An execution context that supports cancellation and deadlines.
2. **Job (`job`)**: A data structure representing a job, which includes:
   - `Uuid`: A unique identifier. It must be generated if absent.
   - `ParentUuid`: Identifier for the parent job (optional).
   - `PredecessorUuid`: Identifier for the job's predecessor (optional).
   - `RunAt`: Timestamp indicating when the job should run (optional).
   - `Queue`: Name of the queue to which the job should be added.
3. **DeadParent (`deadParent`)**: A boolean indicating if the job's parent is "dead".

### Outputs
- **Error**: Indicates a failure to add the job, with details on the reason.

### Process
1. **Validation**:
   - Return an error if `job` is `nil`.
   - Generate and assign a new UUID to `job.Uuid` if it's empty.

2. **Marshalling**:
   - Convert `job` to a byte representation using the wire protobuf format. Return an error on failure, indicating marshalling issues.

3. **Parent-Child Relationship Handling**:
   - If `job.ParentUuid` is not empty and `deadParent` is `false`, add the job to the parent's children list. See [Adding job to Parent](#adding-job-to-parent) for details. **Retrun** an error if this fails, detailing the issue, or nil.
   - If `job.PredecessorUuid` is not empty and `deadParent` is `false`, add the job to the predecessor's onComplete list. See [Adding job to Predecessor](#adding-job-to-predecessor) for details. **Return** an error if this fails, detailing the issue, or nil.

4. **Scheduling**:
   - If `job.RunAt` is set and in the future, schedule the job in a sorted set with a score based on the timestamp. See [Scheduling Jobs](#scheduling-jobs) for details. **Return** an error if this fails, detailing the issue, or nil.

5. **Dead Parent Handling**:
   - If `job.ParentUuid` is not empty, at this point we know that the parent is dead. Add the job's UUID to a set for tracking children of dead parents. Do not return unless this errors. See [Dead Parent Handling](#dead-parent-handling) for details.

6. **Queue Addition**:
   - Add the marshalled job to the specified queue. Return an error if this fails, detailing the issue.

### Error Handling
- Define specific errors for invalid inputs, marshalling failures, and Redis operation errors, each with descriptive messaging for troubleshooting.

### Redis Key Naming Convention
- Establish a consistent naming convention for keys related to children lists, onComplete lists, scheduled jobs, and children sets.

### Implementation Notes
- Ensure thread safety and context propagation for cancellation and timeouts.
- Familiarity with Redis commands like `LPush`, `ZAdd`, and `SAdd` is assumed.
- Distinguish between critical errors and recoverable ones in error handling.


## Adding job to Parent 

### Overview
This specification outlines the procedure for adding a job to a parent job. It includes managing parent-child relationships, scheduling jobs, and error handling.

### Inputs
1. **Context (`ctx`)**: An execution context that supports cancellation and deadlines.
2. **Job (`job`)**: A data structure representing a job, which includes:
   - `Uuid`: A unique identifier. It must be generated if absent.
   - `ParentUuid`: Identifier for the parent job (required).
   - `PredecessorUuid`: Identifier for the job's predecessor (optional).
   - `RunAt`: Timestamp indicating when the job should run (optional).
   - `Queue`: Name of the queue to which the job should be added.

### Outputs
- **Error**: Indicates a failure to add the job, with details on the reason.

### Process
1. **Validation**:
   - Return an error if `job` is `nil`.
   - Generate and assign a new UUID to `job.Uuid` if it's empty.
2. **Marshalling**:
   - Convert `job` to a byte representation using the wire protobuf format. Return an error on failure, indicating marshalling issues.
3. **Redis**
   - Add the marshalled job to the `childrenListKey` for the parent job. Return an error if this fails, detailing the issue.

### Error Handling
- Define specific errors for invalid inputs, marshalling failures, and Redis operation errors, each with descriptive messaging for troubleshooting.


## Adding job to Predecessor

### Overview
This specification outlines the procedure for adding a job to a predecessor. It includes managing parent-child relationships, scheduling jobs, and error handling.

### Inputs
1. **Context (`ctx`)**: An execution context that supports cancellation and deadlines.
2. **SerializedJob (`job`)**: A byte representation of a job, which includes:
   - `Uuid`: A unique identifier. It must be generated if absent.
   - `PredecessorUuid`: Identifier for the job's predecessor (required).
   - `RunAt`: Timestamp indicating when the job should run (optional).
   - `Queue`: Name of the queue to which the job should be added.
3. **PredecessorUuid (`predecessorUuid`)**: Identifier for the job's predecessor (required).

### Outputs
- **Error**: Indicates a failure to add the job, with details on the reason.

### Process
1. **Redis**
   - Add the marshalled job to the `onCompleteListKey` for the predecessor uuid. Return an error if this fails, detailing the issue.


## Scheduling Jobs

### Overview
This specification outlines the procedure for scheduling a job. It includes managing scheduled jobs, and error handling.

### Inputs
1. **Context (`ctx`)**: An execution context that supports cancellation and deadlines.
2. **SerializedJob (`job`)**: A byte representation of a job, which includes:
   - `Uuid`: A unique identifier. It must be generated if absent.
   - `RunAt`: Timestamp indicating when the job should run (required).
   - `Queue`: Name of the queue to which the job should be added.
3. **RunAt (`runAt`)**: Timestamp indicating when the job should run (required).

### Outputs
- **Error**: Indicates a failure to add the job, with details on the reason.

### Process
1. **Redis**
   - Add the marshalled job to the `scheduledJobsKey`. Usins the ZAdd command. The Score is the float value of `runAt` in epoch seconds. The Member is the marshalled job. Return an error if this fails, detailing the issue.


## Dead Parent Handling

### Overview
This specification outlines the procedure for handling a job that is enqueue with a dead parent-child

### Inputs
1. **Context (`ctx`)**: An execution context that supports cancellation and deadlines.
2. **SerializedJob (`job`)**: A byte representation of a job, which includes:
   - `Uuid`: A unique identifier. It must be generated if absent.
   - `ParentUuid`: Identifier for the parent job (required).
   - `Queue`: Name of the queue to which the job should be added.
3. **ParentUuid (`parentUuid`)**: Identifier for the parent job (required).

### Outputs
- **Error**: Indicates a failure to add the job, with details on the reason.

### Process
1. **Redis**
   - Add the marshalled job to the `childrenSetKey` for the parent job usind Sadd the key is the job's uuid. Return an error if this fails, detailing the issue.


## Push Job

### Overview
This specification outlines the procedure for pushing a job to a queue. It includes managing scheduled jobs, and error handling.

### Inputs
1. **Context (`ctx`)**: An execution context that supports cancellation and deadlines.
2. **SerializedJob (`job`)**: A byte representation of a job, which includes:
   - `Uuid`: A unique identifier. It must be generated if absent.
   - `Queue`: Name of the queue to which the job should be added.
3. **Queue (`queue`)**: Name of the queue to which the job should be added.

### Outputs
- **Error**: Indicates a failure to add the job, with details on the reason.

### Process
1. **Redis**
   - Add the marshalled job to the `queue` key using LPush. Return an error if this fails, detailing the issue.

   
# Keys

## scheduledJobsKey

This is the list of scheduled jobs.

Object type: List
Key: `scheduled`

## jobKey

This is the key for the job. The value is the serialized job.

Object type: String
Key: `jobs:{uuid}`

## childrenListKey

This is the list of jobs that are children of the parent job.

Object type: List
Key: `jobs:{parent uuid}:children`


## childrenSetKey

These are the active children jobs for a given parent job.

Object type: Set
Key: `jobs:{parent uuid}:active`


## onCompleteListKey

Key: `jobs:{parent uuid}:onComplete`
