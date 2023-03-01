// 關卡設定
let notice = 11
let countdown //計時器
let teacher = document.querySelector(".teacher")
let teacherLeft = document.querySelector(".teacher-left")
let fallSucTeacher = document.querySelector(".fall-suc-teacher")
let trueAnswer = document.querySelector(".true-answer")
let text = document.querySelector(".text")
let answerText = document.querySelector(".answer-text")
console.log(answerText)
console.log(trueAnswer)
var scoreNumber = 0
let canpause = true
let btns = document.querySelector(".btns")
let result
let timer
const allimg = document.querySelector(".allimg")
let enterButton=1
let startX, startY, currentX, currentY;
let angle = 0;


// 阻止瀏覽器下拉刷新功能
document.body.addEventListener('touchmove', function(e) {
  e.preventDefault();
}, { passive: false });


// // 控制出現的紅色箭頭
// let A = document.querySelector(".a");
// let B = document.querySelector(".b");
// let C = document.querySelector(".c");
// let D = document.querySelector(".d");
// let E = document.querySelector(".e");
// let F = document.querySelector(".f");
// let G = document.querySelector(".g");
// let H = document.querySelector(".h");
// let I = document.querySelector(".i");
// let J = document.querySelector(".j");
// let K = document.querySelector(".k");
// let L = document.querySelector(".l");
// let M = document.querySelector(".m");
// let N = document.querySelector(".n");
// let O = document.querySelector(".o");
// let P = document.querySelector(".p");
// let Q = document.querySelector(".q");
// let R = document.querySelector(".r");
// let S = document.querySelector(".s");
// let T = document.querySelector(".t");
// let U = document.querySelector(".u");
// let V = document.querySelector(".v");
// let W = document.querySelector(".w");
// let X = document.querySelector(".x");
// let Y = document.querySelector(".y");
// let Z = document.querySelector(".z");

// // 控制出現的紅色箭頭完成
//const alphabet = "1234567891234567891234567891234567891"
const alphabet = "UVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDE".split("");
console.log(alphabet);
let answer = []
let apple = [6, 21, 21, 17, 10]
let banana = [7, 6, 19, 6, 19, 6]
let grape = [12, 23, 6, 21, 10]
let lemon = [17, 10, 18, 20, 19]
let mango = [18, 6, 19, 12, 20]
let orange = [20, 23, 6, 19, 12, 10]
let papaya = [21, 6, 21, 6, 30, 6]
let peach = [21, 10, 6, 8, 13]
let pear = [21, 10, 6, 23]
let strawberry = [24, 25, 23, 6, 28, 7, 10, 23, 23, 30]

let fruits = [apple, banana, grape, lemon, mango, orange, papaya, peach, pear, strawberry];
function iknowClick() {
  console.log(play)
  if(play==3){
    console.log("音樂")
    bgm.play()
    play=1
  }
  // 第一次洗牌
  noticeBox.style.visibility = "hidden"

  if (notice == 11) {
    scoreNumber = 0
    score.innerHTML = `${scoreNumber}`
    console.log("洗牌")

    for (draw = 0; draw <= 50; draw++) {
      let targetA = Math.floor(Math.random() * 10);
      let targetB = Math.floor(Math.random() * 10);

      let temp = fruits[targetA];
      fruits[targetA] = fruits[targetB];
      fruits[targetB] = temp
      teacher.src = `../img/notice/notice.svg`;
    };
    notice = 1;
    teacher.style.width = "100%"
    continueGame()
    return
  }
  console.table(fruits)

  // 傳輸到各種程式


}
// 文字
function continueGame() {
   startX, startY, currentX, currentY;
   angle = 0;
  canpause = false//這是新增的
   enterButton=1
  clearInterval(timer)
  canMove = false
  textBox.value = ""
  disc.style.transform = `rotate(0deg)`
  if (notice == 11) {
    if(scoreNumber==100){
    noticeBox.style.visibility = "visible"
    noticeBoxText.innerHTML = `恭喜您全部過關囉！`}
    else{
      console.log(scoreNumber)
      noticeBox.style.visibility = "visible"
    noticeBoxText.innerHTML = `答對${scoreNumber/10}題，繼續加油！`}

    iknow.innerHTML = "再次挑戰"
    return
  }
  teacherLeft.style.visibility = "visible"

  reset.style.visibility = "visible"
  noticeInGame.style.visibility = "visible"
  canpause = true

  enter.style.visibility = "visible"
  continueBtn.style.visibility = "hidden"
  playerText.style.visibility = "hidden"
  // 中間的部分
  trueAnswer.style.display = "none"
  textBox.style.display = "block"
  answerText.style.display = "block"
  // 中間的部分
  // 關閉紅色箭頭
  answer.forEach((value, index, array) => {
    let element = document.querySelector(`.${value.toLowerCase()}`); // 找到對應的 DOM 元素
    if (element) {
      element.style.display = "none"; // 設置元素的可見性
    }
  })
  // 關閉紅色箭頭
  notice = notice
  console.log(notice)
  level.innerHTML = `第${notice}關`
  console.log(notice)
  result = 0;
  while (result === 0) {
    result = Math.floor(Math.random() * 11) - 5;
  }
  console.log(result);


  // 解碼與亂碼系統
  answer = [];
  let passwordValue = []
  if (notice <= 10) {
    fruits[notice - 1].forEach(function (index) {

      passwordValue.push(alphabet[index - (result)])
      answer.push(alphabet[index]);
    });
    passwordValue = (passwordValue.join(""));
    console.log("正確答案：" + answer.join(""));
  }


  password.innerHTML = passwordValue
  information.innerHTML = result
  clearInterval(countdown);
  slowTime()

  // 新的click事件監聽器
  disc.addEventListener("click", handleClick);

  // 新的mousemove事件監聽器
  disc.addEventListener("mousemove", handleMousemove);

  // 新的touchmove事件監聽器
  disc.addEventListener("touchstart", enableDiscMovement);
disc.addEventListener("touchmove", handleDiscMovement);


}

