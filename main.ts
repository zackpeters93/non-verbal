input.onPinPressed(TouchPin.P0, function () {
    images.iconImage(IconNames.StickFigure).showImage(0)
})
input.onButtonPressed(Button.A, function () {
    images.iconImage(IconNames.Yes).showImage(0)
})
input.onPinPressed(TouchPin.P2, function () {
    images.iconImage(IconNames.SmallDiamond).showImage(0)
})
input.onButtonPressed(Button.B, function () {
    images.iconImage(IconNames.No).showImage(0)
})
input.onPinPressed(TouchPin.P1, function () {
    images.iconImage(IconNames.Meh).showImage(0)
})
basic.showString("Hello!")
basic.forever(function () {
	
})
