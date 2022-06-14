import { useEffect, useRef, useState } from "react";

export default function useHover() {
  // mouseover
  // mouseout
  const [hovered, sethovered] = useState(false);
  const nodeRef = useRef(null);

  useEffect(() => {
    function handleMouseOver() {
      sethovered(true);
    }
    function handleMouseOut() {
      sethovered(false);
    }
    const dom = nodeRef.current;
    if (nodeRef.current) {
      dom.addEventListener("mouseout", handleMouseOut);
      dom.addEventListener("mouseover", handleMouseOver);
      return () => {
        dom.removeEventListener("mouseout", handleMouseOut);
        dom.removeEventListener("mouseover", handleMouseOver);
      };
    }
  }, []);
  return {
    hovered,
    nodeRef,
  };
}
