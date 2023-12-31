// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.31.0
// 	protoc        v4.24.3
// source: wire/jobs.proto

package wire

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	timestamppb "google.golang.org/protobuf/types/known/timestamppb"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// Job data structure
type Job struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// required
	Uuid    string `protobuf:"bytes,1,opt,name=uuid,proto3" json:"uuid,omitempty"`
	Type    string `protobuf:"bytes,2,opt,name=type,proto3" json:"type,omitempty"`
	Queue   string `protobuf:"bytes,3,opt,name=queue,proto3" json:"queue,omitempty"`
	Payload []byte `protobuf:"bytes,4,opt,name=payload,proto3" json:"payload,omitempty"`
	// optional
	RunAt           *timestamppb.Timestamp `protobuf:"bytes,5,opt,name=run_at,json=runAt,proto3" json:"run_at,omitempty"`
	ParentUuid      string                 `protobuf:"bytes,6,opt,name=parent_uuid,json=parentUuid,proto3" json:"parent_uuid,omitempty"`
	PredecessorUuid string                 `protobuf:"bytes,7,opt,name=predecessor_uuid,json=predecessorUuid,proto3" json:"predecessor_uuid,omitempty"`
	// internal
	StartedAt   *timestamppb.Timestamp `protobuf:"bytes,8,opt,name=started_at,json=startedAt,proto3" json:"started_at,omitempty"`
	Retry       int32                  `protobuf:"varint,9,opt,name=retry,proto3" json:"retry,omitempty"`
	MaxRetries  int32                  `protobuf:"varint,10,opt,name=max_retries,json=maxRetries,proto3" json:"max_retries,omitempty"`
	LastFailure string                 `protobuf:"bytes,11,opt,name=last_failure,json=lastFailure,proto3" json:"last_failure,omitempty"`
}

func (x *Job) Reset() {
	*x = Job{}
	if protoimpl.UnsafeEnabled {
		mi := &file_wire_jobs_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Job) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Job) ProtoMessage() {}

func (x *Job) ProtoReflect() protoreflect.Message {
	mi := &file_wire_jobs_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Job.ProtoReflect.Descriptor instead.
func (*Job) Descriptor() ([]byte, []int) {
	return file_wire_jobs_proto_rawDescGZIP(), []int{0}
}

func (x *Job) GetUuid() string {
	if x != nil {
		return x.Uuid
	}
	return ""
}

func (x *Job) GetType() string {
	if x != nil {
		return x.Type
	}
	return ""
}

func (x *Job) GetQueue() string {
	if x != nil {
		return x.Queue
	}
	return ""
}

func (x *Job) GetPayload() []byte {
	if x != nil {
		return x.Payload
	}
	return nil
}

func (x *Job) GetRunAt() *timestamppb.Timestamp {
	if x != nil {
		return x.RunAt
	}
	return nil
}

func (x *Job) GetParentUuid() string {
	if x != nil {
		return x.ParentUuid
	}
	return ""
}

func (x *Job) GetPredecessorUuid() string {
	if x != nil {
		return x.PredecessorUuid
	}
	return ""
}

func (x *Job) GetStartedAt() *timestamppb.Timestamp {
	if x != nil {
		return x.StartedAt
	}
	return nil
}

func (x *Job) GetRetry() int32 {
	if x != nil {
		return x.Retry
	}
	return 0
}

func (x *Job) GetMaxRetries() int32 {
	if x != nil {
		return x.MaxRetries
	}
	return 0
}

func (x *Job) GetLastFailure() string {
	if x != nil {
		return x.LastFailure
	}
	return ""
}

type AddRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Job *Job `protobuf:"bytes,1,opt,name=job,proto3" json:"job,omitempty"`
}

func (x *AddRequest) Reset() {
	*x = AddRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_wire_jobs_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AddRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AddRequest) ProtoMessage() {}

