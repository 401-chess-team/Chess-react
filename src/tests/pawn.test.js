import React from 'react';
import ReactDOM from 'react-dom';
import skeletonBoard from '../board/skeletonBoard.js';
import Pawn from '../pieces/newPawn.js';

describe('Tests for isolated Pawns', () => {
  it('Can move forward', () => {
    let wp00 = new Pawn([1, 0], 'white');
    expect(wp00.availableMoves).toContainEqual([2, 0]);
  });

  it('Can attack diagonally if a black piece is there', () => {
    let demoBoard = [...skeletonBoard];
    let bp00 = new Pawn([2, 1], 'black', demoBoard);
    demoBoard[2][1] = bp00;
    let wp00 = new Pawn([1, 0], 'white', demoBoard);
    demoBoard[1][0] = wp00;
    expect(wp00.availableMoves).toContainEqual([2, 1]);
  });
});
