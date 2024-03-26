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

export default GameBoard;