import * as boardMethods from '../board/boardmethods.js';
import { arrayIncludes } from '../board/boardmethods.js';

export default class Piece {
  constructor(startingSpace, color) {
    this.currentSpace = startingSpace;
    this.startingSpace = startingSpace;
    this.color = color;
    this.availableMoves = [];
    this.position = startingSpace;
  }

  isFriend(space, board) {
    let [y, x] = [space[0], space[1]];
    if (board[y][x] && board[y][x].color === this.color) {
      return true;
    } else {
      return false;
    }
  }

  isFoe(space, board) {
    if (
      board[space[0]][space[1]] &&
      board[space[0]][space[1]].color &&
      board[space[0]][space[1]].color !== this.color
    ) {
      return true;
    } else {
      return false;
    }
  }

  isEmpty(space, board) {
    if (board[space[0]][space[1]] && board[space[0]][space[1]].color) {
      return false;
    } else {
      return true;
    }
  }

  isOnBoard(space) {
    let [y, x] = [...space];
    if (y >= 0 && y <= 7 && x >= 0 && x <= 7) {
      return true;
    } else {
      return false;
    }
  }

  canMove(space, board) {
    let [s, b] = [space, board];
    if (
      this.isOnBoard(space) &&
      !this.isFriend(s, b) &&
      (this.isEmpty(s, b) || this.isFoe(s, b))
    ) {
      return true;
    } else {
      return false;
    }
  }

  canMonitor(space, board) {
    let [s, b] = [space, board];
    if (this.isOnBoard(space) && (this.isEmpty(s, b) || this.isFoe(s, b))) {
      return true;
    } else {
      return false;
    }
  }

  checkAvailableMoves = (updatedSpace, board) => {
    const newAvailableMoves = this.howItMoves(updatedSpace, this.color, board);
    const newMonitor = this.howItMonitors(updatedSpace, this.color, board);
    //felt cute, might update state later
    this.availableMoves = newAvailableMoves;
    this.monitoredSpaces = newMonitor;
  };

  move(space, board, allPiecesArr) {
    let tempBoard = [...board];
    let [y, x] = [space[0], space[1]];
    let [oy, ox] = [...this.currentSpace];
    tempBoard[oy][ox] = null;
    tempBoard[y][x] = this;
    this.currentSpace = [...space];
    this.position = [...space];
    this.checkAvailableMoves(space, tempBoard);
    allPiecesArr.forEach(piece => {
      // this is a weird case where we need to pass the pieces current space
      // instead of the space that is being passed into the containing function
      piece.checkAvailableMoves(piece.currentSpace, tempBoard);
    });
    return tempBoard;
  }

  slide(direction, currentSpace, board) {
    let newAvailableMoves = [];
    let [y, x] = [currentSpace[0], currentSpace[1]];
    let [dy, dx] = [direction[0], [direction[1]]];
    let current = [y + parseInt(dy), x + parseInt(dx)];

    while (this.canMove(current, board)) {
      let [cy, cx] = [...current];
      newAvailableMoves.push(current);
      if (this.isFoe(current, board)) {
        break;
      }
      current = [cy + parseInt(dy), cx + parseInt(dx)];
    }
    return newAvailableMoves;
  }

  moveIntoCheck(space, board, allPiecesArr) {
    let otherKing = null;
    let storedPieces = [...allPiecesArr];

    for (let i = 0; i < storedPieces.length; i++) {
      if (
        storedPieces[i].color !== this.color &&
        storedPieces[i].name === 'King'
      ) {
        otherKing = allPiecesArr[i];
      }
    }
    let bool = boardMethods.checkChecker(otherKing, allPiecesArr);
    if (bool) {
      console.log(otherKing.color, 'YOU ARE IN CHECK');
      return { inCheck: otherKing.color };
    } else {
      // move on with your life
      return { inCheck: null };
    }
  }

  legalMove(space, board, allPiecesArr, cb) {
    if (arrayIncludes(this.availableMoves, space)) {
      let returnboard = this.move(space, board, allPiecesArr);
      let checkObj = this.moveIntoCheck(space, board, allPiecesArr);
      if (cb) {
        cb(checkObj);
      }
      return returnboard;
    } else {
      return 'Illegal Move';
    }
  }

  // expand on the legalMove with another conditional to block out the breakcases

  findOldMove(y, x) {
    let oldMove = [x[0] - y[0], x[1] - y[1]];
    return oldMove;
  }
}
