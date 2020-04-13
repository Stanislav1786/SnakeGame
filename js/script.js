const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')


canvas.width = 500
canvas.height = 500


const param = {
    x: 10,
    y: 100,
    width: 50,
    height: 50,
    fillColor: "green"
}

drawRect(param)

requestAnimationFrame(loop)

function drawRect(param) {
    context.beginPath()
    context.rect(param.x, param.y, param.width, param.height)
    context.fillStyle = param.fillColor
    context.fill()
}

function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height)
}

function loop(timestamp) {
    requestAnimationFrame(loop)

    clearCanvas()

    drawRect(param)
}