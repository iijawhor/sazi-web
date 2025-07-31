import { useRef, useEffect, useCallback } from "react";

export default function useDebounce(callback, delay) {
  const timeoutRef = useRef();

  const debouncedFunction = useCallback(
    (...args) => {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );

  // Cleanup on unmount
  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return debouncedFunction;
}
