let degree = 0
input.onButtonPressed(Button.A, function () {
    degree = input.compassHeading()
    if (degree == 0) {
        basic.showString("N")
        music.playMelody("C5 B A G F E D C ", 120)
    }
    if (degree == 90) {
        basic.showString("E")
        music.playMelody("C D E F G A B C5 ", 120)
    }
    if (degree == 180) {
        basic.showString("S")
        music.playMelody("G B B G F E D C ", 120)
    }
    if (degree == 270) {
        basic.showString("W")
        music.playMelody("A C5 C C5 D G D A ", 120)
    }
})
input.onButtonPressed(Button.B, function () {
    degree = input.compassHeading()
    if (degree == 45) {
        basic.showString("NE")
        music.playMelody("C5 B A G F E D C ", 120)
    }
    if (degree == 135) {
        basic.showString("SE")
        music.playMelody("C5 B A G F E D C ", 120)
    }
    if (degree == 225) {
        basic.showString("SW")
        music.playMelody("C5 B A G F E D C ", 120)
    }
    if (degree == 315) {
        basic.showString("NW")
        music.playMelody("C5 B A G F E D C ", 120)
    }
})
basic.forever(function () {
	
})
