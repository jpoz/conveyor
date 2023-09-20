from contextlib import contextmanager

from .connection import Connection
from .client import Client
from .worker import Worker

@contextmanager
def connection(*args, **kwargs):
    c = Connection(*args, **kwargs)
    yield c
    c.disconnect()


@contextmanager
def client(*args, **kwargs):
    c = Client(*args, **kwargs)
    yield c
    c.disconnect()

@contextmanager
def worker(*args, **kwargs):
    w = Worker(*args, **kwargs)
    yield w
    w.disconnect()
