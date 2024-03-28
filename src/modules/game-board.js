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

GameBoard.prototype.getSquare = function(coordinates) {
    const x = coordinates[0];
    const y = coordinates[1];

    if (x < 0 || x > 7 || y < 0 || y > 7) {
        return null;
    }

    return this.board[x][y];
}

GameBoard.prototype.getTopLeft = function (coordinates) {
    const x = coordinates[0];
    const y = coordinates[1];

    return [x-1, y-2]
    // return this.getSquare([x-1, y-2])
};
GameBoard.prototype.getTopRight = function(coordinates) {
    const x = coordinates[0];
    const y = coordinates[1];

    return [x+1, y-2];
    // return this.getSquare([x+1, y-2])
};
GameBoard.prototype.getMidTopLeft = function(coordinates) {
    const x = coordinates[0];
    const y = coordinates[1];

    return [x-2, y-1];
    // return this.getSquare([x-2, y-1])
};
GameBoard.prototype.getMidTopRight = function(coordinates) {
    const x = coordinates[0];
    const y = coordinates[1];

    return [x+2, y-1];
    // return this.getSquare([x+2, y-1])
};
GameBoard.prototype.getMidBottomLeft = function(coordinates) {
    const x = coordinates[0];
    const y = coordinates[1];

    return [x-2, y+1]
    // return this.getSquare([x-2, y+1])
};
GameBoard.prototype.getMidBottomRight = function(coordinates) {
    const x = coordinates[0];
    const y = coordinates[1];

    return [x+2, y+1];
    // return this.getSquare([x+2, y+1])
};
GameBoard.prototype.getBottomLeft = function(coordinates) {
    const x = coordinates[0];
    const y = coordinates[1];

    return [x-1, y+2]
    // return this.getSquare([x-1, y+2]);
};
GameBoard.prototype.getBottomRight = function(coordinates) {
    const x = coordinates[0];
    const y = coordinates[1];

    return [x+1, y+2]
    // return this.getSquare([x+1, y+2])
};

export default GameBoard;