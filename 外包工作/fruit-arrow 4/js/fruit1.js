var baseCanvas = document.querySelector(".all");
var item=document.querySelector(".item")


var oldbaseCanvasWidth = 1280; // 以我電腦為基準
var level=document.querySelector(".level")
var password=document.querySelector(".password")
var timeClock=document.querySelector(".time")
var information=document.querySelector(".information")

const reset =document.querySelector(".reset")
const noticeInGame=document.querySelector(".notice-in-game")
const continueBtn=document.querySelector(".continue-btn")
const enter=document.querySelector(".enter")

const textBox=document.querySelector(".text-box")
const noticeBoxText=document.querySelector(".notice-box-text")
const noticeBox=document.querySelector(".notice-box")
const iknow=document.querySelector(".iknow")

const score=document.querySelector(".score")

const disc = document.querySelector(".disc-big");

let rect = disc.getBoundingClientRect();
let centerY = rect.top + rect.height / 2;
let centerX = rect.left + rect.width / 2;

// 音樂控制
let bgm=document.querySelector("#bgm")

let musicBtn=document.querySelector(".music-btn")

let play=3

let rightMusic=document.querySelector("#right")
let wrongMusic=document.querySelector("#wrong")
let passMusic=document.querySelector("#pass")
let notPassMusic=document.querySelector("#not-pass")

// 右半部的控制
sample=document.querySelector(".sample")
playerText=document.querySelector(".player-text")
playerInput=document.querySelector(".player-input-text")


function resize_baseCanvas() {
  let width = window.innerWidth, 
      height = window.innerHeight, 
      wrapper = document.querySelector(".allimg"),
      aspectRatio = 16 / 9, 
      scale = width / height <= aspectRatio ? width / 1280 : height / 720

  // 背景圖片大小
    baseCanvas.style.width = `${1280 *scale}px`
    baseCanvas.style.height = `${720 *scale}px`
    item.style.height = `${720 *scale}px`
  // 
  rect = disc.getBoundingClientRect();
centerY = rect.top + rect.height / 2;
centerX = rect.left + rect.width / 2;
}
function baseData(){
  oldbaseCanvasWidth=baseCanvas.style.width
  // 取得原始寬度
}

function resize_font(){
  // 使用新的字體寬度以及舊的字體寬度相除並且在大小改變時及時調整字體大小
let newCanvasWidth=baseCanvas.clientWidth
    let scaleFont=newCanvasWidth/oldbaseCanvasWidth
level.style.fontSize=`${34*scaleFont}px`
password.style.fontSize=`${30*scaleFont}px`

timeClock.style.fontSize=`${36*scaleFont}px`
score.style.fontSize=`${36*scaleFont}px`
information.style.fontSize=`${36*scaleFont}px`
textBox.style.fontSize=`${48*scaleFont}px`
reset.style.fontSize=`${22*scaleFont}px`
noticeInGame.style.fontSize=`${22*scaleFont}px`
continueBtn.style.fontSize=`${26*scaleFont}px`
enter.style.fontSize=`${26*scaleFont}px`

noticeBox.style.fontSize=`${22*scaleFont}px`
iknow.style.fontSize=`${22*scaleFont}px`

playerInput.style.fontSize=`${30*scaleFont}px`
sample.style.fontSize=`${30*scaleFont}px`
}

function playMusic(){
  if(play==0){
    bgm.play()
    play=1

    musicBtn.style.backgroundImage=`url(../audio/audioAll/sound_on.svg)`
  }
  else if(play==1){
    bgm.pause()
    musicBtn.style.backgroundImage=`url(../audio/audioAll/sound_off.svg)`

    play=0
  }

}

window.onload = function() {
  resize_baseCanvas(); // 執行 resize_baseCanvas 函數
  resize_font(); // 執行 resize_font 函數
}



window.addEventListener("resize",resize_baseCanvas)
window.addEventListener("resize",resize_font)
musicBtn.addEventListener("click",playMusic)

