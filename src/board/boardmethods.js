// import React from 'react';

export { checkChecker, arrayIncludes, whereIsKing };

function checkChecker(king, allPiecesArr) {
  let bool = false;
  allPiecesArr.forEach(piece => {
    if (arrayIncludes(piece.availableMoves, king.currentSpace)) {
      bool = true;
    }
  });
  if (bool) {
  }
  return bool;
}

function arrayIncludes(bigArr, lilArr) {
  let bool = false;
  bigArr.forEach(pair => {
    if (pair[0] === lilArr[0] && pair[1] === lilArr[1]) {
      bool = true;
    }
  });
  return bool;
}

function whereIsKing(color, allPiecesArr) {
  if (!color) {
    return [];
  }
  let king;
  allPiecesArr.forEach((piece, i) => {
    if (piece.name === 'King' && piece.color === color) {
      king = allPiecesArr[i];
    }
  });
  return king ? king.currentSpace : null;
}
