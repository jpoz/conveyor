// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.32.0
// 	protoc        v4.25.3
// source: _examples/helloworld/hello/hello.proto

package hello

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

type HelloJob struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name     string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	Greeting string `protobuf:"bytes,2,opt,name=greeting,proto3" json:"greeting,omitempty"`
}

func (x *HelloJob) Reset() {
	*x = HelloJob{}
	if protoimpl.UnsafeEnabled {
		mi := &file___examples_helloworld_hello_hello_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *HelloJob) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*HelloJob) ProtoMessage() {}

func (x *HelloJob) ProtoReflect() protoreflect.Message {
	mi := &file___examples_helloworld_hello_hello_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use HelloJob.ProtoReflect.Descriptor instead.
func (*HelloJob) Descriptor() ([]byte, []int) {
	return file___examples_helloworld_hello_hello_proto_rawDescGZIP(), []int{0}
}

func (x *HelloJob) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *HelloJob) GetGreeting() string {
	if x != nil {
		return x.Greeting
	}
	return ""
}

var File___examples_helloworld_hello_hello_proto protoreflect.FileDescriptor

var file___examples_helloworld_hello_hello_proto_rawDesc = []byte{
	0x0a, 0x26, 0x5f, 0x65, 0x78, 0x61, 0x6d, 0x70, 0x6c, 0x65, 0x73, 0x2f, 0x68, 0x65, 0x6c, 0x6c,
	0x6f, 0x77, 0x6f, 0x72, 0x6c, 0x64, 0x2f, 0x68, 0x65, 0x6c, 0x6c, 0x6f, 0x2f, 0x68, 0x65, 0x6c,
	0x6c, 0x6f, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0a, 0x68, 0x65, 0x6c, 0x6c, 0x6f, 0x77,
	0x6f, 0x72, 0x6c, 0x64, 0x22, 0x3a, 0x0a, 0x08, 0x48, 0x65, 0x6c, 0x6c, 0x6f, 0x4a, 0x6f, 0x62,
	0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04,
	0x6e, 0x61, 0x6d, 0x65, 0x12, 0x1a, 0x0a, 0x08, 0x67, 0x72, 0x65, 0x65, 0x74, 0x69, 0x6e, 0x67,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x67, 0x72, 0x65, 0x65, 0x74, 0x69, 0x6e, 0x67,
	0x42, 0x34, 0x5a, 0x32, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x6a,
	0x70, 0x6f, 0x7a, 0x2f, 0x63, 0x6f, 0x6e, 0x76, 0x65, 0x79, 0x6f, 0x72, 0x2f, 0x65, 0x78, 0x61,
	0x6d, 0x70, 0x6c, 0x65, 0x73, 0x2f, 0x68, 0x65, 0x6c, 0x6c, 0x6f, 0x77, 0x6f, 0x72, 0x6c, 0x64,
	0x2f, 0x68, 0x65, 0x6c, 0x6c, 0x6f, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file___examples_helloworld_hello_hello_proto_rawDescOnce sync.Once
	file___examples_helloworld_hello_hello_proto_rawDescData = file___examples_helloworld_hello_hello_proto_rawDesc
)

func file___examples_helloworld_hello_hello_proto_rawDescGZIP() []byte {
	file___examples_helloworld_hello_hello_proto_rawDescOnce.Do(func() {
		file___examples_helloworld_hello_hello_proto_rawDescData = protoimpl.X.CompressGZIP(file___examples_helloworld_hello_hello_proto_rawDescData)
	})
	return file___examples_helloworld_hello_hello_proto_rawDescData
}

var file___examples_helloworld_hello_hello_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file___examples_helloworld_hello_hello_proto_goTypes = []interface{}{
	(*HelloJob)(nil), // 0: helloworld.HelloJob
}
var file___examples_helloworld_hello_hello_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file___examples_helloworld_hello_hello_proto_init() }
func file___examples_helloworld_hello_hello_proto_init() {
	if File___examples_helloworld_hello_hello_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file___examples_helloworld_hello_hello_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*HelloJob); i {
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
			RawDescriptor: file___examples_helloworld_hello_hello_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file___examples_helloworld_hello_hello_proto_goTypes,
		DependencyIndexes: file___examples_helloworld_hello_hello_proto_depIdxs,
		MessageInfos:      file___examples_helloworld_hello_hello_proto_msgTypes,
	}.Build()
	File___examples_helloworld_hello_hello_proto = out.File
	file___examples_helloworld_hello_hello_proto_rawDesc = nil
	file___examples_helloworld_hello_hello_proto_goTypes = nil
	file___examples_helloworld_hello_hello_proto_depIdxs = nil
}
