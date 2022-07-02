import React from "react";
import { useState } from "react";
import Cout from "./Cout";
import { CountProvider } from "./cout-context";
import Decrement from "./Decrement";
import Increment from "./Increment";

const Couter = ({ value = null, initialValue = 0, onChange }) => {
  const [count, setCount] = useState(initialValue);
  const isControlled = value !== null && !!onChange;
  const getCount = () => (isControlled ? value : count);
  const handleCountChange = (newValue) => {
    isControlled ? onChange(newValue) : setCount(newValue);
  };
  const handleIncrement = () => {
    handleCountChange(getCount() + 1);
  };
  const handleDecrement = () => {
    handleCountChange(getCount() - 1);
  };
  return (
    <CountProvider
      value={{ count: getCount(), handleDecrement, handleIncrement }}
    >
      <div
        className="flex w-full max-w-[200px] 
    mx-auto my-5 border border-gray-400 rounded-lg overflow-hidden"
      >
        <Decrement></Decrement>
        <Cout></Cout>
        <Increment></Increment>
      </div>
    </CountProvider>
  );
};

export default Couter;
