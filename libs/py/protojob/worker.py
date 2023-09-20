import signal
import inspect
from google.protobuf.json_format import MessageToJson
from typing import Callable

from .wire import Job, PopRequest, CloseRequest
from .connection import Connection

class Worker:
    queues = []
    funcMap = {}

    def __init__(self, hub_url=None, connection=None, **kwargs):
        signal.signal(signal.SIGTERM, self.handle_sigterm)
        self.conn = connection or Connection(hub_url, **kwargs)

    def register(self, fn: Callable, **kwargs):
        sig = inspect.signature(fn)
        msg_type = sig.parameters['msg'].annotation
        instance = msg_type()
        ## TODO allow setting queue
        queue = instance.DESCRIPTOR.full_name

        self.queues.append(queue)
        self.funcMap[queue] = {
            'fn': fn,
            'type': msg_type
        }

    def handle_sigterm(self, _signum, _frame):
        raise KeyboardInterrupt

    def run(self):
        popRequest = PopRequest(
            queues=self.queues
        )
        while True:
            try:
                work_request = self.conn.stub.Pop(popRequest)
                if work_request is None or work_request.job is None or work_request.job.type is '':
                    continue

                job = work_request.job
                queue = job.queue
                desc = self.funcMap[queue]
                if desc is None:
                    print(f'No handler for {queue}')
                    continue

                msg = desc['type']()
                msg.ParseFromString(job.payload)
                fn = desc['fn']

                try:
                    fn(msg)
                    self.close(job)
                except Exception as e:
                    print(e)

            except KeyboardInterrupt as _e:
                print('Shutting down...')
                self.disconnect()
                break
            except Exception as e:
                print(e)

    def close(self, job: Job):
        self.conn.stub.Close(CloseRequest(job=job))

    def disconnect(self):
        self.conn.disconnect()
