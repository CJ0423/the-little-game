// 主要會使用的物件
const cars = document.querySelector('.cars')
const rabbits = document.querySelector('.rabbits')
const rabbitsAns = document.querySelector('.rabbits.ans')
const notice = document.querySelector('.notice-box')
const noticeText = document.querySelector('.notice-box-text')
const score = document.querySelector(".score")
const station = document.querySelector(".station")
// 按鈕相關
const iknow = document.querySelector('.iknow')
let iknow2 = document.querySelector(".iknow2")
const goHome = document.querySelector('.go-home')
const reset = document.querySelector('.reset')
const chat1 = document.querySelector('.chat')
chat1.addEventListener("click", chat)
// 計算數字
let level = 1
let numberOfRabbits = 0
let choseAns
let Answer = []
let resetVisible = 0
let count = 0 //計算車子總數  
let clickRabbits = 0 // 點擊多少隻兔子
let randoNumber
let chance = [[3, 2, 1, 0], [0, 1, 2, 3], [0, 3, 2, 1], [2, 3, 0, 1]]
// 隨機顏色
const radditColor = ["b", "g", "p", "r", "y"]
const AnswerCard = {
    b: '蓝色',
    g: '绿色',
    p: '紫色',
    r: '红色',
    y: '黄色'
}
const radditColorNumber = [0, 1, 2, 3, 4, 5]
for (i = 0; i <= 3; i++) {
    cars.innerHTML += `<div class="car"></div>`
    rabbits.innerHTML += `<div class="rabbit"></div>`
}
// 車車移動停止
let thirddMove
cars.style.left = '61.5%';
rabbits.style.left = '61%';




function start() {
    station.style = "left:unset;top:unset"
    reset.style.visibility = "hidden"
    count = 0
    goHome.style.visibility = "hidden"
    iknow.style.visibility = "hidden"
    level = 5
    checkIknow = 1
    notice.style.visibility = "hidden"
    btn.style.visibility = "visible"
    iknow.innerHTML="我知道了"

    // 點擊過的兔兔歸零
    clickRabbits = 0
    numberOfRabbits = 0
    Answer.length = 0
    // 點擊後的兔兔歸零完成
    // 請裡所有兔兔
    rabbitsAns.innerHTML = ""
    rabbits.innerHTML = ""
    // 清理所有兔兔
    // 確保車車歸零
    clearInterval(thirddMove)
    // 恢復原本模式
    chance = [[3, 2, 1, 0], [0, 1, 2, 3], [0, 3, 2, 1], [2, 3, 0, 1]]
    score.textContent = `分數:0`


    document.dispatchEvent(new Event("gameing"))

}
// 進入遊戲
function gameing() {
    randoNumber = Math.floor(Math.random() * 4);
   
    rabbits.innerHTML = ""
    rabbits.style = "left:99.5%"

    rabbitsAns.innerHTML = ""
    rabbitsAns.style = "left:99.5%"

    cars.innerHTML = ""
    cars.style = "left:100%"

    if (level <= 3) {
        // 三節車
        let i = 3
        rabbitsAns.innerHTML = countRabbit(i, 1)
        rabbits.innerHTML = countRabbit(i, 0)
        cars.innerHTML = countCar(i, 0)
    }

    else if (level <= 5) {
        let i = 4
        // 四和五 四節車
        rabbitsAns.innerHTML = countRabbit(i, 1)
        rabbits.innerHTML = countRabbit(i, 0)
        cars.innerHTML = countCar(i, 0)
    }
    else if (level <= 8) {
        let i = 3
        // 六到八  三節車後進先出
        rabbitsAns.innerHTML = countRabbit(i, 1)
        rabbits.innerHTML = countRabbit(i, 0)
        cars.innerHTML = countCar(i, 0)
    }
    else if (level <= 10) {
        let i = 4
        // 九到十 四節車 要改地圖
        rabbitsAns.innerHTML = countRabbit(i, 1)
        rabbits.innerHTML = countRabbit(i, 0)
        cars.innerHTML = countCar(i, 0)
    }
    document.dispatchEvent(new Event("moveCar"))
}
// 創造隨機顏色的兔子
function countRabbit(i, k) {
    let randomColors = getRandomNonRepeatingItems(radditColor, i);

    let text = ""
    for (j = 0; j < i; j++) {
        if (k == 1) { text += `<div class="rabbit noAns"></div>` }
        else {
            // console.log(randomColors);
            text += `<div class="rabbit ${randomColors[j]} old"></div>`
        }
    }

    // 測試用 
    //    text = `<div class="rabbit-car">
    //     <div class="rabbit ${randomColors[1]}"></div>
    //     <div class="car"></div>
    // </div>
    // <div class="rabbit-car">
    //     <div class="rabbit ${randomColors[1]}"></div>
    //     <div class="car"></div>
    // </div>
    // <div class="rabbit-car">
    //     <div class="rabbit ${randomColors[1]}"></div>
    //     <div class="car"></div>
    // </div>
    // <div class="rabbit-car">
    //     <div class="rabbit ${randomColors[1]}"></div>
    //     <div class="car"></div>
    // </div>`
    return text
}
// 選定隨機順序
function getRandomNonRepeatingItems(array, numberOfItems) {
    let items = [];
    while (items.length < numberOfItems) {
        let randomIndex = Math.floor(Math.random() * array.length);
        let randomItem = array[randomIndex];
        if (!items.includes(randomItem)) {

            items.push(randomItem);

        }
    }
    return items;
}
// 創造車子
function countCar(i) {
    let text = ""
    for (j = 0; j < i; j++) {
        text += `<div class="car"></div>`

    }
    return text
}

