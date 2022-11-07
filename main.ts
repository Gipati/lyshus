basic.forever(function () {
    if (tinkercademy.PIR(DigitalPin.P0)) {
        tinkercademy.LED(DigitalPin.P1, OnOff.On)
        tinkercademy.LED(DigitalPin.P2, OnOff.On)
        basic.pause(5000)
        tinkercademy.LED(DigitalPin.P1, OnOff.Off)
        tinkercademy.LED(DigitalPin.P2, OnOff.Off)
    }
})
