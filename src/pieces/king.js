// 'use strict'
import skeletonBoard from '../board/skeletonBoard.js';
import Piece from './piece.js';
import blackIcon from '../assets/chess-icons/bk.png';
import whiteIcon from '../assets/chess-icons/wk.png';

export default class King extends Piece {
  constructor(startingSpace, color, board = skeletonBoard) {
    super(startingSpace, color);
  }
  name = 'King';
  icon = this.color === 'white' ? whiteIcon : blackIcon;

  position = this.startingSpace;
  howItMoves = (currentSpace, color, board) => {
    let newAvailableMoves = [];
    let kingMoves = [
      [1, -1],
      [1, 0],
      [1, 1],
      [0, -1],
      [0, 1],
      [-1, -1],
      [-1, 0],
      [-1, 1]
    ];
    let arrAdd = function(current, delta) {
      let [cy, cx] = [...current];
      let [dy, dx] = [...delta];
      [cy, cx, dy, dx] = [
        parseInt(cy),
        parseInt(cx),
        parseInt(dy),
        parseInt(dx)
      ];
      return [cy + dy, cx + dx];
    };
    let possMoves = [];
    kingMoves.forEach(move => {
      possMoves.push(arrAdd(this.currentSpace, move));
    });
    possMoves = possMoves.filter(move => this.canMove(move, board));
    newAvailableMoves = [...possMoves];
    return newAvailableMoves;
  };
  howItMonitors = (newSpace, color, board) => {
    return this.howItMoves(newSpace, color, board);
  };
}
