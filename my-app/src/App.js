import React, { useState } from "react";
import Couter from "./components/advanced_react/state-reducer/Couter";
import useCouter from "./components/advanced_react/state-reducer/useCouter";

// Props collection  - Kentc Dodds - creator of Remix
// Props getter
// Control props
function App() {
  const useReducer = (state, action) => {
    switch (action.type) {
      case "decrement":
        return {
          count: state.count - 5,
        };
      default:
        return useCouter.reducer(state, action);
    }
  };
  const { count, handleDecrement, handleIncrement } = useCouter(useReducer);
  return (
    <div>
      <Couter
        count={count}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
      ></Couter>
    </div>
  );
}

export default App;
