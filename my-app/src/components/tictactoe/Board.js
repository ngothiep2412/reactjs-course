import React from "react";
import Cell from "./Cell";

const Board = (props) => {
  console.log(props);
  // Array(9).fill() --> []
  return (
    <div className="game-board">
      {props.cells.map((item, index) => (
        <Cell
          key={index}
          value={item}
          onClick={() => props.onClick(index)}
        ></Cell>
      ))}
    </div>
  );
};

export default Board;
