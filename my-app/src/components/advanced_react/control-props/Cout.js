import React from "react";
import { useCount } from "./cout-context";

const Cout = () => {
  const { count } = useCount();
  return (
    <span
      className="flex-1 flex items-center justify-center text-3xl 
       font-medium"
    >
      {count}
    </span>
  );
};

export default Cout;
