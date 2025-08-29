import { useCallback, useRef, type RefObject } from "react";

export function useDebounce(callback: (value: string) => void, delay: number) {
  const timer = useRef(null) as RefObject<number | null>;

  return useCallback(
    (value: string) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      timer.current = setTimeout(() => {
        callback(value);
      }, delay);
    },
    [callback, delay]
  );
}
