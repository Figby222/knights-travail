import GameBoard from './modules/game-board.js';

const myBoard = new GameBoard();
console.table(myBoard.board);
console.log(myBoard.checkSquare([0, 0]))
console.log(myBoard.checkSquare([4, 8]))