// 開始按鈕
const startBtn = document.querySelector(".btn-start")
const backgroun = document.querySelector(".all")
const station = document.querySelector(".station-img")
const rabbits = document.querySelector('.rabbits')
let level = 0
function start() {
    level = 1
    console.log(level)
    startBtn.style = "visibility:hidden"
    // 進入到遊戲中
    document.dispatchEvent(new Event("gameing"))
}
function chat() {
    if (level == 10) { return }
    level++
    console.log(level)
}
startBtn.addEventListener("click", start)
//測試用功能
const chatBtn = document.querySelector(".chat-btn")
chatBtn.addEventListener("click", chat)
// 物件拖拉功能

// 進入到遊戲中
document.addEventListener("gameing", gameing)
const radditColor = ["b", "g", "p", "r", "y"]
const radditColorNumber = [0, 1, 2, 3, 4, 5]
function gameing() {
    rabbits.innerHTML = ""
    rabbits.style = "left:100%"
    if (level <= 3) {
        // 三節車
        rabbits.innerHTML = `<div class="rabbit-car">
    <div class="rabbit"></div>
    <div class="car"></div>
</div>`}

    else if (level <= 5) {
        // 四和五 四節車
    }
    else if (level <= 8) {
        // 六到八 後進先出
    }
    else if (level <= 10) {
        // 九到十 要改地圖
    }
    document.dispatchEvent(new Event("moveCar"))
}
// 移動車車
document.addEventListener("moveCar", moveCar)
function moveCar() {
   let baseleft=100
    setInterval(
        (() => {
            console.log(baseleft)
            baseleft = baseleft- 5
            rabbits.style.left = baseleft + "%";
        }), 1000);


    // rabbits.style = "left:65%"
}



// 火車 車站 兔兔調整
// window.addEventListener("resize",checkPosition)

// function checkPosition(){
//     console.log(window)
//     station.style="top:400px"
// }