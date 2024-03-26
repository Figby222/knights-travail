import GameBoard from './game-board.js';
const Knight = function(coordinates) {
    this.coordinates = coordinates;
    this.x = coordinates[0];
    this.y = coordinates[1];

    // this.topLeft = [x-1, y-2];
    // this.topRight = [x+1, y-2];
    // this.midTopLeft = [x-2, y-1];
    // this.midTopRight = [x+2, y-1];
    // this.midBottomLeft = [x-2, y+1];
    // this.midBottomRight = [x+2, y+1];
    // this.bottomLeft = [x-1, y+2];
    // this.bottomRight = [x+1, y+2];
};

//NOT SURE IF I NEED THESE PROTOTYPE FUNCS YET

Knight.prototype.getTopLeft = function (coordinates) {
    const x = coordinates[0];
    const y = coordinates[1];

    return [x-1, y-2]
};
Knight.prototype.getTopRight = function(coordinates) {
    const x = coordinates[0];
    const y = coordinates[1];

    return [x+1, y-2]
};
Knight.prototype.getMidTopLeft = function(coordinates) {
    const x = coordinates[0];
    const y = coordinates[1];

    return [x-2, y-1]
};
Knight.prototype.getMidTopRight = function(coordinates) {
    const x = coordinates[0];
    const y = coordinates[1];

    return [x+2, y-1]
};
Knight.prototype.getMidBottomLeft = function(coordinates) {
    const x = coordinates[0];
    const y = coordinates[1];

    return [x-2, y+1]
};
Knight.prototype.getMidBottomRight = function(coordinates) {
    const x = coordinates[0];
    const y = coordinates[1];

    return [x+2, y+1]
};
Knight.prototype.getBottomLeft = function(coordinates) {
    const x = coordinates[0];
    const y = coordinates[1];

    return [x-1, y+2]
};
Knight.prototype.getBottomRight = function(coordinates) {
    const x = coordinates[0];
    const y = coordinates[1];

    return [x+1, y+2]
};

Knight.prototype.moveTo = function(start, target) {
    const myBoard = new GameBoard();
    let minMoves;
    let moves = [];

    const recursion = (current, moveCount = 0, currentMoves = []) => {
        if (currentMoves.includes(current) || myBoard.getSquare(current) == null ) {
            return null;
        }
        debugger;

        currentMoves.push(current);

        if (current === target) {
            if (moveCount < minMoves || !(minMoves)) {
                minMoves = moveCount;
                moves = currentMoves;
            }
            return;
        }

        recursion(this.getTopLeft(current), moveCount + 1, currentMoves);
        recursion(this.getTopRight(current), moveCount + 1, currentMoves);

        recursion(this.getMidTopLeft(current), moveCount + 1, currentMoves);
        recursion(this.getMidTopRight(current), moveCount + 1, currentMoves);

        recursion(this.getMidBottomLeft(current), moveCount + 1, currentMoves);
        recursion(this.getMidBottomRight(current), moveCount + 1, currentMoves);

        recursion(this.getBottomLeft(current), moveCount + 1, currentMoves);
        recursion(this.getBottomRight(current), moveCount + 1, currentMoves);


    }

    recursion(start)

    return moves;
}

export default Knight;