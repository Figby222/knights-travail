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
    let pastFirst = 0;
    let pastSecond = 0;
    let pastThird = 0;
    let pastFourth = 0;
    let madeIt = 0;
    let moves = [];
    debugger;

    const recursion = function (current, currentMoves = []) {
        // IS IN THE EXE CONTEXT OF MOVE
        // console.log(myBoard.board);
        const currentSquare = myBoard.getSquare(current)
        if (currentSquare == null) {
            return;
        }
        pastFirst++;

        if (currentMoves.length >= moves.length && moves.length > 0) {
            return;
        }
        pastSecond++;

        for (const move of currentMoves) {
            if (JSON.stringify(move) == JSON.stringify(current)) {
                return;
            }
        }
        pastThird++;
        
        
        currentMoves.push(current);
        
        if (JSON.stringify(current) === JSON.stringify(target)) {
            // MAYBE RETURN MINMOVES & COMPARE topLeft, topRight, ETC.
            madeIt++;
            if (moves.length == 0 || currentMoves.length < moves.length) {
                moves = currentMoves;
            }
            return currentMoves;
        }
        pastFourth++;

        console.log(current);
        recursion(myBoard.getTopLeft(current), currentMoves);
        if (JSON.stringify(current) == JSON.stringify(start)) {
            debugger;
            console.log(`Past getTopLeft: ${current}`);
        }
        recursion(myBoard.getTopRight(current), currentMoves);

        recursion(myBoard.getMidTopLeft(current), currentMoves);
        recursion(myBoard.getMidTopRight(current), currentMoves);

        recursion(myBoard.getMidBottomLeft(current), currentMoves);
        recursion(myBoard.getMidBottomRight(current), currentMoves);
        recursion(myBoard.getBottomLeft(current), currentMoves);
        console.log("should be correct: ", current);
        recursion(myBoard.getBottomRight(current), currentMoves);
        // console.log(moves);

        // return bestMoves


    }
    recursion(start);
    console.log({
        pastFirst,
        pastSecond,
        pastThird,
        pastFourth,
        madeIt
    });

    return moves;
}

export default Knight;