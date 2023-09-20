from .connection import Connection
from .wire import AddRequest
from google.protobuf.message import Message
from typing import Callable

class Client:
    is_connected = False

    def __init__(self, hub_url=None, connection=None, **kwargs):
        self.conn = connection or Connection(hub_url, **kwargs)
        self.is_connected = True

    def __enter__(self):
        return self

    def __exit__(self):
        self.disconnect()

    def register(self, fn: Callable):
        pass

    def enqueue(self, msg: Message):
        serialized_msg = msg.SerializeToString()
        msg_type = msg.DESCRIPTOR.full_name

        request = AddRequest(
            type=msg_type,
            queue=msg_type,
            payload=serialized_msg
        )

        print(request)

        return self.conn.stub.Add(request)

    def disconnect(self):
        self.conn.disconnect()
        self.is_connected = False