func (x *AddRequest) ProtoReflect() protoreflect.Message {
	mi := &file_wire_jobs_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AddRequest.ProtoReflect.Descriptor instead.
func (*AddRequest) Descriptor() ([]byte, []int) {
	return file_wire_jobs_proto_rawDescGZIP(), []int{1}
}

func (x *AddRequest) GetJob() *Job {
	if x != nil {
		return x.Job
	}
	return nil
}

type AddResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Success bool   `protobuf:"varint,1,opt,name=success,proto3" json:"success,omitempty"`
	Message string `protobuf:"bytes,2,opt,name=message,proto3" json:"message,omitempty"`
	Job     *Job   `protobuf:"bytes,3,opt,name=job,proto3" json:"job,omitempty"`
}

func (x *AddResponse) Reset() {
	*x = AddResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_wire_jobs_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AddResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AddResponse) ProtoMessage() {}

func (x *AddResponse) ProtoReflect() protoreflect.Message {
	mi := &file_wire_jobs_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AddResponse.ProtoReflect.Descriptor instead.
func (*AddResponse) Descriptor() ([]byte, []int) {
	return file_wire_jobs_proto_rawDescGZIP(), []int{2}
}

func (x *AddResponse) GetSuccess() bool {
	if x != nil {
		return x.Success
	}
	return false
}

func (x *AddResponse) GetMessage() string {
	if x != nil {
		return x.Message
	}
	return ""
}

func (x *AddResponse) GetJob() *Job {
	if x != nil {
		return x.Job
	}
	return nil
}

type PopRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Queues []string `protobuf:"bytes,1,rep,name=queues,proto3" json:"queues,omitempty"`
}

func (x *PopRequest) Reset() {
	*x = PopRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_wire_jobs_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PopRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PopRequest) ProtoMessage() {}

func (x *PopRequest) ProtoReflect() protoreflect.Message {
	mi := &file_wire_jobs_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PopRequest.ProtoReflect.Descriptor instead.
func (*PopRequest) Descriptor() ([]byte, []int) {
	return file_wire_jobs_proto_rawDescGZIP(), []int{3}
}

func (x *PopRequest) GetQueues() []string {
	if x != nil {
		return x.Queues
	}
	return nil
}

type WorkRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Job *Job `protobuf:"bytes,1,opt,name=job,proto3" json:"job,omitempty"`
}

func (x *WorkRequest) Reset() {
	*x = WorkRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_wire_jobs_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *WorkRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*WorkRequest) ProtoMessage() {}

func (x *WorkRequest) ProtoReflect() protoreflect.Message {
	mi := &file_wire_jobs_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use WorkRequest.ProtoReflect.Descriptor instead.
func (*WorkRequest) Descriptor() ([]byte, []int) {
	return file_wire_jobs_proto_rawDescGZIP(), []int{4}
}

func (x *WorkRequest) GetJob() *Job {
	if x != nil {
		return x.Job
	}
	return nil
}

type CloseRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Job *Job `protobuf:"bytes,1,opt,name=job,proto3" json:"job,omitempty"`
}

func (x *CloseRequest) Reset() {
	*x = CloseRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_wire_jobs_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CloseRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CloseRequest) ProtoMessage() {}

func (x *CloseRequest) ProtoReflect() protoreflect.Message {
	mi := &file_wire_jobs_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CloseRequest.ProtoReflect.Descriptor instead.
func (*CloseRequest) Descriptor() ([]byte, []int) {
	return file_wire_jobs_proto_rawDescGZIP(), []int{5}
}

func (x *CloseRequest) GetJob() *Job {
	if x != nil {
		return x.Job
	}
	return nil
}

type CloseResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Closed bool `protobuf:"varint,1,opt,name=closed,proto3" json:"closed,omitempty"`
}

func (x *CloseResponse) Reset() {
	*x = CloseResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_wire_jobs_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CloseResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CloseResponse) ProtoMessage() {}

func (x *CloseResponse) ProtoReflect() protoreflect.Message {
	mi := &file_wire_jobs_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CloseResponse.ProtoReflect.Descriptor instead.
func (*CloseResponse) Descriptor() ([]byte, []int) {
	return file_wire_jobs_proto_rawDescGZIP(), []int{6}
}

func (x *CloseResponse) GetClosed() bool {
	if x != nil {
		return x.Closed
	}
	return false
}

type FailRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Uuid    string `protobuf:"bytes,1,opt,name=uuid,proto3" json:"uuid,omitempty"`
	Message string `protobuf:"bytes,2,opt,name=message,proto3" json:"message,omitempty"`
}

