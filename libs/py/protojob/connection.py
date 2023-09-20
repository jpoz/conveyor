import grpc
from .wire import hubStub
from typing import Optional

class Connection:
    def __init__(
            self,
            hub_url: Optional[str] = None
    ):
        if hub_url is None:
            hub_url = 'localhost:8080'
        self.channel = grpc.insecure_channel(hub_url)
        self.stub = hubStub(self.channel)

    def disconnect(self):
        self.channel.close()
