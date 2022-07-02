import React, { useState } from "react";
import Switch from "./components/swtich/Switch";
function useToggle() {
  const [on, setOn] = useState(false);
  const toggle = () => setOn(!on);
  // toggleProps
  return {
    on,
    toggle,
    toggleProps: {
      onClick: toggle,
    },
  };
}
// Props collection  - Kentc Dodds - creator of Remix
// Props getter
function App() {
  const { on, toggleProps } = useToggle();
  return (
    <div>
      <Switch on={on} {...toggleProps}></Switch>
      <hr />
      <button
        aria-label="custom-button"
        {...toggleProps}
        // onClick={() => {
        //   console.log("toggle");
        //   toggle();
        // }}
      >
        {on ? "on" : "off"}
      </button>
    </div>
  );
}

export default App;
