import React from 'react';
import './board.css';
import DisplaySpaces from './display-spaces.js';

export default class DisplayBoard extends React.Component {
  renderSquare(i, j, color) {
    return <DisplaySpaces shade={color} ycoord={i} xcoord={j} />;
  }

  render() {
    const board = [];
    for (let i = 0; i < 8; i++) {
      const rows = [];
      for (let j = 0; j < 8; j++) {
        let color;
        if (
          (isLightSpace(i) && isLightSpace(j)) ||
          (!isLightSpace(i) && !isLightSpace(j))
        ) {
          color = 'light-space';
        }
        //if position is comprised of both even numbers or odd numbers
        //assign class name 'light-space' other wise assign 'dark-space'
        else {
          color = 'dark-space';
        }
        rows.push(this.renderSquare(i, j, color));
      }
      board.push(<div className="board-row">{rows}</div>);
    }

    return <div className="board">{board}</div>;
  }
}

function isLightSpace(int) {
  return int % 2 === 0;
}
