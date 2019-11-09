// 'use strict'

import skeletonBoard from '../board/skeletonBoard.js';
import Piece from './piece.js';
import blackIcon from '../assets/chess-icons/bp.png';
import whiteIcon from '../assets/chess-icons/wp.png';

export default class Pawn extends Piece {
  constructor(startingSpace, color, board = skeletonBoard) {
    super(startingSpace, color);
    this.availableMoves = this.howItMoves(this.startingSpace, color, board); // [move spaces]
    this.monitoredSpaces = this.howItMonitors(this.startingSpace, color, board); // [monitored spaces]
  }
  name = 'Pawn';
  icon = this.color === 'white' ? whiteIcon : blackIcon;
  position = this.currentSpace;

  howItMoves = (currentSpace, color, board) => {
    let newAvailableMoves = [];
    let [y, x] = currentSpace;

    if (color === 'white') {
      //y coordinate and x coordinate
      if (!board[y + 1][x]) {
        newAvailableMoves.push([y + 1, x]);
        //if this position is available, add it to this piece's available moves

        if (
          !board[y + 2][x] &&
          currentSpace[0] === this.startingSpace[0] &&
          currentSpace[1] === this.startingSpace[1]
        ) {
          newAvailableMoves.push([y + 2, x]);
        }
        //if this position is available and this piece is in the starting space, add position to available moves
      }
      if (board[y + 1][x + 1] && board[y + 1][x + 1].color === 'black') {
        newAvailableMoves.push([y + 1, x + 1]);
      }
      if (board[y + 1][x - 1] && board[y + 1][x - 1].color === 'black') {
        newAvailableMoves.push([y + 1, x - 1]);
      }
      //attack options: if forward diagnal positions are occupied by enemy piece, add position to available moves
    }

    if (color === 'black') {
      //y coordinate and x coordinate
      if (!board[y - 1][x]) {
        newAvailableMoves.push([y - 1, x]);
        //if this position is available, add it to this piece's available moves

        if (
          !board[y - 2][x] &&
          currentSpace[0] === this.startingSpace[0] &&
          currentSpace[1] === this.startingSpace[1]
        ) {
          newAvailableMoves.push([y - 2, x]);
        }
        //if this position is available and this piece is in the starting space, add position to available moves
      }
      if (board[y - 1][x + 1] && board[y - 1][x + 1].color === 'white') {
        newAvailableMoves.push([y - 1, x + 1]);
      }
      if (board[y - 1][x - 1] && board[y - 1][x - 1].color === 'white') {
        newAvailableMoves.push([y - 1, x - 1]);
      }
      //attack options: if forward diagnal positions are occupied by enemy piece, add position to available moves
    }
    return newAvailableMoves; /*board[i][j]*/
  };
  howItMonitors = (currentSpace, color) => {
    let [y, x] = currentSpace;
    let monitoredSpaces = [];

    if (color === 'white') {
      monitoredSpaces = [[y + 1, x + 1], [y + 1, x - 1]];
    }
    if (color === 'black') {
      monitoredSpaces = [[y - 1, x + 1], [y - 1, x - 1]];
    }

    return monitoredSpaces;
  };
}