func (x *FailRequest) Reset() {
	*x = FailRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_wire_jobs_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *FailRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*FailRequest) ProtoMessage() {}

func (x *FailRequest) ProtoReflect() protoreflect.Message {
	mi := &file_wire_jobs_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use FailRequest.ProtoReflect.Descriptor instead.
func (*FailRequest) Descriptor() ([]byte, []int) {
	return file_wire_jobs_proto_rawDescGZIP(), []int{7}
}

func (x *FailRequest) GetUuid() string {
	if x != nil {
		return x.Uuid
	}
	return ""
}

func (x *FailRequest) GetMessage() string {
	if x != nil {
		return x.Message
	}
	return ""
}

type Checkin struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	WorkerId string `protobuf:"bytes,1,opt,name=worker_id,json=workerId,proto3" json:"worker_id,omitempty"`
}

func (x *Checkin) Reset() {
	*x = Checkin{}
	if protoimpl.UnsafeEnabled {
		mi := &file_wire_jobs_proto_msgTypes[8]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Checkin) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Checkin) ProtoMessage() {}

func (x *Checkin) ProtoReflect() protoreflect.Message {
	mi := &file_wire_jobs_proto_msgTypes[8]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Checkin.ProtoReflect.Descriptor instead.
func (*Checkin) Descriptor() ([]byte, []int) {
	return file_wire_jobs_proto_rawDescGZIP(), []int{8}
}

func (x *Checkin) GetWorkerId() string {
	if x != nil {
		return x.WorkerId
	}
	return ""
}

type Empty struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *Empty) Reset() {
	*x = Empty{}
	if protoimpl.UnsafeEnabled {
		mi := &file_wire_jobs_proto_msgTypes[9]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Empty) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Empty) ProtoMessage() {}

