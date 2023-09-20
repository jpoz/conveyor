from contextlib import contextmanager

from .connection import Connection

@contextmanager
def connection(*args, **kwargs):
    c = Connection(*args, **kwargs)
    yield c
    c.disconnect()
