import React from 'react';

export default function Spaces(props) {
  const defaultClass = 'game-pieces ';
  const id = `${props.ycoord}${props.xcoord}`;

  return (
    <span id={id} className={defaultClass}>
      <img
        id={id}
        alt={props.piece && props.piece.name}
        className="icon"
        src={props.piece && props.piece.icon}
        width="60"
      />
    </span>
  );
}
