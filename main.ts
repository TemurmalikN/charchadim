input.onPinPressed(TouchPin.P0, function () {
    Gr = 2
})
input.onButtonPressed(Button.A, function () {
    a = "1 2 3 4 5 6 7 8 9 10 11 12"
})
input.onPinPressed(TouchPin.P2, function () {
    Gr = 4
})
input.onButtonPressed(Button.AB, function () {
    Gr = 6
})
input.onButtonPressed(Button.B, function () {
    a = "1 2 3 4 5 6 7 8 9 10 11 12 13"
})
input.onPinPressed(TouchPin.P1, function () {
    Gr = 3
})
let selected = 0
let z = 0
let a = ""
let Gr = 0
let group = ["", Gr]
let i = 0
while (a.length != 0) {
    z = a.length
    selected = randint(0, z)
}
