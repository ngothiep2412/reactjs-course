import { useEffect, useState } from "react";

export default function useDebounce(initializeValue = "", delay = 1000) {
  //
  const [debounceValue, setDeboucneValue] = useState(initializeValue);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDeboucneValue(initializeValue);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [delay, initializeValue]);
  return debounceValue;
}
