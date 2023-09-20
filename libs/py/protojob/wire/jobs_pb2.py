"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
_sym_db = _symbol_database.Default()
from google.protobuf import timestamp_pb2 as google_dot_protobuf_dot_timestamp__pb2
DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\njobs.proto\x12\x04wire\x1a\x1fgoogle/protobuf/timestamp.proto"\x86\x02\n\x03Job\x12\x0c\n\x04uuid\x18\x01 \x01(\t\x12\x0c\n\x04type\x18\x02 \x01(\t\x12\r\n\x05queue\x18\x03 \x01(\t\x12\x0f\n\x07payload\x18\x04 \x01(\x0c\x12*\n\x06run_at\x18\x05 \x01(\x0b2\x1a.google.protobuf.Timestamp\x12\x13\n\x0bparent_uuid\x18\x06 \x01(\t\x12\x18\n\x10predecessor_uuid\x18\x07 \x01(\t\x12.\n\nstarted_at\x18\x08 \x01(\x0b2\x1a.google.protobuf.Timestamp\x12\r\n\x05retry\x18\t \x01(\x05\x12\x13\n\x0bmax_retries\x18\n \x01(\x05\x12\x14\n\x0clast_failure\x18\x0b \x01(\t"i\n\nAddRequest\x12\x0c\n\x04type\x18\x01 \x01(\t\x12\x0f\n\x07payload\x18\x02 \x01(\x0c\x12\r\n\x05queue\x18\x03 \x01(\t\x12\x13\n\x0bparent_uuid\x18\x04 \x01(\t\x12\x18\n\x10predecessor_uuid\x18\x05 \x01(\t"G\n\x0bAddResponse\x12\x0f\n\x07success\x18\x01 \x01(\x08\x12\x0f\n\x07message\x18\x02 \x01(\t\x12\x16\n\x03job\x18\x03 \x01(\x0b2\t.wire.Job"\x1c\n\nPopRequest\x12\x0e\n\x06queues\x18\x01 \x03(\t"%\n\x0bWorkRequest\x12\x16\n\x03job\x18\x01 \x01(\x0b2\t.wire.Job"&\n\x0cCloseRequest\x12\x16\n\x03job\x18\x01 \x01(\x0b2\t.wire.Job"\x1f\n\rCloseResponse\x12\x0e\n\x06closed\x18\x01 \x01(\x08",\n\x0bFailRequest\x12\x0c\n\x04uuid\x18\x01 \x01(\t\x12\x0f\n\x07message\x18\x02 \x01(\t"\x0e\n\x0cFailResponse2\xbe\x01\n\x03hub\x12*\n\x03Add\x12\x10.wire.AddRequest\x1a\x11.wire.AddResponse\x12*\n\x03Pop\x12\x10.wire.PopRequest\x1a\x11.wire.WorkRequest\x120\n\x05Close\x12\x12.wire.CloseRequest\x1a\x13.wire.CloseResponse\x12-\n\x04Fail\x12\x11.wire.FailRequest\x1a\x12.wire.FailResponseB\x1fZ\x1dgithub.com/jpoz/protojob/wireb\x06proto3')
_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'jobs_pb2', _globals)
if _descriptor._USE_C_DESCRIPTORS == False:
    DESCRIPTOR._options = None
    DESCRIPTOR._serialized_options = b'Z\x1dgithub.com/jpoz/protojob/wire'
    _globals['_JOB']._serialized_start = 54
    _globals['_JOB']._serialized_end = 316
    _globals['_ADDREQUEST']._serialized_start = 318
    _globals['_ADDREQUEST']._serialized_end = 423
    _globals['_ADDRESPONSE']._serialized_start = 425
    _globals['_ADDRESPONSE']._serialized_end = 496
    _globals['_POPREQUEST']._serialized_start = 498
    _globals['_POPREQUEST']._serialized_end = 526
    _globals['_WORKREQUEST']._serialized_start = 528
    _globals['_WORKREQUEST']._serialized_end = 565
    _globals['_CLOSEREQUEST']._serialized_start = 567
    _globals['_CLOSEREQUEST']._serialized_end = 605
    _globals['_CLOSERESPONSE']._serialized_start = 607
    _globals['_CLOSERESPONSE']._serialized_end = 638
    _globals['_FAILREQUEST']._serialized_start = 640
    _globals['_FAILREQUEST']._serialized_end = 684
    _globals['_FAILRESPONSE']._serialized_start = 686
    _globals['_FAILRESPONSE']._serialized_end = 700
    _globals['_HUB']._serialized_start = 703
    _globals['_HUB']._serialized_end = 893