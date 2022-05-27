import React, { useState } from "react";

const DoubleCounter = () => {
  const [count, setCount] = useState(0);
  const handleDoubleNumber = () => {
    setCount((count) => count + 1); // setCount(count + 1) nó sẽ không cập nhật ngay lập tức
    setCount((count) => count + 1);
  };
  return (
    <div>
      <button onClick={handleDoubleNumber}>Double counter</button>
      <span className="count">{count}</span>
    </div>
  );
};

export default DoubleCounter;
