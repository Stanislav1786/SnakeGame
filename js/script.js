const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')


canvas.width = 500
canvas.height = 500


drawRect({
    x: 10,
    y: 10,
    width: 50,
    height: 50,
    fillColor: "green"
})

function drawRect(param) {
    context.beginPath()
    context.rect(param.x, param.y, param.width, param.height)
    context.fillStyle = param.fillColor
    context.fill()
}