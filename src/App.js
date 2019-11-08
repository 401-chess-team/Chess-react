import React, { useState, useEffect } from 'react';
import './App.css';
import GameBoard from './components/board/game-board.js';
import DisplayBoard from './components/board/display-board.js';
import Updater from './api/board-updater.js';
import DeadHomies from './components/board/deadHomies.js';
import { deadPieces } from './board/dead-piece-arr.js';
import { arrayIncludes, whereIsKing } from './board/boardmethods.js';
import exampleGame from './board/exampleGame.js';
import { doManyMoves } from './board/redoMove.js';
import Hero from './components/hero-text/hero-text.js';

// this imports the board as well as all the objects (pieces)
// naming convention is in notes folder
import * as boardItems from './board/startingBoard.js';
import { stat } from 'fs';

function App() {
  let defaultPieceState = { piece: null };
  let targetId;

  let [state, setState] = useState({ ...boardItems });
  let [activePiece, setActivePiece] = useState(defaultPieceState);
  let [moveList, setMoveList] = useState([]);
  // let [deadWhite, setDeadWhite] = useState(...deadPieces, deadPieces[0].whitePieces);
  // let [deadBlack, setDeadBlack] = useState(...deadPieces[0].blackPieces);
  let [deadGuys, setDeadGuys] = useState([...deadPieces]);
  let [check, setCheck] = useState({ inCheck: null });
  let [checkedKingLoc, setCheckedKingLoc] = [];

  const setDeadWhite = victim => {
    deadGuys[0].whitePieces = [...deadPieces[0].whitePieces, victim];
    setDeadGuys([...deadGuys]);
  };

  const setDeadBlack = victim => {
    deadGuys[0].blackPieces = [...deadPieces[0].blackPieces, victim];
    setDeadGuys([...deadGuys]);
  };

  let [turn, setTurn] = useState('white');

  useEffect(() => {
    const showAvailableMoves = moves => {
      moves.forEach((move, idx) => {
        targetId = `${move[0]}${move[1]}`;
        console.log(targetId)
        let myId = document.getElementById(targetId);
        myId.classList.add('flash');
      });
    };

    if (activePiece.piece) {
      showAvailableMoves(activePiece.piece.availableMoves);
    }

    const showCheck = (kingLocation) => {
      kingLocation = whereIsKing(check.inCheck, state.pieceArr);
      let target = `${kingLocation[0]}${kingLocation[1]}`;
      let myId = document.getElementById(target);
      myId.classList.add('check')
    }

    if(check.inCheck !== null) {
      showCheck();
    }

  
    
  }, [activePiece]);

  const returnToDefault = () => {
    let elems = document.querySelectorAll('span.flash');
    elems.forEach(elem => {
      elem.classList.remove('flash');
    });
  };

  function flipTurn(turnString) {
    return turnString === 'white' ? 'black' : 'white';
  }

  function handleClick(position) {
    if (activePiece.piece === null) {
      if (state.startingBoard[position[0]]) {
        if (
          state.startingBoard[position[0]][position[1]] &&
          state.startingBoard[position[0]][position[1]].color === turn
        ) {
          setActivePiece({
            piece: state.startingBoard[position[0]][position[1]]
          });
        }
      }
    } else {
      let moveArr = [activePiece.piece.currentSpace, position];
      setMoveList([...moveList, moveArr]);
      if (
        state.startingBoard[position[0]][position[1]] &&
        arrayIncludes(activePiece.piece.availableMoves, position)
      ) {
        grimReaper(position);
      }
      if (arrayIncludes(activePiece.piece.availableMoves, position)) {
        setTurn(flipTurn(turn));
      }
      activePiece.piece.legalMove(
        position,
        state.startingBoard,
        state.pieceArr,
        setCheck
      );

      setActivePiece(defaultPieceState);
      returnToDefault();
    }
  }

  function resetBoard() {
    let resettedBoard = state.resetBoard();
    setState({ ...state, startingBoard: resettedBoard });
    setDeadBlack([]);
    setDeadWhite([]);
    setTurn('white');
  }
  function grimReaper(position) {
    if (state.startingBoard[position[0]]) {
      let victim = state.startingBoard[position[0]][position[1]];
      if (victim) {
        if (victim.color === 'white') {
          setDeadWhite(victim);
        }
        if (victim.color === 'black') {
          setDeadBlack(victim);
        }
      }
    }
  }

  function undoMove(arrayOfMoves) {
    console.log('begin undo move logging');
    console.log(arrayOfMoves);
    arrayOfMoves.pop();
    console.log(arrayOfMoves);

    resetBoard();
    setState({
      ...state,
      currentBoard: doManyMoves(
        arrayOfMoves,
        state.startingBoard,
        state.pieceArr
      )
    });
    setMoveList(arrayOfMoves);
  }

  return (
    <>
      <Hero />
      <div id="board-container">
        <DeadHomies
          white={deadGuys[0].whitePieces}
          black={deadGuys[0].blackPieces}
        />
        <Updater moves={moveList} />
        <DisplayBoard board={state} />

        <div
          onClick={e => {
            let clickedPiece = e.target.id.split('');
            let parsedId = clickedPiece.map(num => {
              return parseInt(num);
            });
            handleClick(parsedId);
          }}
        >
          <GameBoard board={state} />
        </div>
      </div>
    </>
  );
}

export default App;