// 出發
function moveCar() {
    let baseRabbits = 99.5
    let baseCars = 100
    let howMouchCar = document.querySelectorAll(".car")

    // rabbits.style.left="60%"
    // cars.style.left="60.5%"

    let startMove = setInterval(() => {
        rabbits.style.left = `${baseRabbits}%`
        rabbitsAns.style.left = `${baseRabbits}%`
        cars.style.left = `${baseCars}%`
        if (level >= 6) {
            baseRabbits = baseRabbits - 0.5;
            baseCars = baseCars - 0.5
            if (baseCars <= 30) {
                clearInterval(startMove)
                document.dispatchEvent(new Event("rabbitsDown"));

            }
        }
        else {
            baseRabbits = baseRabbits - 0.5;
            baseCars = baseCars - 0.5
            if (baseCars <= 61.5) {
                clearInterval(startMove)
                document.dispatchEvent(new Event("rabbitsDown"));

            }
        }

    }, 35)
    if (level < 6) {
        setTimeout(() => {
            let secondMove = setInterval(() => {
                rabbitsAns.style.left = `${baseRabbits}%`
                cars.style.left = `${baseCars}%`

                baseRabbits = baseRabbits - 0.5;
                baseCars = baseCars - 0.5
                if (howMouchCar.length == 3) {
                    if (baseCars <= 18.5) {
                        clearInterval(secondMove)
                    }
                }
                if (howMouchCar.length == 4) {
                    if (baseCars <= 10.5) {
                        clearInterval(secondMove)
                    }
                }
            }, 35)
        }, 6000)
    }
    if (level >= 6) {
        setTimeout(() => {
           
            centerMove = setInterval(() => {
                rabbitsAns.style.left = `${baseRabbits}%`
                cars.style.left = `${baseCars}%`

                baseRabbits = baseRabbits - 0.5;
                baseCars = baseCars - 0.5
                if (baseCars <= 10) {
                    clearInterval( centerMove)
                }
            },35)
        }
            , 7000) //原本是11500
                    // 多三秒為14500
                    // 多五秒為16500
    }
    


    if (level < 6) {
        setTimeout(() => {
            
            thirddMove = setInterval(() => {
                rabbitsAns.style.left = `${baseRabbits}%`
                cars.style.left = `${baseCars}%`

                baseRabbits = baseRabbits - 0.5;
                baseCars = baseCars - 0.5
                if (baseCars == 0) {
                    if (0 == count) {
                   
                        checkAns()
                    }
                }
                if (baseCars <= -40) {
               
                    clearInterval(thirddMove)
                }


            }, 35)
        }
            , 14500)
    }
    if (level >= 6) {
        setTimeout(() => {
           
            lastMove = setInterval(() => {
                rabbitsAns.style.left = `${baseRabbits}%`
                cars.style.left = `${baseCars}%`

                baseRabbits = baseRabbits +0.5;
                baseCars = baseCars + 0.5
                if (baseCars >= 32) {
                    clearInterval( lastMove)
                }
            }, 35)
        }
            , 11000) //原本是11500
                    // 多三秒為14500
                    // 多五秒為16500
    }
    if(level>=6){
        setTimeout(() => {
           
            thirddMove = setInterval(() => {
                rabbitsAns.style.left = `${baseRabbits}%`
                cars.style.left = `${baseCars}%`

                baseRabbits = baseRabbits + 0.5;
                baseCars = baseCars + 0.5
                if (baseCars == 75) {
                    if (0 == count) {
                      
                        checkAns()
                    }
                }
                if (baseCars >=80) {
          
                    clearInterval(thirddMove)
                }


            }, 35)
        }
            , 15500) //原本是11500
                    // 多三秒為14500
                    // 多五秒為16500
    }

}
// else



