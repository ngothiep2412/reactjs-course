import React, { useState } from "react";
import Couter from "./components/advanced_react/control-props/Couter";

// Props collection  - Kentc Dodds - creator of Remix
// Props getter
// Control props
function App() {
  const [count, setCount] = useState(5);
  const handleCountChange = (newCount) => {
    setCount(newCount);
  };
  return (
    <div>
      {/* <Couter value={count} onChange={handleCountChange}></Couter> */}
      <Couter></Couter>
    </div>
  );
}

export default App;
