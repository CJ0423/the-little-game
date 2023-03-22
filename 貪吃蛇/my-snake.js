function getDom(dom){
    return document.querySelector(`${dom}`)
}
ctx=canvas.getContext('2d')



cav=getDom("#game")
function startGame(){
    snakePosition()
    end=isEnd()
    if(end){
        cleanCanvas()
    }
    touch=touchApple()
    if(touch){
        win=isWin()
    }

    drawApple()
    drawSnake()
    drawScore()

    setSpeed()

    setTimeout(startGame,1000/speed)
}

function snakePosition(){
    console.log("1")
}
function isEnd(){
    console.log("1")
}
function cleanCanvas(){
    console.log("1")
}
function touchApple(){
    console.log("1")
}
function isWin(){
    console.log("1")
}
function drawApple(){
    console.log("1")
}
function drawSnake(){
    console.log("1")
}
function drawScore(){
    console.log("1")
}

document.body.addEventListener("keydown",keydown)

function keydown(e){
    // left
    if(e.keyCode==37){
        xV=-1
        yV=0
    }
    // up
    if(e.keyCode==38){
        yV=-1
        xV=0
    }
    // right
    if(e.keyCode==39){
        xV=+1
        yV=0
    }
    // down
    if(e.keyCode==40){
        yV=+1
        xV=0
    }
}

class SnakePart{
    constructor(x,y){
        this.x=x
        this.y=y
    }
}


let speed=6
let tileCount=20
let tileSize=canvas.width/tileCount -2

let headX=10
let headY=10
const snakePart=[]
let tailLen=0

let appleX=5
let appleY=5

let leftOrRight=0
let upOrDown=0

let score=0

startGame()

