const dragElement=document.querySelector(".glass")
let isMove=false

// 每次點擊時都會進入到move中點擊1下啟動跟隨滑鼠移動再點一次則是取消跟隨滑鼠函數
function move(e){
    isMove=!isMove
    if(isMove){                
        dragElement.addEventListener("mousemove", followMouse)
    }
    else{
        console.log("hi")

        dragElement.removeEventListener("mousemove",followMouse)
    }
}

function followMouse(e){
    // 點擊後確保滑鼠在正中間
    console.log("瀏覽器位置"+e.clientY)
    console.log("圖片位置"+dragElement.style.top)
    dragElement.style.left=`${e.clientX - dragElement.offsetWidth/2}px`

    dragElement.style.top=`${e.clientY - dragElement.offsetHeight/2}px`
    // requestAnimationFrame(followMouse)
}
dragElement.addEventListener("click",move)

// clientX表示整個視窗中X軸的位置 由左往右從0開始
// clientY表示整個視窗中Y軸的位置 由上往下從0開始
// offsetHeight表示這個元素的高度
// offsetWidth表示這個元素的寬度
