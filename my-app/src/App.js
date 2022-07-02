import React, { useState } from "react";
import Switch from "./components/swtich/Switch";
function useToggle() {
  const [on, setOn] = useState(false);
  const toggle = () => setOn(!on);
  function getToggleProps({ onClick, ...rest } = {}) {
    return {
      onClick: () => {
        onClick && onClick();
        toggle();
      },
      ...rest,
    };
  }
  // toggleProps
  return {
    on,
    toggle,
    getToggleProps,
    // toggleProps: {
    //   onClick: toggle,
    // },
  };
}
// Props collection  - Kentc Dodds - creator of Remix
// Props getter
function App() {
  const { on, toggleProps, getToggleProps } = useToggle();
  return (
    <div>
      <Switch {...getToggleProps({ on })}></Switch>
      <hr />
      <button
        aria-label="custom-button"
        {...getToggleProps({
          onClick: () => console.info("onButtonClick"),
        })}
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
