import React from 'react';
import ReactDOM from 'react-dom';
import * as board from '../board/startingBoard.js';
import { doManyMoves } from '../board/redoMove.js';

describe('doOneMove tests', () => {
  it('doManyMoves functionality', () => {
    let testArray = [
      [[1, 0], [3, 0]],
      [[6, 1], [4, 1]],
      [[3, 0], [4, 1]],
      [[6, 2], [5, 2]],
      [[0, 1], [2, 2]]
    ];

    let tempBoard = [...board.startingBoard];
    let tempMoves = doManyMoves(testArray, tempBoard, board.pieceArr);
    let minBoard = tempBoard.map(row =>
      row.map(space => (space ? space.name : space))
    );
    // console.log(minBoard);
    expect(minBoard).toEqual([
      ['Rook', null, 'Bishop', 'King', 'Queen', 'Bishop', 'Knight', 'Rook'],
      [null, 'Pawn', 'Pawn', 'Pawn', 'Pawn', 'Pawn', 'Pawn', 'Pawn'],
      [null, null, 'Knight', null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, 'Pawn', null, null, null, null, null, null],
      [null, null, 'Pawn', null, null, null, null, null],
      ['Pawn', null, null, 'Pawn', 'Pawn', 'Pawn', 'Pawn', 'Pawn'],
      ['Rook', 'Knight', 'Bishop', 'King', 'Queen', 'Bishop', 'Knight', 'Rook']
    ]);
  });
});