// 倒數計時

let time = document.querySelector(".time")

function slowTime() {
  let count = 60;
  countdown = setInterval(function () {
    count--;
    time.innerHTML = count
    if (count === 0) {
      clearInterval(countdown);
      check()
    }
  }, 1000);
}

// 旋轉
// // 跟隨滑鼠
function handleClick(e) {
  canMove = !canMove;
}

// 定義mousemove事件的處理函數
function handleMousemove(event) {
  if (!canMove) {
    return;
  }

  const x = event.clientX;
  const y = event.clientY;
  const centerXmouse = disc.offsetWidth / 2;
  console.log(centerXmouse)
  const centerYmouse = disc.offsetHeight / 2;

  let angle = Math.atan2(y - centerYmouse, x - centerXmouse) * (180 / Math.PI);
  if (angle < 0) {
    angle += 360;
  }
  disc.style.transform = `rotate(${angle}deg)`;
}

// 定義touchmove事件的處理函數
// function handleTouchmove(event) {
//   const x = event.touches[0].clientX;
//   const y = event.touches[0].clientY;
//   const centerX = disc.offsetWidth / 2;
//   const centerY = disc.offsetHeight / 2;

//   let angle = Math.atan2(y - centerY, x - centerX) * (180 / Math.PI);
//   disc.style.transform = `rotate(${angle < 0 ? angle + 360 : angle}deg)`;
// }

// 新版的


function enableDiscMovement(event) {
  startX = event.touches[0].clientX;
  startY = event.touches[0].clientY;
}

function handleDiscMovement(event) {
   centerY = rect.top + rect.height / 2;
   centerX = rect.left + rect.width / 2;
console.log(centerY)
  currentX = event.touches[0].clientX;
  currentY=event.touches[0].clientY
  let deltaX = startX - currentX;
 
 if((startY<centerY)&&(currentY>=centerY)){
  angle += deltaX / 3;
 }
 else if((startY>centerY)&&(currentY<=centerY)){
  angle -= deltaX / 3;
 }
 
 else if((centerY>startY)){
    // startX=
  angle -= deltaX / 3;}
  
  else if(centerY<startY){
    angle += deltaX / 3;
  }
  startX = currentX;

  disc.style.transform = `rotate(${angle}deg)`;
}







// 新版的




// let canMove = false;

// disc.addEventListener("click", (e) => {
//   canMove = !canMove;
// });

// disc.addEventListener("mousemove", function (event) {
//   if (!canMove) {
//     return;
//   }

//   const x = event.clientX;
//   const y = event.clientY;
//   const centerX = disc.offsetWidth / 2;
//   console.log(centerX)
//   const centerY = disc.offsetHeight / 2;

//   let angle = Math.atan2(y - centerY, x - centerX) * (180 / Math.PI);
//   if (angle < 0) {
//     angle += 360;
//   }
//   disc.style.transform = `rotate(${angle}deg)`;
// });

// disc.addEventListener("touchmove", function (event) {
//   const x = event.touches[0].clientX;
//   const y = event.touches[0].clientY;
//   const centerX = disc.offsetWidth / 2;
//   const centerY = disc.offsetHeight / 2;

//   let angle = Math.atan2(y - centerY, x - centerX) * (180 / Math.PI);
//   disc.style.transform = `rotate(${angle < 0 ? angle + 360 : angle}deg)`;
// });





// 跟隨滑鼠

// 點擊旋轉版本
// let deg = 0;
// const disc = document.querySelector(".disc-big");

// disc.addEventListener("click", function(event) {
//   rotate(event.clientX, disc);
// });

