import React, { useState } from "react";
import { calculateWinner } from "../../helpers";
import Board from "./Board";
import "./GameStyle.css";
const Game = () => {
  const [state, setState] = useState({
    board: Array(9).fill(null),
    xIsNext: true,
  });
  // const [board, setBoard] = useState(Array(9).fill(null));
  // const [xIsNext, setXIsNext] = useState(true);
  // useReducer
  const winner = calculateWinner(state.board);
  const handleClick = (index) => {
    const boardCopy = [...state.board];
    if (winner || boardCopy[index]) {
      return;
    }
    boardCopy[index] = state.xIsNext ? "X" : "O";
    setState({
      ...state, // spread operator clone cái ban đầu
      board: boardCopy,
      xIsNext: !state.xIsNext,
    });
    // setBoard(boardCopy);
    // setXIsNext(!xIsNext);
  };
  const handleResetGame = () => {
    setState({
      ...state,
      board: Array(9).fill(null),
      xIsNext: true,
    });
    // setXIsNext(true);
    // setBoard(Array(9).fill(null));
  };
  return (
    <div>
      <Board cells={state.board} onClick={handleClick}></Board>
      {winner && (
        <div className="game-winner">{winner ? `Winner is ${winner}` : ""}</div>
      )}
      <button className="game-reset" onClick={handleResetGame}>
        Reset Game
      </button>
    </div>
  );
};

export default Game;