// 兔兔下車
function rabbitsDown() {
    let time = 18
    let checkNumber = [1, 1, 1, 1]
    let baseRabbits = [0, 0, 0, 0]
    let rabbits = document.querySelectorAll(".old")
    setTimeout(() => {
        let dropDown = setInterval(
            function () {
                baseRabbits[0] = baseRabbits[0] + 2;
                rabbits[0].style.top = `${baseRabbits[0]}%`;
                rabbits[0].style.zIndex = `99`



                if (baseRabbits[0] >= 200) {
                    clearInterval(dropDown);
                    rabbitWalk(0, chance[randoNumber][0])

                }
            }, time);
    }, 0)

    setTimeout(() => {
        let dropDown2 = setInterval(
            function () {
                if (checkNumber[0] == 1) {
                    baseRabbits[1] = baseRabbits[1] + 2;
                    rabbits[1].style.zIndex = `99`
                    rabbits[1].style.top = `${baseRabbits[1]}%`;



                    if (baseRabbits[1] >= 200) {
                        clearInterval(dropDown2);
                        rabbitWalk(1, chance[randoNumber][1])

                    }
                }
            }, time);
    }, 300)

    setTimeout(() => {
        let dropDown3 = setInterval(
            function () {
                if (checkNumber[1] == 1) {
                    baseRabbits[2] = baseRabbits[2] + 2;
                    rabbits[2].style.zIndex = `99`
                    rabbits[2].style.top = `${baseRabbits[2]}%`;



                    if (baseRabbits[2] >= 200) {
                        clearInterval(dropDown3);
                        rabbitWalk(2, chance[randoNumber][2])

                    }
                }
            }, time);
    }, 600)

    setTimeout(() => {
        if (rabbits.length == 4) {
            let dropDown4 = setInterval(
                function () {
                    if (checkNumber[2] == 1) {
                        rabbits[3].style.zIndex = `99`
                        rabbits[3].style.top = `${baseRabbits[3]}%`;

                        baseRabbits[3] = baseRabbits[3] + 2;


                        if (baseRabbits[3] >= 200) {
                            clearInterval(dropDown4);
                            rabbitWalk(3, chance[randoNumber][3])

                        }
                    }
                }, time);
        }
    }, 900)
}
// 兔兔亂走

