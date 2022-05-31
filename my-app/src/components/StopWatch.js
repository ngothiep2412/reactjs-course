import React, { useRef, useState } from "react";

const StopWatch = () => {
  const timeRef = useRef(null);
  const [count, setCount] = useState(0);
  const handleStart = () => {
    if (timeRef.current) return;
    timeRef.current = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
  };
  const handleStop = () => {
    clearInterval(timeRef.current);
    timeRef.current = null;
  };
  React.useEffect(() => {
    return () => {
      //clean up
      clearInterval(timeRef.current);
    };
  }, []);
  return (
    <div>
      <h2>Count {count}</h2>
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
      </div>
    </div>
  );
};

export default StopWatch;
