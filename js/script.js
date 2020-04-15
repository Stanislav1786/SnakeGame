const ROWS = 10
const COLUMNS = 10
const START_COOLDOWN = 250
const LEVEL_COOLDOWN = 10

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


let map = createGameMap(COLUMNS, ROWS)
let cooldown = START_COOLDOWN

getRandomFreeCell(map).food = true
cooldown -= LEVEL_COOLDOWN

const cell = getRandomFreeCell(map)
let snake = [cell]


cell.snake = true

let snakeDirect = 'up'
let nextSnakeDirect = 'up'


requestAnimationFrame(loop)

let prevTick = 0
let play = true



function loop(timestamp) {
    requestAnimationFrame(loop)

    clearCanvas()

    if (prevTick + cooldown <= timestamp && play) {
        prevTick = timestamp

        snakeDirect = nextSnakeDirect
        moveSnake() 

        const head = snake[0]
        const tail = snake[snake.length - 1]

        if (head.food) {
            head.food = false
            snake.push(tail)

            getRandomFreeCell(map).food = true
            cooldown -= LEVEL_COOLDOWN
        }

        else {
            let isEnd = false
        for(let i = 1; i < snake.length; i++) {
            if (snake[i] === snake[0]) {
                isEnd = true
                break
            }
        }

                if (isEnd) {
            play = false
        }

    }







    }

    
    drawGameMap(map)
    showState ()  

        if (!play) {
        drawPaused ()
    }
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

document.addEventListener("keydown", function(event) {

    if (event.key === "ArrowUp") {
        if (snake.length === 1 || snakeDirect === "left" || snakeDirect ==="right") {
            nextSnakeDirect = "up"

        }

        
            }

    else if (event.key === "ArrowDown") {
        if (snake.length === 1 || snakeDirect === "left" || snakeDirect ==="right") {
            nextSnakeDirect = "down" 
        }
        
    }

    else if (event.key === "ArrowLeft") {

        if (snake.length === 1 || snakeDirect === "up" || snakeDirect === "down")
        nextSnakeDirect = "left"
    }

    else if (event.key === "ArrowRight") {
        if (snake.length === 1 || snakeDirect === "up" || snakeDirect === "down") {
            nextSnakeDirect = "right"
    }
        
    }

   else if (event.key === 'Enter') {
    if (play) {
        return
    }

    init()


   } 


}) 