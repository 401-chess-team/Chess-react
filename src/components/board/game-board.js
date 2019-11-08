import React from 'react';
import './board.css';
import Spaces from './game-spaces.js';

export default class Board extends React.Component {
  renderSpace(i, j) {
    let boardItems = this.props.board.startingBoard;
    return (
      <Spaces
        piece={boardItems[i][j]} //this gives access to all methods in Piece class
        ycoord={i}
        xcoord={j}
      />
    );
  }

  render() {
    const board = [];
    for (let i = 0; i < 8; i++) {
      const rows = [];
      for (let j = 0; j < 8; j++) {
        rows.push(this.renderSpace(i, j));
      }
      board.push(<div className="board-row">{rows}</div>);
    }

    return <div className="board">{board}</div>;
  }
}
