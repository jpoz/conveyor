import protojob
from tasks import MainTask

with protojob.client() as c:
    task = MainTask(num=5)
    c.enqueue(task)