// function rotate(x, element) {
//   if (x < window.innerWidth / 2) {
//     setTimeout(() => {
//       deg -= 1;
//       element.style.transform = `rotate(${deg}deg)`;
//     }, 50);
//   } else {
//     setTimeout(() => {
//       deg += 1;
//       element.style.transform = `rotate(${deg}deg)`;
//     }, 50);
//   }
// }



// 




// 確定答案
document.addEventListener("keydown", next);


function next(event) {
  if (canpause) {
    if (event.key === "Enter") {
      if(enterButton==1){
      canpause = true
      enterButton=0
      check()}
      else{//這是新增的
        enterButton=1
        continueGame()
      }
    }
  }

}
function next1() {
  if (canpause) {
    canpause = true
    check()
  }
}
function resetDisc() {
  console.log("有嗎")
  console.log(disc)
  canMove = false
  disc.style.transform = "rotate(0deg)";

}


function check() {
  enterButton=0
  // 移除click事件監聽器
disc.removeEventListener("click", handleClick);

// 移除mousemove事件監聽器
disc.removeEventListener("mousemove", handleMousemove);

// 移除touchmove事件監聽器
disc.removeEventListener("touchstart", enableDiscMovement);
disc.removeEventListener("touchmove", handleDiscMovement);

  canMove = false
  disc.style.transform = `rotate(0deg)`
  clearInterval(countdown);
  // canpause = false 
  console.log(continueBtn)
  continueBtn.style.visibility = "visible"
  enter.style.visibility = "hidden"
  console.log(enter)
  trueAnswer.style.backgroundImage = `url(../img/fruits/${answer.join("")}.jpg)`
  // 中間的顯示
  trueAnswer.style.display = "block"
  textBox.style.display = "none"
  answerText.style.display = "none"
  // 顯示右邊
  // 關卡增加
  notice++

  playerText.style.visibility = "visible"
  if (textBox.value === answer.join("")) {
    rightMusic.play()
    console.log("答對了")
    scoreNumber = scoreNumber + 10

    teacherLeft.style.visibility = "hidden"
    fallSucTeacher.style.backgroundImage = `url(../img/notice/suc.gif)`
    textBox.value = ""
    score.innerHTML = `${scoreNumber}`
    continueBtn.style.visibility = "visible"
    sample.innerHTML = `<br><br>您輸入的答案`
    playerInput.innerHTML = `${answer.join("")}`
  }
  else {
    reset.style.visibility = "hidden"
    noticeInGame.style.visibility = "hidden"
    // 把輪盤轉過去
    disc.style.transform = `rotate(${13.8461538 * result}deg)`

    wrongMusic.play()
    console.log("答錯了")
    console.log(answer)

    // 正確答案出現
    let answerCount = 0
    timer = setInterval(function () {

      if (answerCount < answer.length) {
        let element = document.querySelector(`.${answer[answerCount].toLowerCase()}`);
        if (element) {
          element.style.display = "block"; // 設置元素的可見性
        }
      }
      else {
        clearInterval(timer)
      }
      answerCount++
    }, 300);


    // answer.forEach((value, index, array) => {
    //   let element = document.querySelector(`.${value.toLowerCase()}`); // 找到對應的 DOM 元素
    //   if (element) {
    //     element.style.display= "block"; // 設置元素的可見性
    //   }
    // });
    // 
    // 給予答案反饋
    sample.innerHTML = `解密錯誤！<br>正確答案是：`
    playerInput.innerHTML = `${answer.join("")}`
    teacherLeft.style.visibility = "hidden"
    fallSucTeacher.style.backgroundImage = `url(../img/notice/fall.gif)`
  }

  if (notice == 11) {
    continueGame()
    if(scoreNumber>=6){
      teacher.style.width = "120%"

    pass.play()
    teacher.src = `../img/notice/pass.gif`;}
    if(scoreNumber<6){
      teacher.style.width = "100%"

    notPassMusic.play()
    teacher.src = `../img/notice/tryandtry.svg`;}
  }
}
continueBtn.addEventListener("click", continueGame)
iknow.addEventListener("click", iknowClick)
textBox.addEventListener("input", function () {

  let value = textBox.value;
  let pattern = /^[A-Za-z]+$/;
  if (textBox.value.length === 0) {
    return;
  }
  if (!pattern.test(value)) {
    alert("只能輸入大寫英文字母");
    textBox.value = value.toUpperCase().replace(/[^A-Z]/g, "");
  } else {
    textBox.value = value.toUpperCase();
  }
});

noticeInGame.addEventListener("click", function () {
  noticeBox.style.visibility = "visible"
})
enter.addEventListener("click", next1)
reset.addEventListener("click", resetDisc)
console.log(reset)

textBox.addEventListener("click", adjust)
function adjust() {
  allimg.style.height = "100vh"
}