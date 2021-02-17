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



function placeCounter(board, htmlBoard, input) {

    turnNum++

    currentPlayer = setPlayer(turnNum)
    currentCounter = setCounter(turnNum)
    
    let chosenCollumnJS = board[input]
    let chosenCollumnHtml = htmlBoard[input]
    let rowPosition = chosenCollumnJS.findIndex(isNull)
    
    chosenCollumnJS[rowPosition] = currentCounter
    chosenCollumnHtml[rowPosition].style.background = currentCounter
    
    checkAllPossibleWins(chosenCollumnJS, board, rowPosition)
    if (isCollumnFull(chosenCollumnJS, input)) {

        return
    }
}

function checkAllPossibleWins (chosenCollumnJS, board, rowPosition) {
    if (checkHorizontalWin(board, rowPosition)) {
        return
    }
    if (checkVerticalWin(chosenCollumnJS)) {
        return
    }
    if (getDiagonalArrays(board)) {
        return
    }
}


function getDiagonalArrays (board) {
// console.log(board[0][3])
    let diagonalOne = [(board[0][3]),(board[1][2]), (board[2][1]), (board[3][0]) ]
    let diagonalTwo = [(board[0][4]),(board[1][3]), (board[2][2]), (board[3][1]), (board[4][0]) ]
    let diagonalThree = [(board[0][5]),(board[1][4]), (board[2][3]), (board[3][2]), (board[4][1]) ,  (board[5][0]) ]
    let diagonalFour = [(board[1][5]),(board[2][4]), (board[3][3]), (board[4][2]), (board[5][1]) ,  (board[6][0]) ]
    let diagonalFive = [(board[2][5]),(board[3][4]), (board[4][3]), (board[5][2]), (board[6][1]) ]
    let diagonalSix = [(board[3][5]),(board[4][4]), (board[5][3]), (board[6][2])]
    let diagonalSeven = [(board[0][2]),(board[1][3]), (board[2][4]), (board[3][5])]
    let diagonalEight = [(board[0][1]),(board[1][2]), (board[2][3]), (board[3][4]), (board[4][5]) ]
    let diagonalNine = [(board[0][0]),(board[1][1]), (board[2][2]), (board[3][3]), (board[4][4]), (board[5][5]) ]
    let diagonalTen = [(board[1][0]),(board[2][1]), (board[3][2]), (board[4][3]), (board[5][4]), (board[6][5]) ]
    let diagonalEleven = [(board[2][0]),(board[3][1]), (board[4][2]), (board[5][3]), (board[6][4])]
    let diagonalTwelve = [(board[3][0]),(board[4][1]), (board[5][2]), (board[6][3])]
    let libraryOfDiagonals = [diagonalOne,diagonalTwo,diagonalThree, diagonalFour, diagonalFive, diagonalSix, diagonalSeven,diagonalEight,diagonalNine,diagonalTen,diagonalEleven, diagonalTwelve]
    checkDiagonalWin(libraryOfDiagonals)
}

function isCollumnFull (chosenCollumn, input) {

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

function checkDiagonalWin (libraryOfDiagonals) {
    for (let i = 0; i < libraryOfDiagonals.length; i++) {
        const currentDiagonal = libraryOfDiagonals[i];
        for (let j = 0; j < currentDiagonal.length; j++) {
            if (currentDiagonal[j] !== null && currentDiagonal[j] === currentDiagonal[j+1] && currentDiagonal[j+1] === currentDiagonal[j+2] && currentDiagonal[j+2] === currentDiagonal[j+3]){
                win()
                return true
            }  

        }
    
    }
}

function checkVerticalWin(chosenCollumnJS) {

    for (let i = 0; i < chosenCollumnJS.length; i++) {
        if (chosenCollumnJS[i] !== null && chosenCollumnJS[i] === chosenCollumnJS[i+1] && chosenCollumnJS[i+1] === chosenCollumnJS[i+2] && chosenCollumnJS[i+2] === chosenCollumnJS[i+3]){
            win()
            return true
        }  
    }

}

function checkHorizontalWin (board, rowPosition) {

    let row = createRow(board, rowPosition)

    for ( i = 0; i < row.length; i++) {
        if (row[i] !== null && row[i] === row[i+1] && row[i+1] === row[i+2] && row[i+2] === row[i+3]){
            win()
            return true
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
    setTimeout(resetPage,3000)
    alert(`The Winner is ${currentCounter}`)
}

function resetPage () {

    location.reload()
}


initGame()
