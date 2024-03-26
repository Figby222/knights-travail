import GameBoard from './modules/game-board.js';
import Knight from './modules/knight.js';

const knight = new Knight([0, 0]);

console.log(knight.moveTo([knight.coordinates], [1, 4]))