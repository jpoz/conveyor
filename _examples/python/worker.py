import conveyor
from tasks import MainTask

def mainTask(msg: MainTask):
    print('hello')

with conveyor.worker() as w:
    w.register(mainTask)
    w.run()
