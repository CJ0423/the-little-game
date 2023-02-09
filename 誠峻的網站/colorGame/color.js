// 導覽地圖
// 1:create:用來創造全新的div
// 2:restart:再玩一次將數值全部歸零
//3:start 主要工作項目
//4:測試人員專用
const game = document.querySelector("#game");
var change = [2, 4, 5, 5, 5, 6, 10, 10, 12, 2, 1];
var mainColor = [50, 45, 40, 40, 35, 30, 25, 20, 20, 50, 0];
let y = -1;
let level = 0;
let score = document.querySelector("#score");

// 1:create:用來創造全新的div
function create() {
    for (i = 0; i < change[y] * change[y]; i++) {
        // console.log("檢查" + change[y])
        var div = document.createElement('div');
        div.setAttribute("class", "gameColor");

        game.appendChild(div);
    }
}

//2:restart:再玩一次將數值全部歸零
function restart() {
    y = -1;
    level = 0;
    game.style.background="white";
    start();
}

// 3:start 主要工作項目都在此，從控制時間到將新的方塊染色以及跳出結算畫面等等
function start() {
    // 只要進入到start內馬上停止計時(通過小關卡時，時間讀條重製的概念)
    clearInterval(timerId);
    // 倒數讀條
    document.getElementById("bloodProgress").style.width = 100 + "%";
    // 本段原本是想 
    game.setAttribute("id", "game")
    // 隱藏開始與測試按鈕
    document.getElementById("start").style.visibility = "hidden";
    document.getElementById("chater").style.visibility = "visible";
    //  這個pro是血量的百分比
    let pro = 100;
    let bar = setInterval(function () {
        pro -= 0.14;
        if (pro <= 0) {
            clearInterval(bar);
        }
        bloodProgress.style.width = pro + "%";
    }, 10);
    console.log( bloodProgress.style.width = pro + "%")
    // 隱藏的計時器
    var count = 7;
    //倒數計時器
    var timerId = setInterval(timer, 1000); // 每隔1000毫秒，呼叫一次timer。
    function timer() {
        count--; // 每次執行timer就把count減1。
        // console.log(count)
        // 若已計數完畢，則停止計時。
        if (count == 0) {
            clearInterval(timerId);
            // boxloop[position].removeEventListener()
            boxloop[position].style.outline = "dashed 3px red"
            setTimeout(lose, 700);
        };
    }
    //一般情況下每一次進去時
    if (y < 9) {
        if (level % 3 == 0) {
            y = y + 1;
        }
        score.innerHTML = "分數：" + level;
        //選定一個隨機顏色
        red = Math.floor(Math.random() * 205);
        blue = Math.floor(Math.random() * 205);
        green = Math.floor(Math.random() * 205);
        //產生多少格子
        position = Math.floor(Math.random() * (change[y] * change[y]));
        // console.log(position)
        //清空原始格子
        game.innerHTML = "";
        //創造格子
        create()
        //一次改變所有格子的大小與顏色
        var boxloop = document.querySelectorAll(".gameColor");
        //    console.log(boxloop.length);
        for (j = 0; j <= boxloop.length - 1; j++) {
            //這是測試用的
            // 以下為錯誤的區段這個錯誤導致了最後一格被蓋上了一般的顏色，所以導致無法正常顯示。
            // 解除方法就是將特別顏色的這一格，移動到迴圈外面。
            // boxloop[position].style.background ="blue";
            //"rgb(" + (red + mainColor[y]) + "," + (green + mainColor[y]) + "," + (blue + mainColor[y]) + ")";
// 測試時產生的註解
            // console.log("找不到的那一格" + boxloop)
            // console.log("找不到的那一的" + y)
            // console.log("陣列長度" + boxloop.length)
            // console.log("position" + position)
// 這個區段可以將格子重新劃分為，平均大小。
            boxloop[j].style.height = "calc(100%/" + change[y] + " - 6px)";
            boxloop[j].style.width = "calc(100%/" + change[y] + " - 6px)";
            boxloop[j].style.background = "rgb(" + red + "," + green + "," + blue + ")";
        } 
// 改變特定格子顏色
        boxloop[position].style.background = "rgb(" + (red + mainColor[y]) + "," + (green + mainColor[y]) + "," + (blue + mainColor[y]) + ")";
        boxloop[position].addEventListener('click', function () {
            //重新開始coloro函式並讓計時器歸零
            start(); clearInterval(timerId); clearInterval(bar);
        });
// 分數系統
        level++;
        // console.log("level:" + level)
        // console.log("y:" + y)
    }
 //全破情況
    else if (y == 9) {
        pro = 0;
        game.innerHTML = "";
        game.innerHTML = "<div class=title>LEVEL:7<br>恭喜您，成功過關了<br>以下是我們給您的建議</div><div class='content'>請善待身旁有色弱的朋友，對於完全沒有色弱的您，我想讓您知道!<br><br>在台灣每100個人就有約5個人有色弱，所以這並不是很罕見的疾病，<br>請善待身旁有色弱的朋友<br>謝謝您</div></div><br></div><br><br><div class='restart'onclick=restart()>再玩一次</div>";
        game.setAttribute("id", "endGame");
        document.getElementById("start").style.visibility = "hidden";
        document.getElementById("chater").style.visibility = "hidden";
    }
    //時間到輸掉
    function lose() {
        document.getElementById("bloodProgress").style.width = 0 + "%";
        game.innerHTML = "";
        game.setAttribute("id", "endGame");
        document.getElementById("start").style.visibility = "hidden";
        document.getElementById("chater").style.visibility = "hidden";
        switch (y) {
            case 0:
                game.innerHTML = "<div class=title>LEVEL:0<br>我希望您是不確定遊戲的玩法<br>以下是我們給您的建議</div><div class='content'>請使用滑鼠點擊，您所看到的所有方塊中，顏色不同的方塊，才能順利通關喔<br><br>若您是真的無法分辨顏色，且未被診斷出色盲或色弱等<br>請儘速去醫院檢查！<br>謝謝您</div></div><br></div><br><br><div class='restart'onclick=restart()>再玩一次</div>";
                break;
            case 1:
                game.innerHTML = "<div class=title>LEVEL:0<br>我希望您是不確定遊戲的玩法<br>以下是我們給您的建議</div><div class='content'>請使用滑鼠點擊，您所看到的所有方塊中，顏色不同的方塊，才能順利通關喔<br><br>若您是真的無法分辨顏色，且未被診斷出色盲或色弱等<br>請儘速去醫院檢查！<br>謝謝您</div></div><br></div><br><br><div class='restart'onclick=restart()>再玩一次</div>";
                break;

            case 2:
                game.innerHTML = "<div class=title>LEVEL:1<br>您可能有較嚴重的色盲<br>以下是我們給您的建議</div><div class='content'>，我想讓您知道!<br><br>在台灣每100個人就有約5個人有色弱，雖然生活上可能有些許不便，<br>但我們想讓您知道，您並不孤單<br>謝謝您</div></div><br></div><br><br><div class='restart'onclick=restart()>再玩一次</div>";
                break;
            case 3:
                game.innerHTML = "<div class=title>LEVEL:1<br>您可能有一點色盲<br>以下是我們給您的建議</div><div class='content'>我想讓您知道!<br><br>在台灣每100個人就有約5個人有色弱，雖然生活上可能有些許不便，<br>但我們想讓您知道，您並不孤單<br>謝謝您</div></div><br></div><br><br><div class='restart'onclick=restart()>再玩一次</div>";
                break;
            case 4:
                game.innerHTML = "<div class=title>LEVEL:2<br>你可能有較為嚴重的色弱<br>以下是我們給您的建議</div><div class='content'>色弱雖然造成一些不方便<br><br>但並不會影響您考駕照的權利，<br>但您辨別顏色的速度可能較慢，因此駕駛時請更加小心<br>謝謝您</div></div><br></div><br><br><div class='restart'onclick=restart()>再玩一次</div>";
                break;
            case 5:
                game.innerHTML = "<div class=title>LEVEL:3<br>你可能有較為嚴重的色弱<br>以下是我們給您的建議</div><div class='content'>色弱雖然造成一些不方便<br><br>但並不會影響您考駕照的權利，<br>但您辨別顏色的速度可能較慢，因此駕駛時請更加小心<br>謝謝您</div></div><br></div><br><br><div class='restart'onclick=restart()>再玩一次</div>";
                break;
            case 6:
                game.innerHTML = "<div class=title>LEVEL:4<br>你可能有較為輕微的色弱<br>以下是我們給您的建議</div><div class='content'>色弱偶而會造成一些不方便<br><br>但幾乎不會影響您的生活，<br>具有些微色弱的您，和一普通人幾乎沒有差別<br>謝謝您</div></div><br></div><br><br><div class='restart'onclick=restart()>再玩一次</div>";
                break;
            case 7:
                game.innerHTML = "<div class=title>LEVEL:5<br>你可能有較為輕微的色弱<br>以下是我們給您的建議</div><div class='content'>色弱偶而會造成一些不方便<br><br>但幾乎不會影響您的生活，<br>具有些微色弱的您，和一普通人幾乎沒有差別<br>謝謝您</div></div><br></div><br><br><div class='restart'onclick=restart()>再玩一次</div>";
                break;
            case 8:
                game.innerHTML = "<div class=title>LEVEL:6<br>你幾乎沒有色弱<br>以下是我們給您的建議</div><div class='content'>基本上您不會發現您有色弱<br><br>這完全不會影響您的生活，<br>如某些海洋生物，他們能看見的顏色可能與你差不多，但對於生活上並沒有多大的影響<br>謝謝您</div></div><br></div><br><br><div class='restart'onclick=restart()>再玩一次</div>";
                break;

            case 9:
                game.innerHTML = "<div class=title>LEVEL:7<br>恭喜您，成功過關了<br>以下是我們給您的建議</div><div class='content'>請善待身旁有色弱的朋友，對於完全沒有色弱的您，我想讓您知道!<br><br>在台灣每100個人就有約5個人有色弱，所以這並不是很罕見的疾病，<br>請善待身旁有色弱的朋友<br>謝謝您</div></div><br></div><br><br><div class='restart'onclick=restart()>再玩一次</div>";
                break;
        }
    }
}
//4:測試人員專用
function chater() {
    start();
}
