
//卍解累計次數
var hero = 1
//抓取旁白內文
const CONTENT = document.querySelector("#content")
//抓取電腦血量
const PROGRESS = document.querySelector("#progress")
//抓取計算用電腦血量(靜態血量表)
const PROGRES = document.querySelector("#progres")
//抓取玩家血量
const PROGRESS1 = document.querySelector("#progress1")
//抓取計算用玩家血量(靜態血量表)
const PROGRES1 = document.querySelector("#progres1")
//開始畫面
const GAMESTART = document.querySelector("#gameStart")
//遊戲全版面開啟
const FRAME1 = document.querySelector("#frame")
//第一頁面遊戲按鈕
//按下攻擊可以切換到猜拳選單
const ATTACK1 = document.querySelector("#attack")
const ACTIVE1 = document.querySelector("#active")
const GOOD1 = document.querySelector("#good")
const ESCAPE1 = document.querySelector("#escape")
//剪刀石頭布按鈕
const R1 = document.querySelector("#R")
const S1 = document.querySelector("#S")
const P1 = document.querySelector("#P")


//第一次開始遊戲時 按下開始遊戲後
function startGame() {
    GAMESTART.style.visibility = "hidden"
    ATTACK1.style.visibility = "visible"
    // 
    ACTIVE1.style.visibility = "visible"
    GOOD1.style.visibility = "visible"
    ESCAPE1.style.visibility = "visible"
    FRAME1.style.visibility = "visible"
}

//初始畫面可以選擇各種技能

function first() {
    ATTACK1.style.visibility = "visible"
    ACTIVE1.style.visibility = "visible"
    GOOD1.style.visibility = "visible"
    ESCAPE1.style.visibility = "hidden"
    R1.style.visibility = "hidden"
    S1.style.visibility = "hidden"
    P1.style.visibility = "hidden"

    //當血量等於101時，將不會再跳回去戰鬥持續進行中畫面
    if (PROGRES1.clientWidth >= 101 && PROGRES.clientWidth >= 101) {
        //3.1秒後跳出戰鬥持續進行中
        // 放的位置應該要調整一下
        setTimeout('content.innerHTML = "戰鬥持續進行中！！"', 3100)
    }
}
//選擇猜拳攻擊
function attack() {
    CONTENT.innerHTML = "進行猜拳攻擊！";
    //卡比出拳
    ATTACK1.style.visibility = "hidden"
    ACTIVE1.style.visibility = "hidden"
    GOOD1.style.visibility = "hidden" //放著好看而已跟escape一樣
    R.style.visibility = "visible"
    S.style.visibility = "visible"
    P.style.visibility = "visible"

}
//萬解技能還在製作
function active() {

    if (hero > 3) {
        CONTENT.innerHTML = "卍解啟動，還在製作中目前並沒有效果...，此外你被卡比攻擊了";
        blood = progress1.clientWidth;
        //玩家扣血
        yu1();
        //回到初始畫面
        first();
    }
    else {
        CONTENT.innerHTML = "卍解蓄力" + hero + "/3";
        hero++;
        //玩家扣血
        yu1();
        //回到初始畫面
        first();
    }

}

//攻擊相關攻擊相關攻擊相關攻擊相關攻擊相關攻擊相關攻擊相關攻擊相關

//玩家被攻擊
function yu1() {//自身扣血

    //玩家靜態血量表
    var immediate = PROGRES1.clientWidth
    //抓取玩家現在真實的血量表並進行扣血運算
    immediate = immediate - 100;
    PROGRES1.style.width = immediate + "px"

    //靜態血量表看見歸零時，啟動終結動畫
    if (immediate <= 0) {
        //帶入卡比終結動畫
        endGame1(1)
    }
    //玩家動態寫量條
    var blood = PROGRESS1.clientWidth
    //flash為預計要剩下的血量100為每次被攻擊時要扣的血量
    let flash = blood - 100;
    bar = setInterval(function () {
        //此處為每2毫秒扣2滴血
        blood = blood - 2;

        if (blood <= flash){
            clearInterval(bar)}
        //回傳新的血量clientWidth只能看大小不能更改數值喔
        PROGRESS1.style.width = blood + "px"
    }, 1);


    first()
}
//電腦被攻擊
function yu() { //電腦扣血
    blood = PROGRESS.clientWidth
    //偵測結束的血量
    immediate = PROGRES.clientWidth
    immediate = immediate - 100
    PROGRES.style.width = immediate + "px"

    if (immediate <= 0) {
        CONTENT.innerHTML="";
        //卡比終結動畫
        endGame1(2)
    }
    //flash為預計要剩下的血量100為每次被攻擊時要扣的血量
    let flash = blood - 100;
    bar = setInterval(function () {
        //此處為每2毫秒扣2滴血
        blood = blood - 2;

        if (blood <= flash)
            clearInterval(bar);
        //回傳新的血量clientWidth只能看大小不能更改數值喔
        PROGRESS.style.width = blood + "px";
    }, 1);

    first()
}


