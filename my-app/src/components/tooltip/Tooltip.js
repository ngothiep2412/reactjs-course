import React from "react";
import useHover from "../../hooks/useHover";
import ReactDOM from "react-dom";
import { useState } from "react";
const Tooltip = ({ children, text }) => {
  const { hovered, nodeRef } = useHover();
  const [coords, setCoords] = useState({});
  const handleHover = (e) => {
    setCoords(e.target.getBoundingClientRect());
  };
  return (
    <div>
      {hovered && <TooltipContent coords={coords}>{children}</TooltipContent>}
      <span className="font-semibold" ref={nodeRef} onMouseOver={handleHover}>
        {text}
      </span>
    </div>
  );
};

function TooltipContent({ children, coords }) {
  return ReactDOM.createPortal(
    <p
      className="p-3 bg-black text-white rounded-xl inline-block absolute
      -translate-y-full max-w-[200px] -translate-x-2/4"
      style={{
        top: coords.top - coords.height / 2,
        left: coords.left + coords.width / 2,
      }}
    >
      {children}
    </p>,
    document.querySelector("body")
  );
}

export default Tooltip;
