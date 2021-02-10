let board
let player = 0
let turnNum = 0 
let counter
let currentPlayer 
let htmlBoard = [[]]
const columnOneButton = document.getElementById("column-0-button")
const columnTwoButton = document.getElementById("column-1-button")
const columnThreeButton = document.getElementById("column-2-button")
const columnFourButton = document.getElementById("column-3-button")
const columnFiveButton = document.getElementById("column-4-button")
const columnSixButton = document.getElementById("column-5-button")
const columnSevenButton = document.getElementById("column-6-button")

const isNull = (element) => element == null

function initGame () {
    board = [[null,null,null,null,null,null],[null,null,null,null,null,null],[null,null,null,null,null,null],[null,null,null,null,null,null],[null,null,null,null,null,null],[null,null,null,null,null,null],[null,null,null,null,null,null]]
    htmlBoard[0] = [document.getElementById("column-0-row-0"),document.getElementById("column-0-row-1"),document.getElementById("column-0-row-2"),document.getElementById("column-0-row-3"),document.getElementById("column-0-row-4"),document.getElementById("column-0-row-5")]
    htmlBoard[1] = [document.getElementById("column-1-row-0"),document.getElementById("column-1-row-1"),document.getElementById("column-1-row-2"),document.getElementById("column-1-row-3"),document.getElementById("column-1-row-4"),document.getElementById("column-1-row-5")]
    htmlBoard[2] = [document.getElementById("column-2-row-0"),document.getElementById("column-2-row-1"),document.getElementById("column-2-row-2"),document.getElementById("column-2-row-3"),document.getElementById("column-2-row-4"),document.getElementById("column-2-row-5")]
    htmlBoard[3] = [document.getElementById("column-3-row-0"),document.getElementById("column-3-row-1"),document.getElementById("column-3-row-2"),document.getElementById("column-3-row-3"),document.getElementById("column-3-row-4"),document.getElementById("column-3-row-5")]
    htmlBoard[4] = [document.getElementById("column-4-row-0"),document.getElementById("column-4-row-1"),document.getElementById("column-4-row-2"),document.getElementById("column-4-row-3"),document.getElementById("column-4-row-4"),document.getElementById("column-4-row-5")]
    htmlBoard[5] = [document.getElementById("column-5-row-0"),document.getElementById("column-5-row-1"),document.getElementById("column-5-row-2"),document.getElementById("column-5-row-3"),document.getElementById("column-5-row-4"),document.getElementById("column-5-row-5")]
    htmlBoard[6] = [document.getElementById("column-6-row-0"),document.getElementById("column-6-row-1"),document.getElementById("column-6-row-2"),document.getElementById("column-6-row-3"),document.getElementById("column-6-row-4"),document.getElementById("column-6-row-5")]
    return board
}

function setPlayer (turnNum) {
    let newPlayer 
    if (turnNum % 2){
        newPlayer = 1
    } else if ((turnNum+1) % 2) {
        newPlayer = 2
    }
    return newPlayer

}

function setCounter (turnNum) {
    let newCounter 
    if (turnNum % 2){
        newCounter = "Red"
    } else if ((turnNum+1) % 2) {
        newCounter = "Yellow"
    }
    return newCounter

}

function placeCounter(board, htmlBoard, input) {
    turnNum++
    currentPlayer = setPlayer(turnNum)
    currentCounter = setCounter(turnNum)
    
    let chosenCollumnJS = board[input]
    let chosenCollumnHtml = htmlBoard[input]
    
    let rowPosition = chosenCollumnJS.findIndex(isNull)
    
    
    
    console.log(rowPosition);
    chosenCollumnJS[rowPosition] = currentCounter
    chosenCollumnHtml[rowPosition].style.background = currentCounter
    // console.log(board);
    
    checkVerticalWin(chosenCollumnJS)
    if (isCollumnFull(chosenCollumnJS, input)) {

        return
    }
    // resetHtmlBoard()
}

function isCollumnFull (chosenCollumn, input) {
    // blur button so not clickable

    if(chosenCollumn[5] !== null){

        if (input === 0) {
            columnOneButton.disabled = true
        } else if (input === 1) {
            columnTwoButton.disabled = true
        } else if (input === 2) {
            columnThreeButton.disabled = true
        } else if (input === 3) {
            columnFourButton.disabled = true
        } else if (input === 4) {
            columnFiveButton.disabled = true
        } else if (input === 5) {
            columnSixButton.disabled = true
        } else if (input === 6) {
            columnSevenButton.disabled = true
        }

        return true
    }
}

function checkVerticalWin(chosenCollumnJS) {
    let column = []
    console.log(column);    

    for (let i = 0; i < chosenCollumnJS.length; i++) {
        column.push(chosenCollumnJS[i])
    };

    for (let i = 0; i < column.length; i++) {
        if (column[i] !== null && column[i] === column[i+1] && column[i+1] === column[i+2] && column[i+2] === column[i+3]){
            win()
        }  
    }

}

function disableButtons () {
    columnOneButton.disabled = true
    columnTwoButton.disabled = true
    columnThreeButton.disabled = true
    columnFourButton.disabled = true
    columnFiveButton.disabled = true
    columnSixButton.disabled = true
    columnSevenButton.disabled = true
}

function win () {
    disableButtons()
    setTimeout(resetPage,5000)
    alert(`The Winner is ${currentCounter}`)
}

function resetPage () {

    location.reload()
}


initGame()


