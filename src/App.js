import React, { useState } from 'react';
// import './App.css';
import DisplayBoard from './components/board/display-board.js'
import {checkChecker} from './board/boardmethods.js'

//this imports the board as well as all the objects (pieces) 
// naming convention is in notes folder
import * as boardItems from './board/startingBoard.js'

function App() {
  let [state, setState] = useState({...boardItems});


function moveQueen() {
  let newBoard = state.startingBoard && state.wque.move([6, 3], state.startingBoard, state.pieceArr);
  setState({...state, currentBoard: newBoard});
  // this needs to be extended to cover both kings this is sort of a MVP version of checking for check
  checkChecker(boardItems.wkng,boardItems.pieceArr);
  checkChecker(boardItems.bkng, boardItems.pieceArr);
}
  return (
    <>
    <button onClick={()=> {moveQueen()}}>move queen</button>
      <DisplayBoard board={state} />
    </>
  );
}

export default App;
