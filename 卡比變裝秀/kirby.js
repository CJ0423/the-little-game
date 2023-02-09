let dragElement=document.querySelectorAll(".item")

let isMove=false

// 每次點擊時都會進入到move中點擊1下啟動跟隨滑鼠移動再點一次則是取消跟隨滑鼠函數
function move(e){
    isMove=!isMove
    if(isMove){                
        this.addEventListener("mousemove", followMouse)
    }
    else{
        this.removeEventListener("mousemove",followMouse)
    }
}

function followMouse(e){
    // 點擊後確保滑鼠在正中間
    this.style.left=`${e.clientX - this.offsetWidth/2}px`

    this.style.top=`${e.clientY - this.offsetHeight/2}px`
    // requestAnimationFrame(followMouse)
}
dragElement.forEach(element => {
    element.addEventListener("click",move)
});

// clientX表示整個視窗中X軸的位置 由左往右從0開始
// clientY表示整個視窗中Y軸的位置 由上往下從0開始
// offsetHeight表示這個元素的高度
// offsetWidth表示這個元素的寬度
