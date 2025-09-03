import type { PropsWithChildren } from "react";

import { classNames } from "@/shared/lib/helper";

import { Loader } from "@/shared/ui";
import "./CharactersWrapper.css";

interface CharactersWrapperProps {
  className?: string;
  isShow?: boolean;
}

export const CharactersWrapper = (
  props: PropsWithChildren<CharactersWrapperProps>
) => {
  const { className, children, isShow = false } = props;

  return (
    <div className={classNames("CharactersWrapper", className)}>
      {children}
      {isShow && (
        <div className="loader">
          <Loader variant="smallLoader" />
        </div>
      )}
    </div>
  );
};
