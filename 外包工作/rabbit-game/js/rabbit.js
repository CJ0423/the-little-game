// 開始按鈕
const startBtn = document.querySelector(".btn-start")
const backgroun = document.querySelector(".all")
const station = document.querySelector(".station-img")
const rabbits = document.querySelector('.rabbits')
const goToNext = document.querySelector('.go-to-next')
const levelText = document.querySelector(".level")
const textMessage = document.querySelector(".text-message")
const boom = document.querySelector(".boom")
const reset = document.querySelector(".reset")

let checkPassager = false
let level = 9
let canCheck = false
let canCheckCar = false
let answer = []
let carIsrunning
let car=0
function start() {
    canCheck = false
    level = 1
    textMessage.style.visibility = "visible"
    levelText.textContent = `Score:0`
    car = 0
    console.log(level)
    startBtn.style = "visibility:hidden"
    // 進入到遊戲中
    document.dispatchEvent(new Event("gameing"))
}
function chat() {
    car = 0
    canCheck = false
    checkPassager = false
    level++
    if (level == 11) {
        fall(level)
        console.log("地11")
        return
    }

    console.log(level)
    document.dispatchEvent(new Event("gameing"))
    levelText.textContent = `Score:${level - 1}0`
    if (level == 6) {
        console.log("後勁先出")
    }
    if (level >= 9) {
        station.style = "left:5%;top:25%"
        console.log("改變地圖 並且倒車")
    }
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
// 取得車上隨機順序
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
function countCar(i) {
    let randomColors = getRandomNonRepeatingItems(radditColor, i);

    console.log(randomColors);
    let text = ""
    for (j = 0; j < i; j++) {
        text += `<div class="rabbit-car">
        <div class="rabbit ${randomColors[j]} no"></div>
        <div class="car"></div>
    </div>`
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

function gameing() {
    console.log(level)
    rabbits.innerHTML = ""
    rabbits.style = "left:100%"
    if (level <= 3) {
        // 三節車
        let i = 3
        rabbits.innerHTML = countCar(i)
    }

    else if (level <= 5) {
        let i = 4
        // 四和五 四節車
        rabbits.innerHTML = countCar(i)
    }
    else if (level <= 8) {
        let i = 3
        // 六到八  三節車後進先出
        rabbits.innerHTML = countCar(i)
    }
    else if (level <= 10) {
        let i = 4
        // 九到十 四節車 要改地圖
        rabbits.innerHTML = countCar(i)
    }
    document.dispatchEvent(new Event("moveCar"))
}
// 移動車車
document.addEventListener("moveCar", moveCar)
function moveCar() {
    let baseleft = 100;
    let startMoveRabbit = setInterval(() => {

        rabbits.style.left = baseleft + "%";

        if (level >= 9) {
            baseleft = baseleft - 0.5;
            if (baseleft <= 33) {
                console.log("車車要動了嗎")
                clearInterval(startMoveRabbit);
            }
        }
        else {
            baseleft = baseleft - 0.3;
            if (baseleft <= 60) {
                clearInterval(startMoveRabbit);
            }
        }

    }, 30);
    document.dispatchEvent(new Event("rabbitsDown"));

    let cars = document.querySelectorAll(".car");
    let Newbaseleft = 0;
    let startMoveCars;

    // 車子中間移動
    if (level <= 8) {
        setTimeout(() => {
            startMoveCars = setInterval(() => {
                for (i = 0; i < cars.length; i++) {
                    Newbaseleft = Newbaseleft - 0.3;
                    cars[i].style.left = Newbaseleft + "%";
                    if (cars.length == 4) {
                        if (Newbaseleft <= -710) {
                            clearInterval(startMoveCars);
                        }
                    } else if (Newbaseleft <= -610) {
                        clearInterval(startMoveCars);
                    }
                }
            }, 10);
        }, 12000);
    }

    setTimeout(() => {
        canCheck = true;
        canCheckCar = false
        goToNext.style = "visibility:visible"
        reset.style = "visibility:visible"
    }, 21000);
    carIsrunning = setInterval(() => {
        checkAnswer(1)
    }, 32000)
}

// 兔兔下車

document.addEventListener("rabbitsDown", rabbitsDown)

function rabbitsDown() {
    let allrabbits = document.querySelectorAll('.rabbit')

    setTimeout(() => {
        // for(i=0;i<allrabbits.length;i++){
        //     allrabbits[i].style.top=`900%`
        // }
        index = 0
        function dropRabbit(index) {
            setTimeout(() => {
                if (index < allrabbits.length) {
                    let some = 0
                    truePosition = setInterval((
                    ) => {
                        some = some + 5
                        allrabbits[index].style = "z-index:4"
                        allrabbits[index].style.top = `${some}%`
                        if (some > 200) {
                            clearInterval(truePosition)
                            // 將兔兔帶入
                            document.addEventListener(`allrabbits[${index}]`, moveRabbits(allrabbits[index]))
                            dropRabbit(index + 1);
                            document.dispatchEvent(new Event(`allrabbits[${index}]`))
                        }
                    },
                        30)
                }
            }, 400 * index);
        }
        dropRabbit(0);
    }, 5000)
}

// 兔兔移動 
function moveRabbits(rabbit) {
    rabbit.addEventListener("click", add)
    let x = 0;
    let y = 200;
    let maxLeft = -500;
    let maxRight = 0;
    let maxTop = 200;
    let maxBottom = 450;
    let distance = 99
    let check = 0
    let stop = null;
    answer.length = 0

    let intervalId = setInterval(() => {

        let direction = Math.floor(Math.random() * 6);
        if (level >= 9) {
            direction = Math.floor(Math.random() * 8) + 1;
        }
        if (distance > 0) {
            distance = distance - 3
        }
        else if (distance <= 0) {
            clearInterval(intervalId)
        }
        switch (direction) {
            case 0: case 4: case 5:
                // move left
                if (x - distance > maxLeft) {
                    clearInterval(stop);
                    stop = null;
                    check = 0
                    stop = setInterval(() => {
                        check = check + 1
                        x -= distance / 100
                        rabbit.style.left = x + "%";
                        if (check >= 100) {
                            clearInterval(stop)
                            stop = null;
                        }
                    }, 4)
                } else {
                    x = maxLeft;
                    rabbit.style.left = x + "%";
                    clearInterval(stop)
                    if (check >= 100) {
                        clearInterval(stop)
                        stop = null;
                    }
                }
                break;
            case 1: case 6: case 7:
                // move right
                if (x + distance < maxRight) {
                    clearInterval(stop);
                    check = 0
                    stop = setInterval(() => {
                        check = check + 1
                        x += distance / 100
                        rabbit.style.left = x + "%";
                        if (check >= 100) {
                            clearInterval(stop)
                        }
                    }, 3);
                } else {
                    x = maxRight;
                    rabbit.style.left = x + "%";
                    clearInterval(stop)
                    if (check >= 100) {
                        clearInterval(stop)
                    }
                }
                break;
            case 2:
                // move up
                if (y - distance > maxTop) {
                    clearInterval(stop);
                    check = 0
                    stop = setInterval(() => {
                        check = check + 1
                        y -= distance / 100
                        rabbit.style.top = y + "%";
                        if (check >= 100) {
                            clearInterval(stop)
                        }
                    }, 3);
                } else {
                    y = maxTop;
                    rabbit.style.top = y + "%";
                    clearInterval(stop)
                    if (check >= 100) {
                        clearInterval(stop)
                    }
                }
                break;
            case 3:
                // move down
                if (y + distance < maxBottom) {
                    clearInterval(stop);
                    check = 0
                    stop = setInterval(() => {
                        check = check + 1
                        y += distance / 100
                        rabbit.style.top = y + "%";
                        if (check >= 100) {
                            clearInterval(stop)
                        }
                    }, 3);
                } else {
                    y = maxBottom;
                    rabbit.style.top = y + "%";
                    clearInterval(stop)
                    if (check >= 100) {
                        clearInterval(stop)
                    }
                }
                break;
        }
    }, 400);

}
// 記錄點擊的答案
function add() {
    // 請幫我修改
    const rabbitCar = document.querySelectorAll('.rabbit-car');

    console.log(this)
    // 請幫我修改到這邊

    if (canCheck) {
         answerIndex = answer.indexOf(this.classList[1]);
        if (answerIndex !== -1) {
            console.log("出去")
            // car=car-1
            answer[answerIndex] = null
            console.table(answer)

        } else {
            this.style.visibility = "hidden"
            console.log(car)
            if (rabbitCar.length == 4) {

                if (level >= 9) {
                    rabbitCar[car].innerHTML += `<div class="rabbit ${this.classList[1]} no4 level9"></div>`
                }
                else {
                    rabbitCar[car].innerHTML += `<div class="rabbit ${this.classList[1]} no4"></div>`
                };
            }
            else if (rabbitCar.length == 3) {
                rabbitCar[car].innerHTML += `<div class="rabbit ${this.classList[1]} no3"></div>`;
            }

            let oldRabbits = document.querySelectorAll(".no")
            oldRabbits[0].addEventListener("click", add)
            oldRabbits[1].addEventListener("click", add)
            oldRabbits[2].addEventListener("click", add)
            if (rabbitCar.length == 4) {
                oldRabbits[3].addEventListener("click", add)
            }
            car = car + 1

            // 請幫我修改

            // 到這邊
            console.log(`現在是第幾關：1` + level)
            let emptyIndex = answer.indexOf(null);
            if (emptyIndex !== -1) {
                answer[emptyIndex] = this.classList[1];
            } else if (level <= 5) {
                answer.push(this.classList[1]);
            }
            else if (level > 5) {
                answer.unshift(this.classList[1])
            }
            console.table(answer)
        }
    } else {
        return;
    }
}
// 車車出發按鈕
document.addEventListener("go", go)
function go() {
    goToNext.style = "visibility:hidden"
    reset .style = "visibility:hidden"
}
// 車車出發按鈕檢核正確與否
goToNext.addEventListener("click", checkAnswer)
function checkAnswer(y) {
    document.dispatchEvent(new Event("go"))
    let trueAnswer = document.querySelectorAll(".no");
    let trueAnswerArray = [];
    let check = true
    let checkPositon = true
    for (let i = 0; i < trueAnswer.length; i++) {
        let className = trueAnswer[i].classList[1];
        trueAnswerArray.push(className);
    }
    // console.log(trueAnswerArray)
    // console.log(trueAnswer)

    // console.log(trueAnswerArray.length)
    // console.log(trueAnswer.length)

    console.log(trueAnswer.length)
    console.log(trueAnswerArray.length)
    if (answer.length != trueAnswerArray.length) {
        check = false
        checkPositon = false
        console.log("人數不對")
    }
    for (i = 0; i < trueAnswerArray.length; i++) {
        if (answer[i] != trueAnswerArray[i]) {
            check = false
        }
    }
    if (check) {
        console.log("回答正確")
        canCheckCar = true
        clearInterval(carIsrunning)
        successful()//成功車車要開走
    }
    else if (
        //排序不對時間到了人數不對
        (!check && y == 1) && (!checkPositon)
    ) {
        successful()
    }
    else {
        // 排序不對時間到了而且位置不對
        clearInterval(carIsrunning)
        boom.style.visibility = "visible"
        fall(2)
    }
}

function successful() {

    let oldRabbits = document.querySelectorAll(".no")
    oldRabbits[0].removeEventListener("click", add)
    oldRabbits[1].removeEventListener("click", add)
    oldRabbits[2].removeEventListener("click", add)
    if (oldRabbits.length == 4) {
        oldRabbits[3].removeEventListener("click", add)
    }
    let baseleft = 60
    if (level >= 9) {
        baseleft = 33
    }
    let startMoveRabbit = setInterval(() => {
        rabbits.style.left = baseleft + "%";
        if (level >= 9) {
            baseleft = baseleft + 0.5;
            if (baseleft >= 100) {
                clearInterval(startMoveRabbit);

                if (canCheckCar) {
                    console.log("車車回頭")
                    chat()
                }
                else {
                    fall(1)
                    clearInterval(carIsrunning)
                }
            }
        }
        else {
            baseleft = baseleft - 0.3;
            if (baseleft <= 0) {
                clearInterval(startMoveRabbit);
                if (canCheckCar) {
                    if (level == 5) {
                        hint()
                    }
                    else {
                        console.log("hi")
                        chat()
                    }
                }
                else {
                    fall(1)
                    clearInterval(carIsrunning)
                }
            }
        }
    }, 30);
}



function fall(x) {
    if (x == 1) {
        next.style.visibility = "hidden"
        noticeBoxRight.style.visibility = "visible"
        noticeBox.innerHTML = '太糟糕了，我的學生走丟了，請重新開始吧！。'
    }
    if (x == 2) {
        next.style.visibility = "hidden"
        noticeBoxRight.style.visibility = "visible"
        noticeBox.innerHTML = '太糟糕了，學生在車上打架，火車故障了！。'
    }
    // 過關
    if (x == 11) {
        next.style.visibility = "hidden"
        noticeBoxRight.style.visibility = "visible"
        noticeBox.innerHTML = '兔兔們都回到家了！恭喜過關！。'
    }

}



// 教學
const noticeBoxRight = document.querySelector('.notice-box')
const iKnow = document.querySelector('.iknow')
const previous = document.querySelector('.previous')
const next = document.querySelector('.next')
const noticeBox = document.querySelector('.notice-box-text')
let textLevel = 0

iKnow.addEventListener("click", close)
previous.addEventListener('click', preview)
next.addEventListener('click', nextText)
function close() {
    // goToNext.style = "visibility:hidden"
    // reset .style = "visibility:hidden"
    textLevel = 0
    noticeBoxRight.style.visibility = "hidden"
    previous.style.visibility = "hidden"
    if (noticeBox.innerHTML === `現在的座位安排方式為：<br>後下車就先上車喔`) {
        console.log("hi"
        )
        chat()
        return
    }
    if (noticeBox.innerHTML = '太糟糕了，學生在車上打架，火車故障了！。') {
        boom.style.visibility = 'hidden'
    }

    if (noticeBox.innerHTML = '兔兔們都回到家了！恭喜過關！。') {
    }
    station.style = "left:unset;top:30%"
    startBtn.style.visibility = "visible"

    noticeBox.innerHTML = '嗨！我是兔兔老師。我的兔兔學生等等會到草地玩耍，但是他們很常會忘記上車的時間。'

}

function preview() {
    textLevel = textLevel - 1
    if (textLevel == 0) {
        previous.style.visibility = "hidden"
        noticeBox.innerHTML = '嗨！我是兔兔老師。我的兔兔學生等等會到草地玩耍，但是他們很常會忘記上車的時間。'
    }
    if (textLevel == 1) {

        noticeBox.innerHTML = '所以我希望你可以協助我提醒他們上車。'
    }
    if (textLevel == 2) { noticeBox.innerHTML = '不過由兔兔學生們年紀還小，可能會因為沒有坐到喜歡的位置而吵架。' }
    if (textLevel == 3) { noticeBox.innerHTML = '所以安排座位時一定要聽從我的指示喔！' }
    if (textLevel == 4) {
        noticeBox.innerHTML = '那麽現在的座位安排方式為：'
        next.style.visibility = "visible"
    }


}

function nextText() {
    textLevel = textLevel + 1
    if (textLevel == 1) {
        previous.style.visibility = "visible"
        noticeBox.innerHTML = '所以我希望你可以協助我提醒他們上車。'
    }

    if (textLevel == 2) { noticeBox.innerHTML = '不過由兔兔學生們年紀還小，可能會因為沒有坐到喜歡的位置而吵架。' }
    if (textLevel == 3) { noticeBox.innerHTML = '所以安排座位時一定要聽從我的指示喔！' }
    if (textLevel == 4) { noticeBox.innerHTML = '那麽現在的座位安排方式為：' }
    if (textLevel == 5) {
        next.style.visibility = "hidden"
        noticeBox.innerHTML = '先下車就先上車'
    }
}
// 中間的提示
function hint() {
    noticeBoxRight.style.visibility = "visible"
    next.style.visibility = "hidden"
    previous.style.visibility = "hidden"
    noticeBox.innerHTML = '現在的座位安排方式為：<br>後下車就先上車喔'
    level = 5
}

// 重新排列
reset.addEventListener("click", resetCheck)
function resetCheck() {
    let rabbits=document.querySelectorAll(".no")
    rabbits.forEach(function(rabbit){
        rabbit.style.visibility="visible"
    })
    if ((level > 3) && (level <= 5) || (level >= 9)) {
        let elements = document.querySelectorAll(".no4");
        elements.forEach(function(element) {
          element.parentNode.removeChild(element);
        });
    }
    else{
        let elements = document.querySelectorAll(".no3");
        elements.forEach(function(element) {
          element.parentNode.removeChild(element);
        });
    }
    answer.length=0
    console.table(answer)
    car=0
}
