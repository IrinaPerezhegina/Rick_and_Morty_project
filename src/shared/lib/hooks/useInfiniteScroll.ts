import { RefObject, useEffect, useRef } from "react";

import { options } from "@/shared/constants/options";

export interface UseInfiniteScrollOptions {
  triggerRef: RefObject<HTMLElement>;
  callback?: () => void;
}

export function useInfiniteScroll({
  callback,
  triggerRef,
}: UseInfiniteScrollOptions) {
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const triggerElement = triggerRef.current;

    if (callback) {
      observer.current = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callback();
        }
      }, options);

      observer.current.observe(triggerElement);
    }

    return () => {
      if (observer.current && triggerElement) {
        observer.current.unobserve(triggerElement);
      }
    };
  }, [callback, triggerRef]);
}
