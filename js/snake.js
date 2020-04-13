function drawRect(param) {
    context.beginPath()
    context.rect(param.x, param.y, param.width, param.height)
    context.fillStyle = param.fillColor
    context.fill()
}

function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height)
}

function createGameMap(columns, rows) {
    const map = []

    for (let x = 0; x < columns; x++) {
        const row = []

        for (let y = 0; y < rows; y++) {
            row.push({
                x: x,
                y: y,
                snake: false,
                food: false
            })
        }

        map.push(row)

    }

    return map
}

function getRandomFreeCell(map) {
    const freeCells = []

    for (const cell of map.flat()) {
        if (cell.snake || cell.food) {
            continue
        }

        freeCells.push(cell)
    }

    const index = Math.floor(math.random() * freeCells.length)
    return freeCells(index)

}