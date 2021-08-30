import datetime
from pynput.keyboard import Listener

def key_recorder(key):
    print(key)

with Listener(on_press=key_recorder) as l:
    l.join()