function startGame() {
    if (this.textContent == "重新開始" || this.textContent == "平手") {
        title.textContent = "圈圈叉叉"
        gameInProgress = true
        player = "o"
        for (let i = 0; i <= 2; i++) {
            for (let j = 0; j <= 2; j++) {
                allGame.removeChild(newDiv[i][j])
            }
        }
    }
    this.textContent = "重新開始"
    this.style = "display:none"
    let gamePC = document.createElement("div")
    gamePC.className = "play-player"
    allGame.appendChild(gamePC)
    gamePC.textContent = "和朋友玩"

    const playComputer = document.querySelector(".play-player")

    let gamePlayer = document.createElement("div")
    gamePlayer.className = "play-computer"
    allGame.appendChild(gamePlayer)
    gamePlayer.textContent = "和電腦玩"

    const playPlayer = document.querySelector(".play-computer")

    document.dispatchEvent(new Event("gameModel"))
    playComputer.addEventListener("click", () => gameModel(0))
    playPlayer.addEventListener("click", () => gameModel(1))


}
function gameModel(model) {
    choseModel = model
    document.dispatchEvent(new Event("createBoard"))
}
function createBoard() {
    let playComputer = document.querySelector(".play-computer")
    let playPlayer = document.querySelector(".play-player")
    allGame.removeChild(playComputer)
    allGame.removeChild(playPlayer)

    for (let i = 0; i <= 2; i++) {
        newDiv[i] = []
        for (let j = 0; j <= 2; j++) {
            newDiv[i][j] = document.createElement("div")
            newDiv[i][j].className = `board newDiv`
            newDiv[i][j].dataset.key = `${i}-${j}`

            allGame.appendChild(newDiv[i][j])
        }
    }
    document.dispatchEvent(new Event("firstChose"))
}

function firstChose() {
    title.textContent = "由您開始！"
    const chose = document.querySelectorAll(".newDiv")
    for (i = 0; i <= 8; i++) {
        if (choseModel == 0) {
            chose[i].addEventListener("click", choseSpace)
        }
        else if (choseModel == 1) {
            chose[i].addEventListener("click", choseSpaceGameForAI)
        }
    }
}
function choseSpace() {
    if (!this.textContent == "") {
        title.textContent = "那一格已經被選過囉！"
        return
    }
    if (player == "o") {
        this.textContent = "O"
        title.textContent = "輪到Ｘ囉"
        checkWin("O")

        return player = "x"
    }
    if (player == "x") {
        this.textContent = "X"
        title.textContent = "輪到Ｏ囉"
        checkWin("X")
        return player = "o"
    }
}



function choseSpaceGameForAI() {
    title.textContent = "輪到你囉"
    choseModel = 1
    if (!gameInProgress) {
        title.textContent = "還沒換你！"
        return
    }
    if (!this.textContent == "") {
        title.textContent = "那一格已經被選過囉！"
        return
    }
    else {
        gameInProgress = false
        this.textContent = "O"
        setTimeout(checkWin, 1300, "O");
    }
}

function AIChoseSpace() {
    let checks = document.querySelectorAll(".newDiv")
    let checkArray = Array.from(checks).filter(check => {
        let text = check.textContent
        return text == ""
    })
    let AISpace = Math.floor(Math.random() * (checkArray.length))
    checkArray[AISpace].textContent = "X"
    choseModel = 0
    gameInProgress = true
    checkWin("X")
}

function checkWin(x) {
    playTime = playTime + 1
    // 最少要五步，才可能有人獲勝
    if (playTime >= 1) {
        let checks = document.querySelectorAll(".newDiv")
        let checkArray = Array.from(checks).map(check => {
            return check.textContent
        });
        // if (
        //     //橫向
        //     (checkArray[0] == checkArray[1] && checkArray[1] == checkArray[2] && checkArray[2] == checkArray[0] && checkArray[0] != "" && checkArray[1] != "" && checkArray[2] != "") ||

        //     (checkArray[3] == checkArray[4] && checkArray[4] == checkArray[5] && checkArray[5] == checkArray[3] && checkArray[3] != "" && checkArray[4] != "" && checkArray[5] != "") ||

        //     (checkArray[6] == checkArray[7] && checkArray[7] == checkArray[8] && checkArray[8] == checkArray[6] && checkArray[6] != "" && checkArray[7] != "" && checkArray[8] != "") ||
        //     //直的
        //     (checkArray[0] == checkArray[3] && checkArray[3] == checkArray[6] && checkArray[6] == checkArray[0] && checkArray[0] != "" && checkArray[3] != "" && checkArray[6] != "") ||

        //     (checkArray[1] == checkArray[4] && checkArray[4] == checkArray[7] && checkArray[7] == checkArray[1] && checkArray[1] != "" && checkArray[4] != "" && checkArray[7] != "") ||

        //     (checkArray[2] == checkArray[5] && checkArray[5] == checkArray[8] && checkArray[8] == checkArray[2] && checkArray[2] != "" && checkArray[5] != "" && checkArray[8] != "") ||
        //     //斜線
        //     (checkArray[0] == checkArray[4] && checkArray[4] == checkArray[8] && checkArray[8] == checkArray[0] && checkArray[0] != "" && checkArray[4] != "" && checkArray[8] != "") ||

        //     (checkArray[2] == checkArray[4] && checkArray[4] == checkArray[6] && checkArray[6] == checkArray[2] && checkArray[2] != "" && checkArray[4] != "" && checkArray[6] != "")
        // ) 
        if (checkHorizontal(checkArray) || checkVertical(checkArray) || checkDiagonal(checkArray)) {
            if (playTime <= 9) {
                title.textContent = `${x}贏了`
                playTime = 0

            }
            document.dispatchEvent(new Event("endGame"))
            return playTime, player

        }
        if (playTime == 9) {
            title.textContent = `平手`
            playTime = 0
            document.dispatchEvent(new Event("endGame"))

        }
    }
    // console.log(playTime)
    if (choseModel == 1) {
        AIChoseSpace()
    }
    return playTime, player
}

function checkHorizontal(arr) {
    console.log(arr)
    for (let i = 0; i < 9; i += 3) {
        if (arr[i] === arr[i + 1] && arr[i + 1] === arr[i + 2] && arr[i] !== '') {
            return true;
        }
    }
    return false;
}
function checkVertical(arr) {
    for (let i = 0; i < 3; i++) {
        if (arr[i] === arr[i + 3] && arr[i + 3] === arr[i + 6] && arr[i] !== '') {
            return true;
        }
    }
    return false;
}
function checkDiagonal(arr) {
    if (arr[0] === arr[4] && arr[4] === arr[8] && arr[0] !== '') {
        return true;
    }
    if (arr[2] === arr[4] && arr[4] === arr[6] && arr[2] !== '') {
        return true;
    }
    return false;
}


function endGame() {
    const chose = document.querySelectorAll(".newDiv")
    for (i = 0; i <= 8; i++) {
        chose[i].removeEventListener("click", choseSpace)
    }
    startBtn.style = "display:block"
}

const title = document.querySelector(".title")
const allGame = document.querySelector("#all-game")
const startBtn = document.querySelector(".start-btn")
var player = "o"
var newDiv = []
var playTime = 0
var choseModel = 0
var gameInProgress = true;


startBtn.addEventListener("click", startGame)
document.addEventListener("createBoard", createBoard)
document.addEventListener("firstChose", firstChose)
document.addEventListener("endGame", endGame)