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
    let i = 0;
    let moves = [];
    debugger;

    const recursion = (current, currentMoves = []) => {
        i++;
        // IS IN THE EXE CONTEXT OF MOVE
        
        if (myBoard.getSquare(current) == null) {
            return;
        }

        if (currentMoves.length >= moves.length && moves.length > 0) {
            return;
        }

        for (const move of currentMoves) {
            if (JSON.stringify(move) == JSON.stringify(current)) {
                return;
            }
        }
        
        
        currentMoves.push(current);
        
        if (JSON.stringify(current) === JSON.stringify(target)) {
            // MAYBE RETURN MINMOVES & COMPARE topLeft, topRight, ETC.
            console.log(currentMoves);
            if (moves.length == 0 || currentMoves.length < moves.length) {
                moves = currentMoves;
            }
            return currentMoves;
        }

        recursion(this.getTopLeft(current), currentMoves);
        recursion(this.getTopRight(current), currentMoves);

        recursion(this.getMidTopLeft(current), currentMoves);
        recursion(this.getMidTopRight(current), currentMoves);

        recursion(this.getMidBottomLeft(current), currentMoves);
        recursion(this.getMidBottomRight(current), currentMoves);
        recursion(this.getBottomLeft(current), currentMoves);
        recursion(this.getBottomRight(current), currentMoves);
        // console.log(moves);

        // return bestMoves


    }
    recursion(start);
    console.log(i);

    return moves;
}

export default Knight;