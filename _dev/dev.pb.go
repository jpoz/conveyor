// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.32.0
// 	protoc        v4.25.3
// source: _dev/dev.proto

package main

import (
	reflect "reflect"
	sync "sync"

	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type Start struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Spawn   int32  `protobuf:"varint,1,opt,name=spawn,proto3" json:"spawn,omitempty"`
	Levels  int32  `protobuf:"varint,2,opt,name=levels,proto3" json:"levels,omitempty"`
	Message string `protobuf:"bytes,3,opt,name=message,proto3" json:"message,omitempty"`
}

func (x *Start) Reset() {
	*x = Start{}
	if protoimpl.UnsafeEnabled {
		mi := &file___dev_dev_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Start) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Start) ProtoMessage() {}

func (x *Start) ProtoReflect() protoreflect.Message {
	mi := &file___dev_dev_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Start.ProtoReflect.Descriptor instead.
func (*Start) Descriptor() ([]byte, []int) {
	return file___dev_dev_proto_rawDescGZIP(), []int{0}
}

func (x *Start) GetSpawn() int32 {
	if x != nil {
		return x.Spawn
	}
	return 0
}

func (x *Start) GetLevels() int32 {
	if x != nil {
		return x.Levels
	}
	return 0
}

func (x *Start) GetMessage() string {
	if x != nil {
		return x.Message
	}
	return ""
}

type Child struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Level   int32  `protobuf:"varint,1,opt,name=level,proto3" json:"level,omitempty"`
	Count   int32  `protobuf:"varint,2,opt,name=count,proto3" json:"count,omitempty"`
	Spawn   int32  `protobuf:"varint,3,opt,name=spawn,proto3" json:"spawn,omitempty"`
	Levels  int32  `protobuf:"varint,4,opt,name=levels,proto3" json:"levels,omitempty"`
	Message string `protobuf:"bytes,5,opt,name=message,proto3" json:"message,omitempty"`
}

func (x *Child) Reset() {
	*x = Child{}
	if protoimpl.UnsafeEnabled {
		mi := &file___dev_dev_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Child) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Child) ProtoMessage() {}

func (x *Child) ProtoReflect() protoreflect.Message {
	mi := &file___dev_dev_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Child.ProtoReflect.Descriptor instead.
func (*Child) Descriptor() ([]byte, []int) {
	return file___dev_dev_proto_rawDescGZIP(), []int{1}
}

func (x *Child) GetLevel() int32 {
	if x != nil {
		return x.Level
	}
	return 0
}

func (x *Child) GetCount() int32 {
	if x != nil {
		return x.Count
	}
	return 0
}

func (x *Child) GetSpawn() int32 {
	if x != nil {
		return x.Spawn
	}
	return 0
}

func (x *Child) GetLevels() int32 {
	if x != nil {
		return x.Levels
	}
	return 0
}

func (x *Child) GetMessage() string {
	if x != nil {
		return x.Message
	}
	return ""
}

type Last struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Level   int32  `protobuf:"varint,1,opt,name=level,proto3" json:"level,omitempty"`
	Count   int32  `protobuf:"varint,2,opt,name=count,proto3" json:"count,omitempty"`
	Message string `protobuf:"bytes,3,opt,name=message,proto3" json:"message,omitempty"`
}

func (x *Last) Reset() {
	*x = Last{}
	if protoimpl.UnsafeEnabled {
		mi := &file___dev_dev_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Last) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Last) ProtoMessage() {}

