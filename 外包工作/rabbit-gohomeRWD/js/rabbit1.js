var canvas = document.querySelector(".all");
var item = document.querySelector(".item")
var scrore = document.querySelector(".score")
var noticeBox = document.querySelector(".notice-box")
var btn=document.querySelector(".btn")
var checkIknow=0;

window.onload = resize_canvas

function resize_canvas() {
  let width = window.innerWidth,
    height = window.innerHeight,
    wrapper = document.querySelector(".allimg"),
    aspectRatio = 16 / 9,
    scale = width / height <= aspectRatio ? width / 1280 : height / 720

  // 背景圖片大小
  canvas.style.width = `${1280 * scale}px`
  canvas.style.height = `${720 * scale}px`
  btn.style.width = `${300 * scale}px`
  btn.style.height = `${50 * scale}px`
  scrore.style = `font-size:${16 * scale}px`
  item.style.height = `${180 * scale}px`
  let fontSize=0
  
  if (window.innerWidth < 1100) {
    fontSize = 20;
    if (window.innerWidth < 790) {
      fontSize = 16;
    }
    if (window.innerWidth < 614) {
      fontSize = 12;
    }
  } else{
    fontSize=28
  }
  
  noticeBox.style.cssText = `
    width : ${700 * scale}px;
    height:${300 * scale}px;
    font-size: ${fontSize}px;
    left: calc(50% - ${700 * scale / 2}px);
    top: calc(50% - ${300 * scale / 2}px);
  `;
  if(checkIknow==1){
    
  noticeBox.style.visibility="hidden"}

}

window.addEventListener("resize", resize_canvas)