function rabbitWalk(j, i) {
    let rabbits = document.querySelectorAll(".old")
    let baseRabbits = [200, 200, 200, 200]
    let Ran = [40, 60, 50]
    let baseLeft = [0, 0, 0, 0,]
    let stop0 = 0
    let stop1 = 0
    let stop2 = 0
    let stop3 = 0



    setTimeout(() => {
        console.log("可以點了")
        rabbits.forEach(function (value, index, array) {
            array[index].addEventListener("click", choseRabbit);
        });
    }, 5000);


  
    if (i == 0) {
        let rabbitsDown0 = setInterval(
            function () {
                rabbits[j].style.top = `${baseRabbits[i]}%`;
                rabbits[j].style.left = `${baseLeft[i]}%`
                if ((baseRabbits[i] == 200) && (baseLeft[i] >= -20)) {
                    baseLeft[i] = baseLeft[i] - 0.05;

                }
                else if ((baseRabbits[i] <= 330) && (baseLeft[i] == -20.00000000000015)) {
                    baseRabbits[i] = baseRabbits[i] + 0.5;
                }

                else if ((baseRabbits[i] == 330.5) && (baseLeft[i] <= 8)) {
                    baseLeft[i] = baseLeft[i] + 0.05
                }
                if ((baseRabbits[i] >= 199.5) && (baseLeft[i] == 8.049999999999981)) {
                    baseRabbits[i] = baseRabbits[i] - 0.5;

                }
                if (stop0 == 6000) {
                    clearInterval(rabbitsDown0);
                }
                stop0++
            }, 3);
    }
    if(level<6){
    if (i == 1) {
        let rabbitsDown1 = setInterval(
            function () {
                rabbits[j].style.top = `${baseRabbits[i]}%`;
                rabbits[j].style.left = `${baseLeft[i]}%`
                if ((baseRabbits[i] <= 270) && (baseLeft[i] >= 0)) {
                    baseRabbits[i] = baseRabbits[i] + 0.5;
                }
                else if ((baseRabbits[i] == 270.5) && (baseLeft[i] >= -35)) {
                    baseLeft[i] = baseLeft[i] - 0.05

                }
                else if ((baseRabbits[i] >= 100.5) && (baseLeft[i] == -35.00000000000015)) {
                    {

                        baseRabbits[i] = baseRabbits[i] - 0.5;
                    }
                }
                else if ((baseRabbits[i] == 100) && (baseLeft[i] <= 0)) {
                    baseLeft[i] = baseLeft[i] + 0.05

                    if (baseLeft[i] > 0) {
                        baseLeft[i] = 0
                    }
                }

                // else if((baseRabbits[i]==100)&&(baseLeft[i]<=-300)){
                //     baseLeft[i]=baseLeft[i]-0.05
                // }


                if (stop1 == 6000) {
                    clearInterval(rabbitsDown1);
                }
                stop1++
            }, 3);
    }}
    if(level>=6){
        if (i == 1) {
            let rabbitsDown1 = setInterval(
                function () {
                    rabbits[j].style.top = `${baseRabbits[i]}%`;
                    rabbits[j].style.left = `${baseLeft[i]}%`
                    if ((baseRabbits[i] <= 270) && (baseLeft[i] >= 0)) {
                        baseRabbits[i] = baseRabbits[i] + 0.5;
                    }
                    else if ((baseRabbits[i] == 270.5) && (baseLeft[i] >= -25)) {
                        baseLeft[i] = baseLeft[i] - 0.05
    
                    }
                    else if ((baseRabbits[i] >= 100.5) && (baseLeft[i] == -25.00000000000022)) {
                        {
    
                            baseRabbits[i] = baseRabbits[i] - 0.5;
                        }
                    }
                    else if ((baseRabbits[i] == 100) && (baseLeft[i] <= 0)) {
                        baseLeft[i] = baseLeft[i] + 0.05
    
                        if (baseLeft[i] > 0) {
                            baseLeft[i] = 0
                        }
                    }
    
                    // else if((baseRabbits[i]==100)&&(baseLeft[i]<=-300)){
                    //     baseLeft[i]=baseLeft[i]-0.05
                    // }
    
    
                    if (stop1 == 6000) {
                        clearInterval(rabbitsDown1);
                    }
                    stop1++
                }, 3);
        }
    } if(level<6){
    if (i == 2) {
        let rabbitsDown2 = setInterval(
            function () {
                rabbits[j].style.top = `${baseRabbits[i]}%`;
                rabbits[j].style.left = `${baseLeft[i]}%`
                if ((baseRabbits[i] == 200) && (baseLeft[i] >= -5)) {
                    baseLeft[i] = baseLeft[i] - 0.05;
                }
                else if ((baseRabbits[i] <= 285) && (baseLeft[i] == -5.04999999999999)) {
                    baseRabbits[i] = baseRabbits[i] + 0.5;
                }
                else if ((baseRabbits[i] == 285.5) && (baseLeft[i] >= -45)) {
                    baseLeft[i] = baseLeft[i] - 0.05
                }
                else if ((baseRabbits[i] > 100) && (baseLeft[i] == -45.04999999999958
                )) {
                    baseRabbits[i] = baseRabbits[i] - 0.5;
                }
                else if ((baseRabbits[i] == 100) && (baseLeft[i] <= -5.04999999999999)) {
                    baseLeft[i] = baseLeft[i] + 0.05
                }


                if (stop2 == 6000) {
                    clearInterval(rabbitsDown2);
                }
                stop2++
            }, 3);
    }}
    if(level>=6){
        if (i == 2) {
            let rabbitsDown2 = setInterval(
                function () {
                    rabbits[j].style.top = `${baseRabbits[i]}%`;
                    rabbits[j].style.left = `${baseLeft[i]}%`
                    if ((baseRabbits[i] == 200) && (baseLeft[i] >= -5)) {
                        baseLeft[i] = baseLeft[i] - 0.05;
                    }
                    else if ((baseRabbits[i] <= 285) && (baseLeft[i] == -5.04999999999999)) {
                        baseRabbits[i] = baseRabbits[i] + 0.5;
                    }
                    else if ((baseRabbits[i] == 285.5) && (baseLeft[i] >= -35)) {
                        baseLeft[i] = baseLeft[i] - 0.05
                    }
                    else if ((baseRabbits[i] > 100) && (baseLeft[i] == -35.00000000000015
                    )) {
                        baseRabbits[i] = baseRabbits[i] - 0.5;
                    }
                    else if ((baseRabbits[i] == 100) && (baseLeft[i] <= 20)) {
                        baseLeft[i] = baseLeft[i] + 0.05
                        
                    }
    
    
                    if (stop2 == 6000) {
                        clearInterval(rabbitsDown2);
                    }
                    stop2++
                }, 3);
        }
    }
    if (i == 3) {//路徑還沒改
        let rabbitsDown3 = setInterval(
            function () {

                rabbits[j].style.top = `${baseRabbits[i]}%`;
                rabbits[j].style.left = `${baseLeft[i]}%`
                if ((baseRabbits[i] == 200) && (baseLeft[i] >= -30)) {
                    baseLeft[i] = baseLeft[i] - 0.05;

                }
                else if ((baseRabbits[i] <= 330) && (baseLeft[i] == -30.00000000000029)) {
                    baseRabbits[i] = baseRabbits[i] + 0.5;

                }
                else if ((baseRabbits[i] == 330.5) && (baseLeft[i] <= -30.000000000000)) {
                    baseLeft[i] = baseLeft[i] + 0.05;
                }

                else if ((baseRabbits[i] >= 110.5) && (baseLeft[i] == -29.95000000000029)) {
                    baseRabbits[i] = baseRabbits[i] - 0.5;
                }


                if (stop3 == 6000) {
                    clearInterval(rabbitsDown3);
                }
                stop3++
            }, 3);
    }
}
// 可以選擇
function choseRabbit() {

    clickRabbits = clickRabbits + 1
    reset.style.visibility = "visible"
    this.style.visibility = "hidden"
    choseAns = document.querySelectorAll(".noAns")
    choseAns[numberOfRabbits].classList
        .add(this.classList[1])
    numberOfRabbits++
    if (numberOfRabbits == choseAns.length) {
        goHome.style.visibility = "visible"
    }
    Answer.push(this.classList[1])
    // console.table(Answer)
}
// 按下回家
function checkAns() {
    count++
    let trueAns = Array.from(document.querySelectorAll(".old"))
    // 不可以在點擊兔兔了
    trueAns.forEach(function (rabbit) {
        rabbit.removeEventListener('click', choseRabbit);
    });

    if (level >= 6) {
        trueAns.reverse()
        // 反轉
        // console.table(trueAns)
    }
    let check = false

    if (trueAns.length != clickRabbits) {
        noticeinformation(0)
        return
    }


    for (let i = 0; i < trueAns.length; i++) {



        if ((trueAns[i].classList[1]) != (Answer[i])) {
            clearInterval(thirddMove)
            noticeinformation(1)
            return false
        }
    }
    chat()
}
// 按下重排
function resetRabbits() {
    clickRabbits = 0
    reset.style.visibility = "hidden"
    let trueAns = document.querySelectorAll(".old")
    let noAns = document.querySelectorAll(".noAns")
    trueAns.forEach((value, index, array) => {
        array[index].style.visibility = "visible"
    })
    noAns.forEach((value, index, array) => {
        let classlist = array[index].classList;
        if (classlist.length > 2) {
            let lastClass = classlist[2];
            classlist.remove(lastClass);
        }
    });

    numberOfRabbits = 0
    Answer.length = 0
}
// 過關
function chat() {

    checkIknow=1

    reset.style.visibility = "hidden"
    level++
    if(level>=6){
        chance=[[0,3,2,1],[0,3,2,1],[1,3,0,2],[1,3,0,2]]
     }
    count = 0
    clickRabbits = 0
    clearInterval(thirddMove)
    numberOfRabbits = 0
    Answer.length = 0
    if (level == 11) {
        noticeinformation(11)
        return
    }
    score.textContent = `分數:${level - 1}0`
    if (level == 6) {
        noticeinformation(6)
    }
    else if (level >= 6) {
        station.style = "left:5%;top:0%"
        document.dispatchEvent(new Event("gameing"))
    }
    else {
        document.dispatchEvent(new Event("gameing"))
    }
}

