import { useReducer } from "react";

const counterReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1,
      };
    case "decrement":
      return {
        count: state.count - 1,
      };
    default:
      throw new Error(`Unhandled action type ${action.type}`);
  }
};
export default function useCouter(
  { initial = 0 } = {}, // không truyền gì cả là empty object
  reducer = counterReducer // mặc định là counterReducer
) {
  const [state, dispatch] = useReducer(reducer, { count: initial });
  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };
  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  };
  return {
    count: state.count,
    handleIncrement,
    handleDecrement,
  };
}

useCouter.reducer = counterReducer;
