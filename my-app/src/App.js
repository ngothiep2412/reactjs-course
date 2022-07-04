import React from "react";
import { useMemo } from "react";
import { useCallback } from "react";
import { useState } from "react";
import Count from "./components/advanced_react/performance/Count";
// Re-renders
function App() {
  const [filter, setFilter] = useState("");
  // useCallback(() => callback, [dependencies]);
  // memorized
  const calculate = useCallback(() => setFilter(""), [setFilter]);
  // useMemo(() => value, [depedencies])
  const data = useMemo(() => ({ success: false }), []);
  return (
    <div>
      <input
        type="text"
        className="p-3 rounded border border-gray-300"
        onChange={(e) => setFilter(e.target.value)}
      />
      <Count calculate={calculate} data={data}></Count>
    </div>
  );
}

export default App;
