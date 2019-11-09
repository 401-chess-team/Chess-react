import React from 'react';
import ReactDOM from 'react-dom';
import skeletonBoard from '../board/skeletonBoard.js';
import * as board from '../board/startingBoard.js';
import Queen from '../pieces/queen.js';
import { arrayIncludes } from '../board/boardmethods.js';

/*
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
*/

describe('skeleton board tests', () => {
  it('Has the correct size arrays for the skeleton board', () => {
    expect(skeletonBoard[0][0].color).toBe('white');
  });
});

describe('starting board Pawn tests', () => {
  let arrOfPawns = [
    board.wp00,
    board.wp01,
    board.wp02,
    board.wp03,
    board.wp04,
    board.wp05,
    board.wp06,
    board.wp07,
    board.bp00,
    board.bp01,
    board.bp02,
    board.bp03,
    board.bp04,
    board.bp05,
    board.bp06,
    board.bp07
  ];

  for (let i = 0; i < 8; i++) {
    it('Starts with all the pawns', () => {
      expect(board.startingBoard[1][i].name).toBe('Pawn');
    });
  }

  for (let i = 0; i < 8; i++) {
    it('No white pawn can move too far', () => {
      expect(
        board.startingBoard[1][i].availableMoves.includes([4, i])
      ).toBeFalsy();
    });
  }

  for (let i = 0; i < 8; i++) {
    it('No Black pawn can move too far', () => {
      expect(
        board.startingBoard[6][i].availableMoves.includes([5, i])
      ).toBeFalsy();
    });
  }

  let middleRows = [];
  for (let i = 0; i < 8; i++) {
    middleRows.push([4, i]);
    middleRows.push([5, i]);
  }
  arrOfPawns.forEach(pawn => {
    middleRows.forEach(space => {
      it('Cannot move to middle row (same as last test but from pawn point of view instead of board point of view', () => {
        expect(pawn.availableMoves.includes(space)).toBeFalsy();
      });
    });
  });

  let endRows = [];
  for (let i = 0; i < 8; i++) {
    endRows.push([0, i]);
    endRows.push([7, i]);
  }
  arrOfPawns.forEach(pawn => {
    endRows.forEach(space => {
      it('Cannot move to back rows', () => {
        expect(pawn.availableMoves).not.toContainEqual(space);
      });
    });
  });

  arrOfPawns.forEach(pawn => {
    it('Pawns CAN move to the space in front of them', () => {
      if (pawn.color === 'white') {
        expect(pawn.availableMoves).toContainEqual([
          pawn.currentSpace[0] + 1,
          pawn.currentSpace[1]
        ]) &&
          expect(pawn.availableMoves).toContainEqual([
            pawn.currentSpace[0] + 2,
            pawn.currentSpace[1]
          ]);
      }
      if (pawn.color === 'black') {
        expect(pawn.availableMoves).toContainEqual([
          pawn.currentSpace[0] - 1,
          pawn.currentSpace[1]
        ]) &&
          expect(pawn.availableMoves).toContainEqual([
            pawn.currentSpace[0] - 2,
            pawn.currentSpace[1]
          ]);
      }
    });
  });

  it('can recompute moves correctly', () => {
    let tempBoard = [...board.startingBoard];
    let tempPawn = board.wp00;
    tempPawn.move([5, 0], tempBoard, [...board.pieceArr]);
    expect(tempPawn.availableMoves).toContainEqual([6, 1]);
  });

  it('"can move" correctly', () => {
    let tempBoard = [...board.startingBoard];
    let tempPawn = board.wp00;
    expect(tempPawn.isFoe([2, 0], tempBoard)).toBeFalsy();
  });

  it('Queen updates available moves', () => {
    let tempBoard = [...board.startingBoard];
    let tempQueen = board.bque;
    // console.log(tempBoard);
    tempBoard = tempQueen.move([3, 3], tempBoard, [...board.pieceArr]);
    expect(tempQueen.availableMoves).toEqual([
      [3, 2],
      [3, 1],
      [3, 0],
      [3, 4],
      [3, 5],
      [3, 6],
      [3, 7],
      [4, 3],
      [5, 3],
      [2, 3],
      [1, 3],
      [4, 2],
      [5, 1],
      [4, 4],
      [5, 5],
      [2, 2],
      [1, 1],
      [2, 4],
      [1, 5]
    ]);
  });

  it('Rook updates available moves', () => {
    let tempBoard = [...board.startingBoard];
    let tempRook = board.br00;
    // console.log(tempBoard);
    tempBoard = tempRook.move([3, 3], tempBoard, [...board.pieceArr]);
    expect(tempRook.availableMoves).toEqual([
      [3, 2],
      [3, 1],
      [3, 0],
      [3, 4],
      [3, 5],
      [3, 6],
      [3, 7],
      [4, 3],
      [5, 3],
      [2, 3],
      [1, 3]
    ]);
  });

  it('Bishop updates available moves', () => {
    let tempBoard = [...board.startingBoard];
    let tempBishop = board.bb00;
    // console.log(tempBoard);
    tempBoard = tempBishop.move([3, 3], tempBoard, [...board.pieceArr]);
    expect(tempBishop.availableMoves).toEqual([
      [4, 2],
      [5, 1],
      [4, 4],
      [5, 5],
      [2, 2],
      [1, 1],
      [2, 4],
      [1, 5]
    ]);
  });

  it('Knight updates available moves', () => {
    let tempBoard = [...board.startingBoard];
    let tempKnight = board.bk00;
    // console.log(tempBoard);
    tempBoard = tempKnight.move([3, 3], tempBoard, [...board.pieceArr]);
    expect(tempKnight.availableMoves).toEqual([
      [5, 4],
      [1, 2],
      [5, 2],
      [1, 4],
      [4, 5],
      [4, 1],
      [2, 5],
      [2, 1]
    ]);
  });

  it('King updates available moves', () => {
    let tempBoard = [...board.startingBoard];
    let tempKing = board.bkng;
    // console.log(tempBoard);
    tempBoard = tempKing.move([3, 3], tempBoard, [...board.pieceArr]);
    // console.log(tempKing.availableMoves);
    expect(tempKing.availableMoves).toEqual([
      [4, 2],
      [4, 3],
      [4, 4],
      [3, 2],
      [3, 4],
      [2, 2],
      [2, 3],
      [2, 4]
    ]);
  });

  it('Rook will function upon a LEGAL move', () => {
    let tempBoard = [...board.startingBoard];
    let tempRook = board.br00;
    tempRook.move([3, 3], tempBoard, [...board.pieceArr]);
    let newBoard = tempRook.legalMove([3, 4], tempBoard, [...board.pieceArr]);
    expect(newBoard[3][4].currentSpace).toEqual([3, 4]);
  });

  it('Rook will not function upon an ILLEGAL move', () => {
    let tempBoard = [...board.startingBoard];
    let tempRook = board.br00;
    tempRook.move([3, 3], tempBoard, [...board.pieceArr]);
    let newBoard = tempRook.legalMove([4, 4], tempBoard, [...board.pieceArr]);
    expect(newBoard).toEqual('Illegal Move');
  });

  it('arrayIncludes is completely functional', () => {
    let arrayOne = [[3, 0]];
    let arrayTwo = [3, 0];
    expect(arrayIncludes(arrayOne, arrayTwo)).toEqual(true);
  });
});
