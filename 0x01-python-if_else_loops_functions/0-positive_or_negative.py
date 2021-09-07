#!/usr/bin/python3
import random
number = random.randint(-10, 10)
if number > 0:
    print('{} is a postive number'.format(number))
elif(number == 0):
    print('{} is Zero'.format(number))
else:
    print('{} is negative'.format(number))