// 訊息相關
function noticeinformation(i) {
    checkIknow=0
    notice.style.visibility = "visible"
    let trueAns = Array.from(document.querySelectorAll(".old"))
    if (level >= 6) {
        trueAns.reverse()
    }
    let yourAns = document.querySelectorAll(".noAns")
    let rightRext = ""
    let youtText = ""
   
    for (j = 0; j < trueAns.length; j++) {
        rightRext += `${AnswerCard[trueAns[j].classList[1]]} `
        youtText += `${AnswerCard[yourAns[j].classList[2]]} `
    }
    if (i == 0) {
        iknow.style.visibility = "visible"
        noticeText.innerHTML = `糟糕！車子走了！<br>
        正確順序為：${rightRext}<br>`
    }
    if (i == 1) {
        iknow.style.visibility = "visible"
        noticeText.innerHTML = `順序錯誤，火車不動了<br>
        正確順序為：${rightRext}<br>
        您的順序為：${youtText}。`
    }
    if (i == 6) {
        noticeText.innerHTML = `現在的座位安排方式為：
        後下車就先上車喔`
        iknow.style.visibility = "hidden"
        let iknow2 = document.querySelector(".iknow2")
        iknow2.style.visibility = "visible"

    }    if (i == 11) {
        noticeText.innerHTML = `恭喜您過關囉！<br>
        `
        iknow.style.visibility = "visible"
        iknow.innerHTML="再次挑戰！"


    }

}
//  第六關
function level6() {checkIknow=0
    station.style = "left:5%;top:0%"
    iknow2.style.visibility = "hidden"
    document.dispatchEvent(new Event("gameing"))
    notice.style.visibility="hidden"
}

// 事件監聽
iknow2.addEventListener("click", level6)
iknow.addEventListener("click", start)
document.addEventListener("gameing", gameing)
document.addEventListener("moveCar", moveCar)
document.addEventListener("rabbitsDown", function () {
    // 0.5 秒後執行 rabbitsDown 函數
    setTimeout(rabbitsDown, 500);
});
reset.addEventListener("click", resetRabbits)
goHome.addEventListener("click", checkAns)
// document.addEventListener("gohome",()=>{
//     // 第一隻兔子落下三秒後出發
//     setTimeout(goToHome,3000)
// })