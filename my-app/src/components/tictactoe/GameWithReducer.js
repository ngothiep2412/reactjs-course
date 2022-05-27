import React, { useReducer } from "react";
import { calculateWinner } from "../../helpers";
import Board from "./Board";
import "./GameStyle.css";

//initialState = {}
const initialState = {
  board: Array(9).fill(null),
  xIsNext: true,
};

const Game = () => {
  // const [state, setState] = useState({
  //   board: Array(9).fill(null),
  //   xIsNext: true,
  // });

  // immutable
  // [...arr] {...obj}
  // deep copy JSON.parse(JSON.stringify(obj))
  const gameReducer = (state, action) => {
    switch (action.type) {
      case "CLICK": {
        const { board, xIsNext } = state;
        const { index, winner } = action.payload;
        if (winner || board[index]) return state;
        const nextState = JSON.parse(JSON.stringify(state));
        nextState.board[index] = xIsNext ? "X" : "O";
        nextState.xIsNext = !xIsNext;
        return nextState;
      }
      case "RESET": {
        const nextState = JSON.parse(JSON.stringify(state));
        nextState.board = Array(9).fill(null);
        nextState.xIsNext = true;
        return nextState;
      }

      default:
        break;
    }
    return state;
  };

  // const [board, setBoard] = useState(Array(9).fill(null));
  // const [xIsNext, setXIsNext] = useState(true);
  // useReducer
  const [state, dispatch] = useReducer(gameReducer, initialState);
  // const action = {type: "CLICK", payload: {}}
  // dispatch({type: "CLICK"})
  // dispatch(action)
  const winner = calculateWinner(state.board);
  const handleClick = (index) => {
    // const boardCopy = [...state.board];
    // if (winner || boardCopy[index]) {
    //   return;
    // }
    dispatch({
      type: "CLICK",
      payload: {
        index,
        winner,
      },
    });
  };
  //   boardCopy[index] = state.xIsNext ? "X" : "O";
  //   setState({
  //     ...state, // spread operator clone cái ban đầu
  //     board: boardCopy,
  //     xIsNext: !state.xIsNext,
  //   });
  //   // setBoard(boardCopy);
  //   // setXIsNext(!xIsNext);
  // };
  const handleResetGame = () => {
    dispatch({
      type: "RESET",
    });
    //   setState({
    //     ...state,
    //     board: Array(9).fill(null),
    //     xIsNext: true,
    //   });
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
