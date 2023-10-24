/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Sophie
 * Created on: Oct 2023
 * This program generates 2 random numbers and shows them
*/

basic.clearScreen()
basic.showIcon(IconNames.Skull)

// variables
const firstNumber: number = randint(0, 99)
const secondNumber: number = randint(0, 99)

// show 1st number
input.onButtonPressed(Button.A, function () {
  basic.clearScreen()
  basic.showString('1 : ' + firstNumber.toString())
  pause(1000)
  basic.showIcon(IconNames.Ghost)
})

// show 2nd number
input.onButtonPressed(Button.B, function () {
  basic.clearScreen()
  basic.showString('2 : ' + secondNumber.toString())
  pause(1000)
  basic.showIcon(IconNames.Ghost)
})

// compare both numbers
input.onGesture(Gesture.Shake, function () {
  basic.clearScreen()

  if (firstNumber < secondNumber) {
    basic.showString(firstNumber.toString() + '<' + secondNumber.toString())
  } else {
    basic.showString(firstNumber.toString() + '>' + secondNumber.toString())
  }

  basic.pause(1000)
  basic.showIcon(IconNames.Ghost)
})