func (x *Empty) ProtoReflect() protoreflect.Message {
	mi := &file_wire_jobs_proto_msgTypes[9]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Empty.ProtoReflect.Descriptor instead.
func (*Empty) Descriptor() ([]byte, []int) {
	return file_wire_jobs_proto_rawDescGZIP(), []int{9}
}

var File_wire_jobs_proto protoreflect.FileDescriptor

var file_wire_jobs_proto_rawDesc = []byte{
	0x0a, 0x0f, 0x77, 0x69, 0x72, 0x65, 0x2f, 0x6a, 0x6f, 0x62, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x12, 0x04, 0x77, 0x69, 0x72, 0x65, 0x1a, 0x1f, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61,
	0x6d, 0x70, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xf1, 0x02, 0x0a, 0x03, 0x4a, 0x6f, 0x62,
	0x12, 0x12, 0x0a, 0x04, 0x75, 0x75, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04,
	0x75, 0x75, 0x69, 0x64, 0x12, 0x12, 0x0a, 0x04, 0x74, 0x79, 0x70, 0x65, 0x18, 0x02, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x04, 0x74, 0x79, 0x70, 0x65, 0x12, 0x14, 0x0a, 0x05, 0x71, 0x75, 0x65, 0x75,
	0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x71, 0x75, 0x65, 0x75, 0x65, 0x12, 0x18,
	0x0a, 0x07, 0x70, 0x61, 0x79, 0x6c, 0x6f, 0x61, 0x64, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0c, 0x52,
	0x07, 0x70, 0x61, 0x79, 0x6c, 0x6f, 0x61, 0x64, 0x12, 0x31, 0x0a, 0x06, 0x72, 0x75, 0x6e, 0x5f,
	0x61, 0x74, 0x18, 0x05, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c,
	0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73,
	0x74, 0x61, 0x6d, 0x70, 0x52, 0x05, 0x72, 0x75, 0x6e, 0x41, 0x74, 0x12, 0x1f, 0x0a, 0x0b, 0x70,
	0x61, 0x72, 0x65, 0x6e, 0x74, 0x5f, 0x75, 0x75, 0x69, 0x64, 0x18, 0x06, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x0a, 0x70, 0x61, 0x72, 0x65, 0x6e, 0x74, 0x55, 0x75, 0x69, 0x64, 0x12, 0x29, 0x0a, 0x10,
	0x70, 0x72, 0x65, 0x64, 0x65, 0x63, 0x65, 0x73, 0x73, 0x6f, 0x72, 0x5f, 0x75, 0x75, 0x69, 0x64,
	0x18, 0x07, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0f, 0x70, 0x72, 0x65, 0x64, 0x65, 0x63, 0x65, 0x73,
	0x73, 0x6f, 0x72, 0x55, 0x75, 0x69, 0x64, 0x12, 0x39, 0x0a, 0x0a, 0x73, 0x74, 0x61, 0x72, 0x74,
	0x65, 0x64, 0x5f, 0x61, 0x74, 0x18, 0x08, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f,
	0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69,
	0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x09, 0x73, 0x74, 0x61, 0x72, 0x74, 0x65, 0x64,
	0x41, 0x74, 0x12, 0x14, 0x0a, 0x05, 0x72, 0x65, 0x74, 0x72, 0x79, 0x18, 0x09, 0x20, 0x01, 0x28,
	0x05, 0x52, 0x05, 0x72, 0x65, 0x74, 0x72, 0x79, 0x12, 0x1f, 0x0a, 0x0b, 0x6d, 0x61, 0x78, 0x5f,
	0x72, 0x65, 0x74, 0x72, 0x69, 0x65, 0x73, 0x18, 0x0a, 0x20, 0x01, 0x28, 0x05, 0x52, 0x0a, 0x6d,
	0x61, 0x78, 0x52, 0x65, 0x74, 0x72, 0x69, 0x65, 0x73, 0x12, 0x21, 0x0a, 0x0c, 0x6c, 0x61, 0x73,
	0x74, 0x5f, 0x66, 0x61, 0x69, 0x6c, 0x75, 0x72, 0x65, 0x18, 0x0b, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x0b, 0x6c, 0x61, 0x73, 0x74, 0x46, 0x61, 0x69, 0x6c, 0x75, 0x72, 0x65, 0x22, 0x29, 0x0a, 0x0a,
	0x41, 0x64, 0x64, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x1b, 0x0a, 0x03, 0x6a, 0x6f,
	0x62, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x09, 0x2e, 0x77, 0x69, 0x72, 0x65, 0x2e, 0x4a,
	0x6f, 0x62, 0x52, 0x03, 0x6a, 0x6f, 0x62, 0x22, 0x5e, 0x0a, 0x0b, 0x41, 0x64, 0x64, 0x52, 0x65,
	0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x18, 0x0a, 0x07, 0x73, 0x75, 0x63, 0x63, 0x65, 0x73,
	0x73, 0x18, 0x01, 0x20, 0x01, 0x28, 0x08, 0x52, 0x07, 0x73, 0x75, 0x63, 0x63, 0x65, 0x73, 0x73,
	0x12, 0x18, 0x0a, 0x07, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x07, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x12, 0x1b, 0x0a, 0x03, 0x6a, 0x6f,
	0x62, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x09, 0x2e, 0x77, 0x69, 0x72, 0x65, 0x2e, 0x4a,
	0x6f, 0x62, 0x52, 0x03, 0x6a, 0x6f, 0x62, 0x22, 0x24, 0x0a, 0x0a, 0x50, 0x6f, 0x70, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x16, 0x0a, 0x06, 0x71, 0x75, 0x65, 0x75, 0x65, 0x73, 0x18,
	0x01, 0x20, 0x03, 0x28, 0x09, 0x52, 0x06, 0x71, 0x75, 0x65, 0x75, 0x65, 0x73, 0x22, 0x2a, 0x0a,
	0x0b, 0x57, 0x6f, 0x72, 0x6b, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x1b, 0x0a, 0x03,
	0x6a, 0x6f, 0x62, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x09, 0x2e, 0x77, 0x69, 0x72, 0x65,
	0x2e, 0x4a, 0x6f, 0x62, 0x52, 0x03, 0x6a, 0x6f, 0x62, 0x22, 0x2b, 0x0a, 0x0c, 0x43, 0x6c, 0x6f,
	0x73, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x1b, 0x0a, 0x03, 0x6a, 0x6f, 0x62,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x09, 0x2e, 0x77, 0x69, 0x72, 0x65, 0x2e, 0x4a, 0x6f,
	0x62, 0x52, 0x03, 0x6a, 0x6f, 0x62, 0x22, 0x27, 0x0a, 0x0d, 0x43, 0x6c, 0x6f, 0x73, 0x65, 0x52,
	0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x16, 0x0a, 0x06, 0x63, 0x6c, 0x6f, 0x73, 0x65,
	0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x08, 0x52, 0x06, 0x63, 0x6c, 0x6f, 0x73, 0x65, 0x64, 0x22,
	0x3b, 0x0a, 0x0b, 0x46, 0x61, 0x69, 0x6c, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12,
	0x0a, 0x04, 0x75, 0x75, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x75, 0x75,
	0x69, 0x64, 0x12, 0x18, 0x0a, 0x07, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x07, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x22, 0x26, 0x0a, 0x07,
	0x43, 0x68, 0x65, 0x63, 0x6b, 0x69, 0x6e, 0x12, 0x1b, 0x0a, 0x09, 0x77, 0x6f, 0x72, 0x6b, 0x65,
	0x72, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x77, 0x6f, 0x72, 0x6b,
	0x65, 0x72, 0x49, 0x64, 0x22, 0x07, 0x0a, 0x05, 0x45, 0x6d, 0x70, 0x74, 0x79, 0x32, 0xe0, 0x01,
	0x0a, 0x03, 0x68, 0x75, 0x62, 0x12, 0x27, 0x0a, 0x09, 0x48, 0x65, 0x61, 0x72, 0x74, 0x62, 0x65,
	0x61, 0x74, 0x12, 0x0d, 0x2e, 0x77, 0x69, 0x72, 0x65, 0x2e, 0x43, 0x68, 0x65, 0x63, 0x6b, 0x69,
	0x6e, 0x1a, 0x0b, 0x2e, 0x77, 0x69, 0x72, 0x65, 0x2e, 0x45, 0x6d, 0x70, 0x74, 0x79, 0x12, 0x2a,
	0x0a, 0x03, 0x41, 0x64, 0x64, 0x12, 0x10, 0x2e, 0x77, 0x69, 0x72, 0x65, 0x2e, 0x41, 0x64, 0x64,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x11, 0x2e, 0x77, 0x69, 0x72, 0x65, 0x2e, 0x41,
	0x64, 0x64, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x2a, 0x0a, 0x03, 0x50, 0x6f,
	0x70, 0x12, 0x10, 0x2e, 0x77, 0x69, 0x72, 0x65, 0x2e, 0x50, 0x6f, 0x70, 0x52, 0x65, 0x71, 0x75,
	0x65, 0x73, 0x74, 0x1a, 0x11, 0x2e, 0x77, 0x69, 0x72, 0x65, 0x2e, 0x57, 0x6f, 0x72, 0x6b, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x30, 0x0a, 0x05, 0x43, 0x6c, 0x6f, 0x73, 0x65, 0x12,
	0x12, 0x2e, 0x77, 0x69, 0x72, 0x65, 0x2e, 0x43, 0x6c, 0x6f, 0x73, 0x65, 0x52, 0x65, 0x71, 0x75,
	0x65, 0x73, 0x74, 0x1a, 0x13, 0x2e, 0x77, 0x69, 0x72, 0x65, 0x2e, 0x43, 0x6c, 0x6f, 0x73, 0x65,
	0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x26, 0x0a, 0x04, 0x46, 0x61, 0x69, 0x6c,
	0x12, 0x11, 0x2e, 0x77, 0x69, 0x72, 0x65, 0x2e, 0x46, 0x61, 0x69, 0x6c, 0x52, 0x65, 0x71, 0x75,
	0x65, 0x73, 0x74, 0x1a, 0x0b, 0x2e, 0x77, 0x69, 0x72, 0x65, 0x2e, 0x45, 0x6d, 0x70, 0x74, 0x79,
	0x42, 0x1f, 0x5a, 0x1d, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x6a,
	0x70, 0x6f, 0x7a, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x6a, 0x6f, 0x62, 0x2f, 0x77, 0x69, 0x72,
	0x65, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_wire_jobs_proto_rawDescOnce sync.Once
	file_wire_jobs_proto_rawDescData = file_wire_jobs_proto_rawDesc
)

func file_wire_jobs_proto_rawDescGZIP() []byte {
	file_wire_jobs_proto_rawDescOnce.Do(func() {
		file_wire_jobs_proto_rawDescData = protoimpl.X.CompressGZIP(file_wire_jobs_proto_rawDescData)
	})
	return file_wire_jobs_proto_rawDescData
}

var file_wire_jobs_proto_msgTypes = make([]protoimpl.MessageInfo, 10)
var file_wire_jobs_proto_goTypes = []interface{}{
	(*Job)(nil),                   // 0: wire.Job
	(*AddRequest)(nil),            // 1: wire.AddRequest
	(*AddResponse)(nil),           // 2: wire.AddResponse
	(*PopRequest)(nil),            // 3: wire.PopRequest
	(*WorkRequest)(nil),           // 4: wire.WorkRequest
	(*CloseRequest)(nil),          // 5: wire.CloseRequest
	(*CloseResponse)(nil),         // 6: wire.CloseResponse
	(*FailRequest)(nil),           // 7: wire.FailRequest
	(*Checkin)(nil),               // 8: wire.Checkin
	(*Empty)(nil),                 // 9: wire.Empty
	(*timestamppb.Timestamp)(nil), // 10: google.protobuf.Timestamp
}
var file_wire_jobs_proto_depIdxs = []int32{
	10, // 0: wire.Job.run_at:type_name -> google.protobuf.Timestamp
	10, // 1: wire.Job.started_at:type_name -> google.protobuf.Timestamp
	0,  // 2: wire.AddRequest.job:type_name -> wire.Job
	0,  // 3: wire.AddResponse.job:type_name -> wire.Job
	0,  // 4: wire.WorkRequest.job:type_name -> wire.Job
	0,  // 5: wire.CloseRequest.job:type_name -> wire.Job
	8,  // 6: wire.hub.Heartbeat:input_type -> wire.Checkin
	1,  // 7: wire.hub.Add:input_type -> wire.AddRequest
	3,  // 8: wire.hub.Pop:input_type -> wire.PopRequest
	5,  // 9: wire.hub.Close:input_type -> wire.CloseRequest
	7,  // 10: wire.hub.Fail:input_type -> wire.FailRequest
	9,  // 11: wire.hub.Heartbeat:output_type -> wire.Empty
	2,  // 12: wire.hub.Add:output_type -> wire.AddResponse
	4,  // 13: wire.hub.Pop:output_type -> wire.WorkRequest
	6,  // 14: wire.hub.Close:output_type -> wire.CloseResponse
	9,  // 15: wire.hub.Fail:output_type -> wire.Empty
	11, // [11:16] is the sub-list for method output_type
	6,  // [6:11] is the sub-list for method input_type
	6,  // [6:6] is the sub-list for extension type_name
	6,  // [6:6] is the sub-list for extension extendee
	0,  // [0:6] is the sub-list for field type_name
}

func init() { file_wire_jobs_proto_init() }
func file_wire_jobs_proto_init() {
	if File_wire_jobs_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_wire_jobs_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Job); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_wire_jobs_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AddRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_wire_jobs_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AddResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_wire_jobs_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PopRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_wire_jobs_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*WorkRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_wire_jobs_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CloseRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_wire_jobs_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CloseResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_wire_jobs_proto_msgTypes[7].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*FailRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_wire_jobs_proto_msgTypes[8].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Checkin); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_wire_jobs_proto_msgTypes[9].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Empty); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_wire_jobs_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   10,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_wire_jobs_proto_goTypes,
		DependencyIndexes: file_wire_jobs_proto_depIdxs,
		MessageInfos:      file_wire_jobs_proto_msgTypes,
	}.Build()
	File_wire_jobs_proto = out.File
	file_wire_jobs_proto_rawDesc = nil
	file_wire_jobs_proto_goTypes = nil
	file_wire_jobs_proto_depIdxs = nil
}
