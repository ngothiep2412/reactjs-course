import React from "react";
import { useRef } from "react";
import { useState } from "react";
// React.memo(Component)
// --> Component sẽ bị re-render khi state của nó thay đổi(trong trường hợp này là count)
// --> Component sẽ bị re-render khi có props truyền vào thay đổi
const Count = React.memo(({ calculate }) => {
  const [count, setCount] = useState(0);
  const renderRef = useRef(0);
  return (
    <div>
      <div>Count: {count}</div>
      <div>Render: {renderRef.current++}</div>
      <button
        className="p-3 rounded bg-blue-400 text-white"
        onClick={() => setCount((c) => c + 1)}
      >
        Increment
      </button>
    </div>
  );
});

export default Count;
