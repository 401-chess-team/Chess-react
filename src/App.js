import React, {useState, useEffect}from 'react';
import logo from './logo.svg';
import './App.css';
import VisualBoard from './components/visualBoard.js'

//this imports the board as well as all the objects (pieces) 
// naming convention is in notes folder
import * as boardItems from './board/startingBoard.js'

function App() {
  let [state, setState] = useState({});
  useEffect(() => {
    setState({...boardItems});
  }, [])
  // console.log(state)
  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    <VisualBoard board={state}/>
    </>
  );
}

export default App;
