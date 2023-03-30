input.onButtonPressed(Button.A, function () {
    életkor += 1
})
input.onButtonPressed(Button.B, function () {
    életkor = életkor - 1
})
let életkor = 0
music.playMelody("C D E F G A B C5 ", 120)
életkor = 16
basic.forever(function () {
    basic.showString("Adam")
    basic.showString("" + (életkor))
})
