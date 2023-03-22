function startGame(){
    snakePosition(); //更新蛇頭的位置
    let lose=isOVer()// 檢查是否結束
    if(lose){
        document.body.addEventListener("keydown",playAgain)
   return }       
   clearScreen()         // 如果結束清除畫布
   checkColli()                 // 如果碰到蘋果
   let win=isWin()                 // 是否過關
    if(win){
        return
    }
    drawApple()
    drawSnake()
    drawScore()

    setSpeed()
    // 決定更新速度
    setTimeout(startGame,1000/speed)
}

function snakePosition(){
    headX=headX+xV
    headY=headY+yV
}

function isOVer(){
    let Over=false
    if(headX<0||headX==20||headY<0||headY==20){
        Over=true
    }
    for(i=0;i<snakePart.length;i++){
        if(headX==snakePart[i].x &&headY==snakePart[i].y){
            Over=true
        }
    }
    if(Over){
        ctx.strokeStyle="white"
        ctx.font = "50px Poppins";
        ctx.strokeText("Game Over!", canvas.width/6.5, canvas.height /2);
        ctx.font = "40px Poppins";
        ctx.strokeText("再玩一次?", canvas.width/3.5, canvas.height /2 + 50 );
        ctx.font = "25px Poppins";
        ctx.strokeText("按空白鍵", canvas.width/2.7, canvas.height /2 +100 );
    }
    return Over;
}
function setSpeed(){
    if(score==5){
        speed=10
    }
}

function isWin(){
    let win=false
    if(score==25){
        win=true
    }
    if(win){
        ctx.strokeStyle="white"
        ctx.font="50px 標楷體"
        ctx.strokeText("恭喜過關",canvas.width/4,canvas.height/2)
    }
    return win
}

function clearScreen(){
    ctx.fillStyle="black"
    ctx.fillRect(0,0,400,400)
}

function drawSnake(){
    ctx.fillStyle="green"
    for( let i =0;i<snakePart.length; i++){
        let part = snakePart[i];
        // 在第幾格填上顏色
        ctx.fillRect(part.x * tileCount, part.y * tileCount, tileSize, tileSize);
    }

    snakePart.push(new SnakePart(headX,headY))
    if(snakePart.length>tailLen){
        snakePart.shift()//移除第一個數字
    }
    ctx.fillStyle = 'orange';
    // 在哪一格畫上，順序來說就是x位置ｙ位置長寬
    ctx.fillRect(headX * tileCount, headY *tileCount, tileSize, tileSize);
}

    function drawApple(){
        ctx.fillStyle="red"
        ctx.fillRect(appleX*tileCount,appleY*tileCount,tileSize,tileSize)
    }
    function drawScore() {
        ctx.fillStyle = "white";
        ctx.font = "10px Poppins";
        ctx.fillText("Score: " + score, canvas.width-50, 10);
    }

    function checkColli(){
        if(appleX===headX&&appleY===headY){
            // 選擇位置
            appleX = Math.floor(Math.random() * tileCount);
        appleY = Math.floor(Math.random() * tileCount);
        tailLen++
        score++
        if(score>5 && score%2==0){
            speed++
        }
        }
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

function playAgain(event) {
    if(event.keyCode == 32){
        location.reload();
    }
}


const canvas=document.querySelector("#game")
ctx=canvas.getContext("2d")

// 定義一個蛇的物件，但這時我們還沒有創造它
class SnakePart{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
}

let speed=8 //初始速度
let tileCount=20 //將格子劃分成20個
let tileSize= canvas.width/ tileCount-2 //給邊邊留下一些空間
let headX=10 
let headY=10 //這是決定蛇頭的初始位置
const snakePart=[] //這個之後要拿來當蛇的身體
let tailLen=0 //蛇尾巴的長度

let appleX=5
let appleY=5

let xV=0  //決定左右移動
let yV=0 //決定上下移動

let score=0
startGame()