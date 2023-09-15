// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.31.0
// 	protoc        v4.24.3
// source: examples/chain/job/job.proto

package job

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type MainJob struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Spawn  int32 `protobuf:"varint,1,opt,name=spawn,proto3" json:"spawn,omitempty"`
	Levels int32 `protobuf:"varint,2,opt,name=levels,proto3" json:"levels,omitempty"`
}

func (x *MainJob) Reset() {
	*x = MainJob{}
	if protoimpl.UnsafeEnabled {
		mi := &file_examples_chain_job_job_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *MainJob) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*MainJob) ProtoMessage() {}

func (x *MainJob) ProtoReflect() protoreflect.Message {
	mi := &file_examples_chain_job_job_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use MainJob.ProtoReflect.Descriptor instead.
func (*MainJob) Descriptor() ([]byte, []int) {
	return file_examples_chain_job_job_proto_rawDescGZIP(), []int{0}
}

func (x *MainJob) GetSpawn() int32 {
	if x != nil {
		return x.Spawn
	}
	return 0
}

func (x *MainJob) GetLevels() int32 {
	if x != nil {
		return x.Levels
	}
	return 0
}

type SubJob struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Level  int32 `protobuf:"varint,1,opt,name=level,proto3" json:"level,omitempty"`
	Count  int32 `protobuf:"varint,2,opt,name=count,proto3" json:"count,omitempty"`
	Spawn  int32 `protobuf:"varint,3,opt,name=spawn,proto3" json:"spawn,omitempty"`
	Levels int32 `protobuf:"varint,4,opt,name=levels,proto3" json:"levels,omitempty"`
}

func (x *SubJob) Reset() {
	*x = SubJob{}
	if protoimpl.UnsafeEnabled {
		mi := &file_examples_chain_job_job_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SubJob) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SubJob) ProtoMessage() {}

func (x *SubJob) ProtoReflect() protoreflect.Message {
	mi := &file_examples_chain_job_job_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SubJob.ProtoReflect.Descriptor instead.
func (*SubJob) Descriptor() ([]byte, []int) {
	return file_examples_chain_job_job_proto_rawDescGZIP(), []int{1}
}

func (x *SubJob) GetLevel() int32 {
	if x != nil {
		return x.Level
	}
	return 0
}

func (x *SubJob) GetCount() int32 {
	if x != nil {
		return x.Count
	}
	return 0
}

func (x *SubJob) GetSpawn() int32 {
	if x != nil {
		return x.Spawn
	}
	return 0
}

func (x *SubJob) GetLevels() int32 {
	if x != nil {
		return x.Levels
	}
	return 0
}

type LastJob struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Level int32 `protobuf:"varint,1,opt,name=level,proto3" json:"level,omitempty"`
	Count int32 `protobuf:"varint,2,opt,name=count,proto3" json:"count,omitempty"`
}

func (x *LastJob) Reset() {
	*x = LastJob{}
	if protoimpl.UnsafeEnabled {
		mi := &file_examples_chain_job_job_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *LastJob) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*LastJob) ProtoMessage() {}

