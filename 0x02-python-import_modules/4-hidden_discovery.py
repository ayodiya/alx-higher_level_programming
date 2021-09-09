#!/usr/bin/python3
import hidden_4

myList = dir(hidden_4)

if __name__ == '__main__':
    for name in myList:
        if name[0] != '_':
            print(name)
