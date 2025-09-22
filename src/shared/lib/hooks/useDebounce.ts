import { type RefObject, useCallback, useRef } from 'react';

export function useDebounce(callback: (value: string) => void, delay: number) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const timer = useRef(null) as RefObject<any>;

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
