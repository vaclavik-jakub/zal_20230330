// Nastavení pinu 
pins.setPull(DigitalPin.P2, PinPullMode.PullNone)
pins.setPull(DigitalPin.P12, PinPullMode.PullNone)

const centerP: DigitalPin = DigitalPin.P12 


pins.digitalReadPin(DigitalPin.P12)

// Deklarace proměnných

let center: number = 0 //let center: boolean = false

let p1 = 0
let p2 = 0

basic.forever(function () {

    input.onButtonPressed(Button.A, function() {
        for (let a = 0; a <= 10; a++) {
            music.playMelody("", 120)
                if (center == 1) {

                } else {
                    
                }

            console.log(a)
        }
    })
       
    basic.pause(10)
})
