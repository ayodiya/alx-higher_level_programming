#!/usr/bin/python3
import random
number = random.randint(-10000, 10000)

new_number =  str(number)

if(int(new_number[-1]) > 5 ):
    print('Last digit of {} is {} and is greater than 5\n'.format( number, new_number[-1]))
elif(int(new_number[-1])  == 0):
    print('Last digit of {} is {} and is 0\n'.format( number, new_number[-1]))
elif(int(new_number[-1])  < 6 and new_number != 0):
    print('Last digit of {} is {} and is less than 6 and not 0\n'.format( number, new_number[-1]))
