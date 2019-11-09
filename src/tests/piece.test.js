import React from 'react';
import ReactDOM from 'react-dom';
import skeletonBoard from '../board/skeletonBoard.js';
import Piece from '../pieces/piece.js';
import Pawn from '../pieces/pawn.js';

describe('Tests for isolated Pieces', () => {
  it('Can move forward', () => {
    let skelboard = [...skeletonBoard];
    let wp00 = new Pawn([1, 0], 'white', skelboard);
    skelboard[1][0] = wp00;
    expect(wp00.canMove([2, 0], skelboard)).toBeTruthy();
  });

  it("Can't move forward if we put a friendly piece in front of it", () => {
    let skelboard = [...skeletonBoard];
    let wp01 = new Pawn([2, 0], 'white', skelboard);
    skelboard[2][0] = wp01;
    let wp00 = new Pawn([1, 0], 'white', skelboard);
    skelboard[1][0] = wp00;

    expect(wp00.canMove([2, 0], skelboard)).toBeFalsy();
  });

  it('Recognizes a foe in front of it', () => {
    let skelboard = [...skeletonBoard];
    let bp01 = new Pawn([2, 0], 'black', skelboard);
    skelboard[2][0] = bp01;
    let wp00 = new Pawn([1, 0], 'white', skelboard);
    skelboard[1][0] = wp00;

    expect(wp00.canMove([2, 0], skelboard)).toBeTruthy();
  });
});
