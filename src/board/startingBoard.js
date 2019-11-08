// 'use strict'

import Pawn from '../pieces/newPawn.js';
import Rook from '../pieces/rook.js';
import Knight from '../pieces/knight.js';
import Bishop from '../pieces/bishop.js';
import Queen from '../pieces/queen.js';
import King from '../pieces/king.js';

let wp00 = new Pawn([1, 0], 'white');
let wp01 = new Pawn([1, 1], 'white');
let wp02 = new Pawn([1, 2], 'white');
let wp03 = new Pawn([1, 3], 'white');
let wp04 = new Pawn([1, 4], 'white');
let wp05 = new Pawn([1, 5], 'white');
let wp06 = new Pawn([1, 6], 'white');
let wp07 = new Pawn([1, 7], 'white');
let bp00 = new Pawn([6, 0], 'black');
let bp01 = new Pawn([6, 1], 'black');
let bp02 = new Pawn([6, 2], 'black');
let bp03 = new Pawn([6, 3], 'black');
let bp04 = new Pawn([6, 4], 'black');
let bp05 = new Pawn([6, 5], 'black');
let bp06 = new Pawn([6, 6], 'black');
let bp07 = new Pawn([6, 7], 'black');
let wr00 = new Rook([0, 0], 'white');
let wr01 = new Rook([0, 7], 'white');
let br00 = new Rook([7, 0], 'black');
let br01 = new Rook([7, 7], 'black');
let wk00 = new Knight([0, 1], 'white');
let wk01 = new Knight([0, 6], 'white');
let bk00 = new Knight([7, 1], 'black');
let bk01 = new Knight([7, 6], 'black');
let wb00 = new Bishop([0, 2], 'white');
let wb01 = new Bishop([0, 5], 'white');
let bb00 = new Bishop([7, 2], 'black');
let bb01 = new Bishop([7, 5], 'black');
let wque = new Queen([0, 4], 'white');
let bque = new Queen([7, 4], 'black');
let wkng = new King([0, 3], 'white');
let bkng = new King([7, 3], 'black');

let startingBoard = [
  [wr00, wk00, wb00, wkng, wque, wb01, wk01, wr01],
  [wp00, wp01, wp02, wp03, wp04, wp05, wp06, wp07],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [bp00, bp01, bp02, bp03, bp04, bp05, bp06, bp07],
  [br00, bk00, bb00, bkng, bque, bb01, bk01, br01]
];

// export default null;
const pieceArr = [
  wr00,
  wk00,
  wb00,
  wque,
  wkng,
  wb01,
  wk01,
  wr01,
  wp00,
  wp01,
  wp02,
  wp03,
  wp04,
  wp05,
  wp06,
  wp07,
  bp00,
  bp01,
  bp02,
  bp03,
  bp04,
  bp05,
  bp06,
  bp07,
  br00,
  bk00,
  bb00,
  bque,
  bkng,
  bb01,
  bk01,
  br01
];

const resetBoard = () => {
  wp00 = new Pawn([1, 0], 'white');
  wp01 = new Pawn([1, 1], 'white');
  wp02 = new Pawn([1, 2], 'white');
  wp03 = new Pawn([1, 3], 'white');
  wp04 = new Pawn([1, 4], 'white');
  wp05 = new Pawn([1, 5], 'white');
  wp06 = new Pawn([1, 6], 'white');
  wp07 = new Pawn([1, 7], 'white');
  bp00 = new Pawn([6, 0], 'black');
  bp01 = new Pawn([6, 1], 'black');
  bp02 = new Pawn([6, 2], 'black');
  bp03 = new Pawn([6, 3], 'black');
  bp04 = new Pawn([6, 4], 'black');
  bp05 = new Pawn([6, 5], 'black');
  bp06 = new Pawn([6, 6], 'black');
  bp07 = new Pawn([6, 7], 'black');
  wr00 = new Rook([0, 0], 'white');
  wr01 = new Rook([0, 7], 'white');
  br00 = new Rook([7, 0], 'black');
  br01 = new Rook([7, 7], 'black');
  wk00 = new Knight([0, 1], 'white');
  wk01 = new Knight([0, 6], 'white');
  bk00 = new Knight([7, 1], 'black');
  bk01 = new Knight([7, 6], 'black');
  wb00 = new Bishop([0, 2], 'white');
  wb01 = new Bishop([0, 5], 'white');
  bb00 = new Bishop([7, 2], 'black');
  bb01 = new Bishop([7, 5], 'black');
  wque = new Queen([0, 4], 'white');
  bque = new Queen([7, 4], 'black');
  wkng = new King([0, 3], 'white');
  bkng = new King([7, 3], 'black');

  startingBoard = [
    [wr00, wk00, wb00, wkng, wque, wb01, wk01, wr01],
    [wp00, wp01, wp02, wp03, wp04, wp05, wp06, wp07],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [bp00, bp01, bp02, bp03, bp04, bp05, bp06, bp07],
    [br00, bk00, bb00, bkng, bque, bb01, bk01, br01]
  ];
  return startingBoard;
};

export {
  startingBoard,
  wr00,
  wk00,
  wb00,
  wque,
  wkng,
  wb01,
  wk01,
  wr01,
  wp00,
  wp01,
  wp02,
  wp03,
  wp04,
  wp05,
  wp06,
  wp07,
  bp00,
  bp01,
  bp02,
  bp03,
  bp04,
  bp05,
  bp06,
  bp07,
  br00,
  bk00,
  bb00,
  bque,
  bkng,
  bb01,
  bk01,
  br01,
  pieceArr,
  resetBoard
};
