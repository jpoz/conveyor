import protojob
from tasks import MainTask

def mainTask(msg: MainTask):
    print('hello')

with protojob.worker() as w:
    w.register(mainTask)
    w.run()
