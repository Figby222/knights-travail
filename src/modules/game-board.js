import Square from './square.js';
const GameBoard = function() {
    this.board = this.build();
}

GameBoard.prototype.build = function() {
    let boardArr = [];

    for (let x = 0; x < 8; x++) {
        boardArr[x] = [];
        for (let y = 0; y < 8; y++) {
            boardArr[x].push(new Square(x, y));
        }
    }
    return boardArr;
}

GameBoard.prototype.checkSquare = function(coordinates) {
    const x = coordinates[0];
    const y = coordinates[1];

    if (x < 0 || x > 7 || y < 0 || y > 7) {
        return false;
    }

    return true;
}

export default GameBoard;