//判定攻擊結果與半血以下血量變成紅色
function hit(game) {
    //  決定電腦出拳
    var computer = ["石頭", "剪刀", "布"]
    var victory = ["雙方平手", "你攻擊了卡比", "你被卡比攻擊了"]
    console.log("我出" + game.name)
    var targetA = Math.floor(Math.random() * 3);
    function check(x) {
        CONTENT.innerHTML = "你出了" + game.name + "<br>卡比出了" + computer[targetA] + '<br>' + victory[x];
    }
    //平手判斷
    if (game.name == computer[targetA]) {
        check(0)
        first()
    }
    //電腦出了石頭
    else if (computer[targetA] == "石頭") { //石頭
        if (game.name == "布") {
            //玩家扣血
            check(1)
            yu();

        }
        else if (game.name == "剪刀") {

            //電腦扣血
            check(2)
            yu1();
        }
    }
    else if (computer[targetA] == "布") {
        if (game.name == "剪刀") {
            //玩家扣血
            check(1)
            yu();
        }
        else if (game.name == "石頭") {

            //電腦扣血
            check(2)
            yu1();

        }
    }
    else if (computer[targetA] == "剪刀") {
        if (game.name == "石頭") {
            //玩家扣血
            check(1)
            yu();
        }
        else if (game.name == "布") {
            //電腦扣血
            check(2)
            yu1();
        }
    }



    //半血變紅色
    if (PROGRESS.clientWidth <= 200) {
        PROGRESS.style.background = "red"
    }
    if (PROGRESS1.clientWidth <= 200) {
        PROGRESS1.style.background = "red"
    }
}
//當血量歸零使啟動終結動畫
function endGame1(x) {
    ATTACK1.disabled = "disabled"
    ACTIVE1.disabled = "disabled"
    GOOD1.disabled = "disabled"
    ESCAPE1.disabled = "disabled"
    document.querySelector("#restart").style.visibility = "visible"
    console.log("結束")
    if (x == 1) {
        document.querySelector("#total").style.visibility = "visible"
        CONTENT.innerHTML = "你輸了，<br>卡比使用終結技能：吞噬希望";
    }
    else {
        document.querySelector("#sub").style.visibility = "visible"
        CONTENT.innerHTML = "你成功擊敗了卡比，<br>使用終結技能：鳥鳥嘲諷";
    }

}
//當遊戲重新開始時，初始化設定
function restart() {
    GAMESTART.style.visibility = "visible";
    FRAME1.style.visibility = "hidden";

    document.getElementById("sub").style.visibility = "hidden";
    document.getElementById("total").style.visibility = "hidden";
    document.getElementById("restart").style.visibility = "hidden";

    PROGRES1.style.width = 400 + "px";
    PROGRESS1.style.width = 400 + "px";

    PROGRESS1.style.background = "green";
    PROGRES.style.width = 400 + "px";
    PROGRESS.style.width = 400 + "px";
    PROGRESS.style.background = "green";

    ATTACK1.disabled = ""
    ATTACK1.style.visibility = "hidden"
    ACTIVE1.disabled = ""
    ACTIVE1.style.visibility = "hidden"
    ESCAPE1.disabled = ""
    ESCAPE1.style.visibility = "hidden"
    GOOD1.disabled = ""
    GOOD1.style.visibility = "hidden"
    CONTENT.innerHTML =
        "星之卡比現身<br>請嘗試在他把你吃掉之前試著打贏他吧！"
}
