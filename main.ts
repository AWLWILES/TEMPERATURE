let HUM = 0
let TEMP = 0
let item = 0
let tm = TM1637.create(
DigitalPin.P1,
DigitalPin.P2,
7,
4
)
basic.forever(function () {
    TEMP = Environment.dht11value(Environment.DHT11Type.DHT11_temperature_C, DigitalPin.P0)
    basic.showNumber(TEMP)
    tm.showNumber(TEMP)
    basic.pause(1000)
    HUM = Environment.dht11value(Environment.DHT11Type.DHT11_humidity, DigitalPin.P0)
    basic.showNumber(HUM)
    tm.showNumber(HUM)
    basic.pause(1000)
})
