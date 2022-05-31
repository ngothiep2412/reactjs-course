import React, { useEffect, useRef } from "react";

const Input = () => {
  const divRef = useRef();
  const inputRef = useRef();
  useEffect(() => {
    console.log(divRef.current);
    // if (divRef.current) divRef.current.style.backgroundColor = "red";
    if (inputRef.current) inputRef.current.focus();
  }, []);
  //   console.log(divRef.current); // trong quá trình mounting nếu viết thì sẽ bị undefined
  return (
    <div className="input-div" ref={divRef}>
      <input
        type="text"
        placeholder="Auto focus input"
        className="inline-block p-5 border border-gray-500 focus:border-blue-400"
        ref={inputRef}
      />
    </div>
  );
};

export default Input;
