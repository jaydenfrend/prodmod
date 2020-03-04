import sys
import os
a = open('hacks.js', 'r')
owo = ""
for i in a.readlines():
    if "//" in i:
        pass
    else:
        b = i.replace('\n', '')
        #b = b.replace(' ', '')
        owo = owo + b
print(owo)
