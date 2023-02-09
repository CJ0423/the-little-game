// 開始按鈕
const startBtn=document.querySelector(".start-btn")
let level=0
function start(){
    level=1
    console.log(level)
}
function chat(){
if(level==10){return}
    level++
    console.log(level)
}
startBtn.addEventListener("click",start)
//測試用功能
const chatBtn=document.querySelector(".chat-btn")
chatBtn.addEventListener("click",chat)
// 物件拖拉功能