func (x *LastJob) ProtoReflect() protoreflect.Message {
	mi := &file_examples_chain_job_job_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use LastJob.ProtoReflect.Descriptor instead.
func (*LastJob) Descriptor() ([]byte, []int) {
	return file_examples_chain_job_job_proto_rawDescGZIP(), []int{2}
}

func (x *LastJob) GetLevel() int32 {
	if x != nil {
		return x.Level
	}
	return 0
}

func (x *LastJob) GetCount() int32 {
	if x != nil {
		return x.Count
	}
	return 0
}

var File_examples_chain_job_job_proto protoreflect.FileDescriptor

var file_examples_chain_job_job_proto_rawDesc = []byte{
	0x0a, 0x1c, 0x65, 0x78, 0x61, 0x6d, 0x70, 0x6c, 0x65, 0x73, 0x2f, 0x63, 0x68, 0x61, 0x69, 0x6e,
	0x2f, 0x6a, 0x6f, 0x62, 0x2f, 0x6a, 0x6f, 0x62, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x03,
	0x6a, 0x6f, 0x62, 0x22, 0x37, 0x0a, 0x07, 0x4d, 0x61, 0x69, 0x6e, 0x4a, 0x6f, 0x62, 0x12, 0x14,
	0x0a, 0x05, 0x73, 0x70, 0x61, 0x77, 0x6e, 0x18, 0x01, 0x20, 0x01, 0x28, 0x05, 0x52, 0x05, 0x73,
	0x70, 0x61, 0x77, 0x6e, 0x12, 0x16, 0x0a, 0x06, 0x6c, 0x65, 0x76, 0x65, 0x6c, 0x73, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x05, 0x52, 0x06, 0x6c, 0x65, 0x76, 0x65, 0x6c, 0x73, 0x22, 0x62, 0x0a, 0x06,
	0x53, 0x75, 0x62, 0x4a, 0x6f, 0x62, 0x12, 0x14, 0x0a, 0x05, 0x6c, 0x65, 0x76, 0x65, 0x6c, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x05, 0x52, 0x05, 0x6c, 0x65, 0x76, 0x65, 0x6c, 0x12, 0x14, 0x0a, 0x05,
	0x63, 0x6f, 0x75, 0x6e, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x05, 0x52, 0x05, 0x63, 0x6f, 0x75,
	0x6e, 0x74, 0x12, 0x14, 0x0a, 0x05, 0x73, 0x70, 0x61, 0x77, 0x6e, 0x18, 0x03, 0x20, 0x01, 0x28,
	0x05, 0x52, 0x05, 0x73, 0x70, 0x61, 0x77, 0x6e, 0x12, 0x16, 0x0a, 0x06, 0x6c, 0x65, 0x76, 0x65,
	0x6c, 0x73, 0x18, 0x04, 0x20, 0x01, 0x28, 0x05, 0x52, 0x06, 0x6c, 0x65, 0x76, 0x65, 0x6c, 0x73,
	0x22, 0x35, 0x0a, 0x07, 0x4c, 0x61, 0x73, 0x74, 0x4a, 0x6f, 0x62, 0x12, 0x14, 0x0a, 0x05, 0x6c,
	0x65, 0x76, 0x65, 0x6c, 0x18, 0x01, 0x20, 0x01, 0x28, 0x05, 0x52, 0x05, 0x6c, 0x65, 0x76, 0x65,
	0x6c, 0x12, 0x14, 0x0a, 0x05, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x05,
	0x52, 0x05, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x42, 0x2d, 0x5a, 0x2b, 0x67, 0x69, 0x74, 0x68, 0x75,
	0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x6a, 0x70, 0x6f, 0x7a, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x6a, 0x6f, 0x62, 0x2f, 0x65, 0x78, 0x61, 0x6d, 0x70, 0x6c, 0x65, 0x73, 0x2f, 0x63, 0x68, 0x61,
	0x69, 0x6e, 0x2f, 0x6a, 0x6f, 0x62, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_examples_chain_job_job_proto_rawDescOnce sync.Once
	file_examples_chain_job_job_proto_rawDescData = file_examples_chain_job_job_proto_rawDesc
)

func file_examples_chain_job_job_proto_rawDescGZIP() []byte {
	file_examples_chain_job_job_proto_rawDescOnce.Do(func() {
		file_examples_chain_job_job_proto_rawDescData = protoimpl.X.CompressGZIP(file_examples_chain_job_job_proto_rawDescData)
	})
	return file_examples_chain_job_job_proto_rawDescData
}

var file_examples_chain_job_job_proto_msgTypes = make([]protoimpl.MessageInfo, 3)
var file_examples_chain_job_job_proto_goTypes = []interface{}{
	(*MainJob)(nil), // 0: job.MainJob
	(*SubJob)(nil),  // 1: job.SubJob
	(*LastJob)(nil), // 2: job.LastJob
}
var file_examples_chain_job_job_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_examples_chain_job_job_proto_init() }
func file_examples_chain_job_job_proto_init() {
	if File_examples_chain_job_job_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_examples_chain_job_job_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*MainJob); i {
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
		file_examples_chain_job_job_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SubJob); i {
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
		file_examples_chain_job_job_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*LastJob); i {
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
			RawDescriptor: file_examples_chain_job_job_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   3,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_examples_chain_job_job_proto_goTypes,
		DependencyIndexes: file_examples_chain_job_job_proto_depIdxs,
		MessageInfos:      file_examples_chain_job_job_proto_msgTypes,
	}.Build()
	File_examples_chain_job_job_proto = out.File
	file_examples_chain_job_job_proto_rawDesc = nil
	file_examples_chain_job_job_proto_goTypes = nil
	file_examples_chain_job_job_proto_depIdxs = nil
}
