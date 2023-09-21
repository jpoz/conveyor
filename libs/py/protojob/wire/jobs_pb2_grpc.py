"""Client and server classes corresponding to protobuf-defined services."""
import grpc
from . import jobs_pb2 as jobs__pb2

class hubStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.Heartbeat = channel.unary_unary('/wire.hub/Heartbeat', request_serializer=jobs__pb2.Ping.SerializeToString, response_deserializer=jobs__pb2.Pong.FromString)
        self.Add = channel.unary_unary('/wire.hub/Add', request_serializer=jobs__pb2.AddRequest.SerializeToString, response_deserializer=jobs__pb2.AddResponse.FromString)
        self.Pop = channel.unary_unary('/wire.hub/Pop', request_serializer=jobs__pb2.PopRequest.SerializeToString, response_deserializer=jobs__pb2.WorkRequest.FromString)
        self.Close = channel.unary_unary('/wire.hub/Close', request_serializer=jobs__pb2.CloseRequest.SerializeToString, response_deserializer=jobs__pb2.CloseResponse.FromString)
        self.Fail = channel.unary_unary('/wire.hub/Fail', request_serializer=jobs__pb2.FailRequest.SerializeToString, response_deserializer=jobs__pb2.FailResponse.FromString)

class hubServicer(object):
    """Missing associated documentation comment in .proto file."""

    def Heartbeat(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def Add(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def Pop(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def Close(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def Fail(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

def add_hubServicer_to_server(servicer, server):
    rpc_method_handlers = {'Heartbeat': grpc.unary_unary_rpc_method_handler(servicer.Heartbeat, request_deserializer=jobs__pb2.Ping.FromString, response_serializer=jobs__pb2.Pong.SerializeToString), 'Add': grpc.unary_unary_rpc_method_handler(servicer.Add, request_deserializer=jobs__pb2.AddRequest.FromString, response_serializer=jobs__pb2.AddResponse.SerializeToString), 'Pop': grpc.unary_unary_rpc_method_handler(servicer.Pop, request_deserializer=jobs__pb2.PopRequest.FromString, response_serializer=jobs__pb2.WorkRequest.SerializeToString), 'Close': grpc.unary_unary_rpc_method_handler(servicer.Close, request_deserializer=jobs__pb2.CloseRequest.FromString, response_serializer=jobs__pb2.CloseResponse.SerializeToString), 'Fail': grpc.unary_unary_rpc_method_handler(servicer.Fail, request_deserializer=jobs__pb2.FailRequest.FromString, response_serializer=jobs__pb2.FailResponse.SerializeToString)}
    generic_handler = grpc.method_handlers_generic_handler('wire.hub', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))

class hub(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def Heartbeat(request, target, options=(), channel_credentials=None, call_credentials=None, insecure=False, compression=None, wait_for_ready=None, timeout=None, metadata=None):
        return grpc.experimental.unary_unary(request, target, '/wire.hub/Heartbeat', jobs__pb2.Ping.SerializeToString, jobs__pb2.Pong.FromString, options, channel_credentials, insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def Add(request, target, options=(), channel_credentials=None, call_credentials=None, insecure=False, compression=None, wait_for_ready=None, timeout=None, metadata=None):
        return grpc.experimental.unary_unary(request, target, '/wire.hub/Add', jobs__pb2.AddRequest.SerializeToString, jobs__pb2.AddResponse.FromString, options, channel_credentials, insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def Pop(request, target, options=(), channel_credentials=None, call_credentials=None, insecure=False, compression=None, wait_for_ready=None, timeout=None, metadata=None):
        return grpc.experimental.unary_unary(request, target, '/wire.hub/Pop', jobs__pb2.PopRequest.SerializeToString, jobs__pb2.WorkRequest.FromString, options, channel_credentials, insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def Close(request, target, options=(), channel_credentials=None, call_credentials=None, insecure=False, compression=None, wait_for_ready=None, timeout=None, metadata=None):
        return grpc.experimental.unary_unary(request, target, '/wire.hub/Close', jobs__pb2.CloseRequest.SerializeToString, jobs__pb2.CloseResponse.FromString, options, channel_credentials, insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def Fail(request, target, options=(), channel_credentials=None, call_credentials=None, insecure=False, compression=None, wait_for_ready=None, timeout=None, metadata=None):
        return grpc.experimental.unary_unary(request, target, '/wire.hub/Fail', jobs__pb2.FailRequest.SerializeToString, jobs__pb2.FailResponse.FromString, options, channel_credentials, insecure, call_credentials, compression, wait_for_ready, timeout, metadata)