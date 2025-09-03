import type { PropsWithChildren } from "react";

import { classNames, Loader } from "@/shared";
import { InfiniteScrollWidget } from "@/widgets/InfiniteScrollWidget";

import "./CharactersWrapper.css";

interface CharactersWrapperProps {
  className?: string;
  isShowedLoader?: boolean;
  isShowedTargetElement?: boolean;
  onTurnNextPage: () => void;
}

export const CharactersWrapper = (
  props: PropsWithChildren<CharactersWrapperProps>
) => {
  const {
    className,
    children,
    isShowedLoader = false,
    onTurnNextPage,
    isShowedTargetElement,
  } = props;

  return (
    <div className={classNames("CharactersWrapper", className)}>
      {children}
      {isShowedLoader && (
        <div className="loader">
          <Loader variant="smallLoader" />
        </div>
      )}
      {isShowedTargetElement && (
        <InfiniteScrollWidget onScrollEnd={onTurnNextPage} />
      )}
    </div>
  );
};
