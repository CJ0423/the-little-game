var baseCanvas = document.querySelector(".all");
var item = document.querySelector(".item")
var scrore = document.querySelector(".score")
var noticeBox = document.querySelector(".notice-box")
var btn=document.querySelector(".btn")
var checkIknow=0;
var know=document.querySelector(".iknow")
var checkText1=document.querySelector(".check-text")

var oldbaseCanvasWidth = 1250; // 以我電腦為基準


window.onload = function() {
  resize_baseCanvas(); // 執行 resize_baseCanvas 函數
  resize_font(); // 執行 resize_font 函數
}

function resize_baseCanvas() {
  let width = window.innerWidth,
    height = window.innerHeight,
    wrapper = document.querySelector(".allimg"),
    aspectRatio = 16 / 9,
    scale = width / height <= aspectRatio ? width / 1280 : height / 720

  // 背景圖片大小
  baseCanvas.style.width = `${1280 * scale}px`
  baseCanvas.style.height = `${720 * scale}px`
  btn.style.width = `${300 * scale}px`
  btn.style.height = `${50 * scale}px`
  scrore.style = `font-size:${16 * scale}px`
  item.style.height = `${180 * scale}px`
  
  
  noticeBox.style.cssText = `
    width : ${700 * scale}px;
    height:${300 * scale}px;
    left: calc(50% - ${700 * scale / 2}px);
    top: calc(50% - ${300 * scale / 2}px);
  `;

  console.log(window.innerWidth)
  if(window.innerWidth<=530){
    noticeBox.style.left= `calc(50% - ${175 / 2}px);`
    noticeBox.style.top= `calc(50% - ${80 / 2}px);`

  }
  if(checkIknow==1){
    
  noticeBox.style.visibility="hidden"}

}

// 字體更動

function resize_font(){
  // 使用新的字體寬度以及舊的字體寬度相除並且在大小改變時及時調整字體大小
let newCanvasWidth=baseCanvas.clientWidth
let scaleFont=newCanvasWidth/oldbaseCanvasWidth

noticeBox.style.fontSize=`${28*scaleFont}px`

know.style.fontSize=`${22*scaleFont}px`
checkText1.style.fontSize=`${24*scaleFont}px`

}


window.addEventListener("resize", resize_baseCanvas)
window.addEventListener("resize",resize_font)
