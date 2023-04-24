OLED.init(128, 64)
let LIGHT = SmartCity.read_light_sensor(AnalogPin.P0)
OLED.clear()
OLED.drawLoading(0)
basic.pause(500)
OLED.clear()
OLED.drawLoading(50)
basic.pause(500)
OLED.clear()
OLED.drawLoading(100)
basic.forever(function () {
    LIGHT = SmartCity.read_light_sensor(AnalogPin.P0)
    OLED.clear()
    if (LIGHT == 85 || LIGHT > 85) {
        OLED.writeStringNewLine("great evening isn't it?")
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
    } else if (LIGHT == 60 || LIGHT > 60) {
        OLED.writeStringNewLine("good morning!")
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
    } else if (LIGHT == 0 || LIGHT > 0) {
        OLED.writeStringNewLine("good night!")
        basic.showLeds(`
            . # # # .
            # # # . .
            # # . . .
            # # # . .
            . # # # .
            `)
    } else {
    	
    }
    basic.pause(1500)
})
