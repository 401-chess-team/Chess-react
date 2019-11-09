// 'use strict'
import skeletonBoard from '../board/skeletonBoard.js';
import Piece from './piece.js';
import blackIcon from '../assets/chess-icons/br.png';
import whiteIcon from '../assets/chess-icons/wr.png';

export default class Rook extends Piece {
  constructor(startingSpace, color, board = skeletonBoard) {
    super(startingSpace, color);
    this.availableMoves = this.howItMoves(this.currentSpace, this.color, board);
  }
  name = 'Rook';
  icon = this.color === 'white' ? whiteIcon : blackIcon;
  position = this.currentSpace;

  howItMoves = (currentSpace, color, board) => {
    let newAvailableMoves = [];
    //left
    this.slide([0, -1], this.currentSpace, board).forEach(move =>
      newAvailableMoves.push(move)
    );
    //right
    this.slide([0, 1], this.currentSpace, board).forEach(move =>
      newAvailableMoves.push(move)
    );
    //up
    this.slide([1, 0], this.currentSpace, board).forEach(move =>
      newAvailableMoves.push(move)
    );
    //down
    this.slide([-1, 0], this.currentSpace, board).forEach(move =>
      newAvailableMoves.push(move)
    );

    return newAvailableMoves;
  };

  howItMonitors = (newSpace, color, board) => {
    return this.howItMoves(newSpace, color, board);
  };
}
