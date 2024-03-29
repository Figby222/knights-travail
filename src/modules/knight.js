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
    let minMoves = [];
    let queue = [];
    let i = 0;
    queue.push([start, []])
    
    while (queue[i]) {
        const current = Object.assign([], queue[i])
        const currentCoords = Object.assign([], current[0]);
        const currentMoves = Object.assign([], current[1]);
        

        i++;
        if (currentMoves.length >= minMoves.length && minMoves.length > 0) {
            continue;
        }        
        const currentSquare = myBoard.getSquare(currentCoords)
        if (currentSquare == null) {
            continue;
        }
        
        for (const move of currentMoves) {
            if (JSON.stringify(move) == JSON.stringify(currentCoords)) {
                continue;
            }
        }
       currentMoves.push(currentCoords);
       
       if (JSON.stringify(currentCoords) === JSON.stringify(target)) {
           if (minMoves.length == 0 || currentMoves.length < minMoves.length) {
               minMoves = currentMoves;
            }
            continue;
        }
        queue.push([myBoard.getTopLeft(currentCoords), currentMoves]);
        queue.push([myBoard.getTopRight(currentCoords), currentMoves]);
        queue.push([myBoard.getMidTopLeft(currentCoords), currentMoves])
        queue.push([myBoard.getMidTopRight(currentCoords), currentMoves]);
        queue.push([myBoard.getMidBottomLeft(currentCoords), currentMoves]);
        queue.push([myBoard.getMidBottomRight(currentCoords), currentMoves]);
        queue.push([myBoard.getBottomLeft(currentCoords), currentMoves]);
        queue.push([myBoard.getBottomRight(currentCoords), currentMoves]);
    }

    return minMoves;
}

export default Knight;