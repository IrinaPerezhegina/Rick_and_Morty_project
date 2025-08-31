import type { PropsWithChildren } from "react";

import { classNames } from "@/lib/helper";

import "./CharactersWrapper.css";

interface CharactersWrapperProps {
  className?: string;
}

export const CharactersWrapper = (
  props: PropsWithChildren<CharactersWrapperProps>
) => {
  const { className, children } = props;

  return (
    <div className={classNames("CharactersWrapper", className)}>{children}</div>
  );
};
