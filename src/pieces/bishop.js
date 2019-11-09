// 'use strict'
import skeletonBoard from '../board/skeletonBoard.js';
import Piece from './piece.js';
import blackIcon from '../assets/chess-icons/bb.png';
import whiteIcon from '../assets/chess-icons/wb.png';

export default class Bishop extends Piece {
  constructor(startingSpace, color, board = skeletonBoard) {
    super(startingSpace, color);
    this.availableMoves = this.howItMoves(this.currentSpace, this.color, board);
  }
  name = 'Bishop';
  icon = this.color === 'white' ? whiteIcon : blackIcon;
  position = this.currentSpace;

  howItMoves = (currentSpace, color, board) => {
    let newAvailableMoves = [];
    //upleft
    this.slide([1, -1], this.currentSpace, board).forEach(move =>
      newAvailableMoves.push(move)
    );
    //upright
    this.slide([1, 1], this.currentSpace, board).forEach(move =>
      newAvailableMoves.push(move)
    );
    //downleft
    this.slide([-1, -1], this.currentSpace, board).forEach(move =>
      newAvailableMoves.push(move)
    );
    //downright
    this.slide([-1, 1], this.currentSpace, board).forEach(move =>
      newAvailableMoves.push(move)
    );
    return newAvailableMoves;
  };

  howItMonitors = (newSpace, color, board) => {
    return this.howItMoves(newSpace, color, board);
  };
}
