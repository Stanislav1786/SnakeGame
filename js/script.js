const ROWS = 10
const COLUMNS = 10
const COOLDOWN = 250

const CELL_SIZE = 50
const CELL_MARGIN = 3
const GAME_PADDING = 10

const FOOD_COLOR = 'green'
const SNAKE_COLOR = 'gray'
const FREE_COLOR = 'rgb(240, 240, 240)'

const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')


canvas.width = CELL_SIZE * COLUMNS + (COLUMNS - 1) * CELL_MARGIN + 2 * GAME_PADDING
canvas.height = CELL_SIZE * ROWS + (ROWS - 1) * CELL_MARGIN + 2 * GAME_PADDING


const map = createGameMap(COLUMNS, ROWS)


getRandomFreeCell(map).food = true


const snake = [getRandomFreeCell(map)]
snake[0].snake = true

let snakeDirect = 'top'


requestAnimationFrame(loop)

let prevTick = 0


function loop(timestamp) {
    requestAnimationFrame(loop)

    clearCanvas()

    if (prevTick + COOLDOWN <= timestamp) {
        moveSnake()
        prevTick = timestamp

    }

    
    drawGameMap(map)
}

function drawGameMap(map) {
    for (const cell of map.flat()) {
        const param = {
            x: GAME_PADDING + cell.x * (CELL_SIZE + CELL_MARGIN),
            y: GAME_PADDING + cell.y * (CELL_SIZE + CELL_MARGIN),
            width: CELL_SIZE,
            height: CELL_SIZE,
            fillColor: FREE_COLOR

        }

        if (cell.food) {
            param.fillColor = FOOD_COLOR
        }

        if (cell.snake) {
            param.fillColor = SNAKE_COLOR
        }


        drawRect(param)

        
    }
}