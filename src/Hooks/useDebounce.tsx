import { useState } from "react";

const useDebounce = (callback: any, delay: number) => {
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  const debouncedFunction = (...args: any[]) => {
    if (timer) {
      clearTimeout(timer);
    }

    const newTimer = setTimeout(() => {
      callback(...args);
    }, delay);

    setTimer(newTimer);
  };

  return debouncedFunction;
};

export default useDebounce;
