function doOneMove(moveArray, board, allPiecesArr) {
  board[moveArray[0][0]][moveArray[0][1]].move(
    moveArray[1],
    board,
    allPiecesArr
  );
  return board;
}

function doManyMoves(moveArray, board, allPiecesArr) {
  moveArray.forEach((move, idx) => {
    doOneMove(move, board, allPiecesArr);
  });
}

export { doOneMove, doManyMoves };
