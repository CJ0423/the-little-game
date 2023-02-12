// 開始按鈕
const startBtn = document.querySelector(".btn-start")
const backgroun = document.querySelector(".all")
const station = document.querySelector(".station-img")
const rabbits = document.querySelector('.rabbits')
const goToNext = document.querySelector('.go-to-next')
let level = 0
let canCheck = false
let answer = []
function start() {
    canCheck = false
    level = 1
    car=0
    console.log(level)
    startBtn.style = "visibility:hidden"
    // 進入到遊戲中
    document.dispatchEvent(new Event("gameing"))
}
function chat() {
    car=0
    canCheck = false
    if (level == 10) { return }
    level++
    console.log(level)
    document.dispatchEvent(new Event("gameing"))

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
        <div class="rabbit ${randomColors[j]}"></div>
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
        baseleft = baseleft - 0.3;
        rabbits.style.left = baseleft + "%";
        if (baseleft <= 60) {
            clearInterval(startMoveRabbit);
        }
    }, 30);
    document.dispatchEvent(new Event("rabbitsDown"));

    let cars = document.querySelectorAll(".car");
    let Newbaseleft = 0;
    let startMoveCars;

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

    setTimeout(() => {
        canCheck = true;
        document.dispatchEvent(new Event("go"))
        goToNext.style = "visibility:visible"
    }, 21000);
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

        let direction = Math.floor(Math.random() * 7);
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
            case 1: case 6:
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
    console.table(rabbitCar)
   
    // 請幫我修改到這邊

    if (canCheck) {
        let answerIndex = answer.indexOf(this.classList[1]);
        if (answerIndex !== -1) {
            console.log("出去")
            // car=car-1
            answer[answerIndex] = null
            console.table(answer)

        } else {
            this.style.visibility="hidden"
            console.log(car)
            if(rabbitCar.length==4){
            rabbitCar[car].innerHTML += `<div class="rabbit ${this.classList[1]} no no4"></div>`;}
            else if(rabbitCar.length==3){
                rabbitCar[car].innerHTML += `<div class="rabbit ${this.classList[1]} no no3"></div>`;}
            
            let oldRabbits=document.querySelectorAll(".rabbit")
            oldRabbits[0].addEventListener("click",add)
            oldRabbits[1].addEventListener("click",add)
            oldRabbits[2].addEventListener("click",add)
            if(rabbitCar.length==4){
            oldRabbits[3].addEventListener("click",add)}
            car=car+1

            // 請幫我修改

            // 到這邊
            let emptyIndex = answer.indexOf(null);
            if (emptyIndex !== -1) {
                answer[emptyIndex] = this.classList[1];
            } else {
                answer.push(this.classList[1]);
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
}
// 車車出發按鈕檢核正確與否
goToNext.addEventListener("click", checkAnswer)
function checkAnswer() {
    let trueAnswer = document.querySelectorAll(".no");
    let trueAnswerArray = [];



    let check=true
    for (let i = 0; i < trueAnswer.length; i++) {
        let className = trueAnswer[i].classList[1];
        trueAnswerArray.push(className);
    }

    console.log(trueAnswerArray)
    console.log(answer.length)
    if (answer.length != trueAnswerArray.length) {
        check= false
    }
    for (i = 0; i < trueAnswerArray.length; i++) {
        if (answer[i] != trueAnswerArray[i]) {
            check= false
        }
    }
if(check){
    console.log("回答正確")
    chat()
}    
else{
    console.log("回答錯誤")
}
}