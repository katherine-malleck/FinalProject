/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Katherine
 * Created on: Jun 2026
 * This program will make it so when you press a button connected to pin 0 it will show happy face
*/

// set pin 0 to 1
pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
basic.forever(function () {
    // if the P0 is connected to ground
    if (pins.digitalReadPin(DigitalPin.P0) == 0) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.clearScreen()
    }
})

