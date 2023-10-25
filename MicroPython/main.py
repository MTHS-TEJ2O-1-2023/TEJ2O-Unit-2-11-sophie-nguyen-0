"""
Created by: sophie
Created on: Oct 2023
This module is a Micro:bit MicroPython program generates 2 random numbers and shows them
"""

from microbit import *
from random import *


display.clear
display.show(Image.SKULL)
sleep(1000)

# variables
first_number = randint(0, 99)
second_number = randint(0, 99)

while True:
    # show first number
    if button_a.is_pressed():
        display.clear
        display.scroll("1 : " + str(first_number))
        sleep(1000)
        display.show(Image.GHOST)

    # show 2nd number
    if button_b.is_pressed():
        display.clear
        display.scroll("2 : " + str(second_number))
        sleep(1000)
        display.show(Image.GHOST)

    # compare both numbers
    if accelerometer.was_gesture("shake"):
        display.clear
        if first_number > second_number:
            display.scroll(str(first_number) + ">" + str(second_number))
        else:
            display.scroll(str(first_number) + "<" + str(second_number))
        sleep(1000)
        display.show(Image.GHOST)