func (x *Last) ProtoReflect() protoreflect.Message {
	mi := &file___dev_dev_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Last.ProtoReflect.Descriptor instead.
func (*Last) Descriptor() ([]byte, []int) {
	return file___dev_dev_proto_rawDescGZIP(), []int{2}
}

func (x *Last) GetLevel() int32 {
	if x != nil {
		return x.Level
	}
	return 0
}

func (x *Last) GetCount() int32 {
	if x != nil {
		return x.Count
	}
	return 0
}

func (x *Last) GetMessage() string {
	if x != nil {
		return x.Message
	}
	return ""
}

var File___dev_dev_proto protoreflect.FileDescriptor

var file___dev_dev_proto_rawDesc = []byte{
	0x0a, 0x0e, 0x5f, 0x64, 0x65, 0x76, 0x2f, 0x64, 0x65, 0x76, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x12, 0x04, 0x6d, 0x61, 0x69, 0x6e, 0x22, 0x4f, 0x0a, 0x05, 0x53, 0x74, 0x61, 0x72, 0x74, 0x12,
	0x14, 0x0a, 0x05, 0x73, 0x70, 0x61, 0x77, 0x6e, 0x18, 0x01, 0x20, 0x01, 0x28, 0x05, 0x52, 0x05,
	0x73, 0x70, 0x61, 0x77, 0x6e, 0x12, 0x16, 0x0a, 0x06, 0x6c, 0x65, 0x76, 0x65, 0x6c, 0x73, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x05, 0x52, 0x06, 0x6c, 0x65, 0x76, 0x65, 0x6c, 0x73, 0x12, 0x18, 0x0a,
	0x07, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07,
	0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x22, 0x7b, 0x0a, 0x05, 0x43, 0x68, 0x69, 0x6c, 0x64,
	0x12, 0x14, 0x0a, 0x05, 0x6c, 0x65, 0x76, 0x65, 0x6c, 0x18, 0x01, 0x20, 0x01, 0x28, 0x05, 0x52,
	0x05, 0x6c, 0x65, 0x76, 0x65, 0x6c, 0x12, 0x14, 0x0a, 0x05, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x05, 0x52, 0x05, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x12, 0x14, 0x0a, 0x05,
	0x73, 0x70, 0x61, 0x77, 0x6e, 0x18, 0x03, 0x20, 0x01, 0x28, 0x05, 0x52, 0x05, 0x73, 0x70, 0x61,
	0x77, 0x6e, 0x12, 0x16, 0x0a, 0x06, 0x6c, 0x65, 0x76, 0x65, 0x6c, 0x73, 0x18, 0x04, 0x20, 0x01,
	0x28, 0x05, 0x52, 0x06, 0x6c, 0x65, 0x76, 0x65, 0x6c, 0x73, 0x12, 0x18, 0x0a, 0x07, 0x6d, 0x65,
	0x73, 0x73, 0x61, 0x67, 0x65, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x6d, 0x65, 0x73,
	0x73, 0x61, 0x67, 0x65, 0x22, 0x4c, 0x0a, 0x04, 0x4c, 0x61, 0x73, 0x74, 0x12, 0x14, 0x0a, 0x05,
	0x6c, 0x65, 0x76, 0x65, 0x6c, 0x18, 0x01, 0x20, 0x01, 0x28, 0x05, 0x52, 0x05, 0x6c, 0x65, 0x76,
	0x65, 0x6c, 0x12, 0x14, 0x0a, 0x05, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x05, 0x52, 0x05, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x12, 0x18, 0x0a, 0x07, 0x6d, 0x65, 0x73, 0x73,
	0x61, 0x67, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x6d, 0x65, 0x73, 0x73, 0x61,
	0x67, 0x65, 0x42, 0x24, 0x5a, 0x22, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d,
	0x2f, 0x6a, 0x70, 0x6f, 0x7a, 0x2f, 0x63, 0x6f, 0x6e, 0x76, 0x65, 0x79, 0x6f, 0x72, 0x2f, 0x5f,
	0x64, 0x65, 0x76, 0x2f, 0x6d, 0x61, 0x69, 0x6e, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file___dev_dev_proto_rawDescOnce sync.Once
	file___dev_dev_proto_rawDescData = file___dev_dev_proto_rawDesc
)

func file___dev_dev_proto_rawDescGZIP() []byte {
	file___dev_dev_proto_rawDescOnce.Do(func() {
		file___dev_dev_proto_rawDescData = protoimpl.X.CompressGZIP(file___dev_dev_proto_rawDescData)
	})
	return file___dev_dev_proto_rawDescData
}

var file___dev_dev_proto_msgTypes = make([]protoimpl.MessageInfo, 3)
var file___dev_dev_proto_goTypes = []interface{}{
	(*Start)(nil), // 0: main.Start
	(*Child)(nil), // 1: main.Child
	(*Last)(nil),  // 2: main.Last
}
var file___dev_dev_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file___dev_dev_proto_init() }
func file___dev_dev_proto_init() {
	if File___dev_dev_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file___dev_dev_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Start); i {
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
		file___dev_dev_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Child); i {
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
		file___dev_dev_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Last); i {
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
			RawDescriptor: file___dev_dev_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   3,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file___dev_dev_proto_goTypes,
		DependencyIndexes: file___dev_dev_proto_depIdxs,
		MessageInfos:      file___dev_dev_proto_msgTypes,
	}.Build()
	File___dev_dev_proto = out.File
	file___dev_dev_proto_rawDesc = nil
	file___dev_dev_proto_goTypes = nil
	file___dev_dev_proto_depIdxs = nil
}
