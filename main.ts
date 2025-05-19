input.onButtonPressed(Button.A, function () {
    TOCAR = 0
    for (let índice = 0; índice <= 4; índice++) {
        led.plot(índice, 0)
    }
    basic.pause(500)
    for (let índice = 0; índice <= 4; índice++) {
        led.plot(índice, 1)
    }
    basic.pause(500)
    for (let índice = 0; índice <= 4; índice++) {
        led.plot(índice, 2)
    }
    basic.pause(500)
    for (let índice = 0; índice <= 4; índice++) {
        led.plot(índice, 3)
    }
    basic.pause(500)
    for (let índice = 0; índice <= 4; índice++) {
        led.plot(índice, 4)
    }
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onPinPressed(TouchPin.P2, function () {
    if (TOCAR == 0) {
        TOCAR += 1
        basic.showLeds(`
            # # . # #
            # # . . #
            # . . # #
            # . . # .
            # . . # #
            `)
        basic.pause(500)
        basic.clearScreen()
    }
})
input.onPinPressed(TouchPin.P1, function () {
    if (TOCAR == 0) {
        TOCAR += 1
        basic.showLeds(`
            # # . . #
            # # . # #
            # . . . #
            # . . . #
            # . . . #
            `)
        basic.pause(500)
        basic.clearScreen()
    }
})
let TOCAR = 0
TOCAR = 0
