package storage

import "errors"

var ErrFatalError = errors.New("fatal storage error")

var ErrNoJob = errors.New("the job given was nil")
var ErrMissingPayload = errors.New("there was no payload in the job")
var ErrNoQueue = errors.New("the queue in the job is blank, there must be a queue")
var ErrNoType = errors.New("there was no type given in the job")
var ErrParentIsMissing = errors.New("a child job's parent is no longer set")
