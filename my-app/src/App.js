import React from "react";
import FetchingData from "./components/advanced_react/hoc/FetchingData";
import FetchingDataOther from "./components/advanced_react/hoc/FetchingDataOther";
// HOC = higher order component pattern
function App() {
  return (
    <div>
      <FetchingDataOther></FetchingDataOther>
    </div>
  );
}

export default App;
