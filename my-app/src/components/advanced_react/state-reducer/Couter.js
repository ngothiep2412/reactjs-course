import React from "react";
import Cout from "./Cout";
import { CountProvider } from "./cout-context";
import Decrement from "./Decrement";
import Increment from "./Increment";

const Couter = ({
  count = 0,
  handleIncrement = () => {},
  handleDecrement = () => {},
}) => {
  return (
    <CountProvider value={{ count }}>
      <div
        className="flex w-full max-w-[200px] 
    mx-auto my-5 border border-gray-400 rounded-lg overflow-hidden"
      >
        <Decrement onClick={handleDecrement}></Decrement>
        <Cout></Cout>
        <Increment onClick={handleIncrement}></Increment>
      </div>
    </CountProvider>
  );
};

export default Couter;
