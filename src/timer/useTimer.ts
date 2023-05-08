import { useState, useRef } from "react";

// Custom hook for managing the timer
export function useTimer(initialValue = 0, step = 1000) {
  const [value, setValue] = useState(initialValue);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout>();

  const start = () => {
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setValue((value) => value + step);
    }, step);
  };

  const pause = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  const reset = () => {
    const runAfterReset = isRunning;
    setValue(initialValue);
    setIsRunning(false);
    clearInterval(intervalRef.current);
    if (runAfterReset) start();
  };

  return { value, isRunning, start, pause, reset };
}
