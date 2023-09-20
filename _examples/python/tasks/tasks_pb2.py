"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
_sym_db = _symbol_database.Default()
DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x0btasks.proto\x12\x05tasks"\x17\n\x08MainTask\x12\x0b\n\x03num\x18\x01 \x01(\x05"\x18\n\tChildTask\x12\x0b\n\x03num\x18\x01 \x01(\x05"\x1d\n\x0eOnCompleteTask\x12\x0b\n\x03num\x18\x01 \x01(\x05b\x06proto3')
_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'tasks_pb2', _globals)
if _descriptor._USE_C_DESCRIPTORS == False:
    DESCRIPTOR._options = None
    _globals['_MAINTASK']._serialized_start = 22
    _globals['_MAINTASK']._serialized_end = 45
    _globals['_CHILDTASK']._serialized_start = 47
    _globals['_CHILDTASK']._serialized_end = 71
    _globals['_ONCOMPLETETASK']._serialized_start = 73
    _globals['_ONCOMPLETETASK']._serialized_end = 102