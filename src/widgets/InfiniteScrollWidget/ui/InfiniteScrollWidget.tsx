import { memo, RefObject, useRef } from "react";

import { useInfiniteScroll } from "@/shared";

import "./InfiniteScrollWidget.css";

interface InfiniteScrollWidgetProps {
  onScrollEnd?: () => void;
}

export const InfiniteScrollWidget = memo((props: InfiniteScrollWidgetProps) => {
  const { onScrollEnd } = props;
  const triggerRef = useRef({}) as RefObject<HTMLDivElement>;

  useInfiniteScroll({
    triggerRef,
    callback: onScrollEnd,
  });

  return (
    <>{onScrollEnd ? <div className={"trigger"} ref={triggerRef} /> : null}</>
  );
});
