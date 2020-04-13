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



function loop(timestamp) {
    requestAnimationFrame(loop)

    clearCanvas()

    drawRect(param)
}