import { useEffect, useRef, useState } from "react";

export default function useHover() {
  // mouseover
  // mouseout
  const [hoverd, sethoverd] = useState(false);
  const nodeRef = useRef(null);

  useEffect(() => {
    function handleMouseOver() {
      sethoverd(true);
    }
    function handleMouseOut() {
      sethoverd(false);
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
    hoverd,
    nodeRef,
  };
}
