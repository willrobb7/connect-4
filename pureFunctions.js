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

const isNull = (element) => element == null


function createColumn (chosenCollumnJS) {
    let column = []

    for (let i = 0; i < chosenCollumnJS.length; i++) {
        column.push(chosenCollumnJS[i])
    };
    return column
}

function createRow (board, rowPosition) {
    let row = []

    for (i=0; i < board.length; i++){
        row.push(board[i][rowPosition])
    }
    return row
}

module.exports= {setPlayer, setCounter, isNull, createColumn, createRow}