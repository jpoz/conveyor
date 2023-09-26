import conveyor
from tasks import MainTask

with conveyor.client() as c:
    task = MainTask(num=5)
    c.enqueue(task)
