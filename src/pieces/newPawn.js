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
  pawnCanMove(space, board) {
    let [s, b] = [space, board];
    if (this.isOnBoard(space) && !this.isFriend(s, b) && this.isEmpty(s, b)) {
      return true;
    } else {
      return false;
    }
  }
  pawnCanAttack(space, board) {
    let [s, b] = [space, board];
    if (this.isOnBoard(space) && !this.isFriend(s, b) && this.isFoe(s, b)) {
      return true;
    } else {
      return false;
    }
  }
  howItMoves = (currentSpace, color, board) => {
    let newAvailableMoves = [];
    let pawnMoves = { white: [[1, 0]], black: [[-1, 0]] };
    let pawnStartMoves = { white: [[2, 0]], black: [[-2, 0]] };
    let pawnAttacks = {
      white: [[1, 1], [1, -1]],
      black: [[-1, 1], [-1, -1]]
    };
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
    let attackMoves = [];
    pawnAttacks[this.color].forEach(move => {
      attackMoves.push(arrAdd(this.currentSpace, move));
    });
    attackMoves = attackMoves.filter(move => this.pawnCanAttack(move, board));
    pawnMoves[this.color].forEach(move => {
      possMoves.push(arrAdd(this.currentSpace, move));
    });
    if (this.currentSpace === this.startingSpace) {
      pawnStartMoves[this.color].forEach(move => {
        possMoves.push(arrAdd(this.currentSpace, move));
      });
    }
    possMoves = possMoves.filter(move => this.pawnCanMove(move, board));

    newAvailableMoves = [...possMoves, ...attackMoves];
    return newAvailableMoves;
  };
  howItMonitors() {
    return [];
  }
}
