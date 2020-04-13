const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')


canvas.width = 500
canvas.height = 500


const map = createGameMap(5, 5)


getRandomFreeCell(map).food = true
getRandomFreeCell(map).snake = true


requestAnimationFrame(loop)


function loop(timestamp) {
    requestAnimationFrame(loop)

    clearCanvas()


    drawGameMap(map)
}

function drawGameMap(map) {
    for (const cell of map.flat()) {
        const param = {
            x: cell.x * 50,
            y: cell.y * 50,
            width: 50,
            height: 50,
            fillColor: 'yellow'

        }


        drawRect(param)


    }
}