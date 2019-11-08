// 'use strict'
import skeletonBoard from '../board/skeletonBoard.js';
import Piece from './piece.js';
import blackIcon from '../assets/chess-icons/bkn.png';
import whiteIcon from '../assets/chess-icons/wkn.png';

export default class Knight extends Piece {
  constructor(startingSpace, color, board = skeletonBoard) {
    super(startingSpace, color);
    this.availableMoves = this.howItMoves(this.currentSpace, this.color, board); // [move spaces]
  }
  name = 'Knight';
  icon = this.color === 'white' ? whiteIcon : blackIcon;
  position = this.startingSpace;

  howItMoves = (currentSpace, color, board) => {
    let newAvailableMoves = [];
    let knightmoves = [
      [2, 1],
      [-2, -1],
      [2, -1],
      [-2, 1],
      [1, 2],
      [1, -2],
      [-1, 2],
      [-1, -2]
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
    knightmoves.forEach(move => {
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
