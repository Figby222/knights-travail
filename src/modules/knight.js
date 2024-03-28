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
    let minMoves = [];
    let queue = [];
    let i = 0;
    queue.push([start, []])
    debugger;

    while (queue.length > 0) {
        debugger;
        // IS IN THE EXE CONTEXT OF MOVE
        // console.log(myBoard.board);
        const current = queue[i];
        //set current to queue[i]
        // const currentCoords = queue[i][0];
        // const currentMoves = queue[i][1];
        
        // do i++
        if (queue[i][1].length >= minMoves.length && minMoves.length > 0) {
            continue;
        }
        pastFirst++;
        
        const currentSquare = myBoard.getSquare(queue[i][0])
        if (currentSquare == null) {
            continue;
        }
        
        pastSecond++;
        
        for (const move of queue[i][1]) {
            if (JSON.stringify(move) == JSON.stringify(queue[i][0])) {
                continue;
            }
        }
        pastThird++;
        
        debugger;
        /*
        *
        * ISSUE IS HERE
        *
        */
       // why is this pushing queue[i][0] to every queue[n][1]
       console.log(queue);
       queue[i][1].push(queue[i][0]);
       
       if (JSON.stringify(queue[i][0]) === JSON.stringify(target)) {
           madeIt++;
           if (minMoves.length == 0 || queue[i][1].length < minMoves.length) {
               minMoves = queue[i][1];
            }
            continue;
        }
        pastFourth++;
        // BREADTH FIRST
        console.log(current);
        queue.push([myBoard.getTopLeft(queue[i][0]), queue[i][1]]);
        queue.push([myBoard.getTopRight(queue[i][0]), queue[i][1]]);
        queue.push([myBoard.getMidTopLeft(queue[i][0]), queue[i][1]])
        queue.push([myBoard.getMidTopRight(queue[i][0]), queue[i][1]]);
        queue.push([myBoard.getMidBottomLeft(queue[i][0]), queue[i][1]]);
        queue.push([myBoard.getMidBottomRight(queue[i][0]), queue[i][1]]);
        queue.push([myBoard.getBottomLeft(queue[i][0]), queue[i][1]]);
        queue.push([myBoard.getBottomRight(queue[i][0]), queue[i][1]]);
        i++;
    }
    console.log({
        pastFirst,
        pastSecond,
        pastThird,
        pastFourth,
        madeIt,
        queueLength: queue.length
    });

    return minMoves;
}

export default Knight;