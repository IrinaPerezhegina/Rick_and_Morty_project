import { type ReactNode } from "react";

import { classNames } from "../../../../lib/classNames";

import "./CharactersWrapper.css";

interface CharactersWrapperProps {
  className?: string;
  children: ReactNode;
}

export const CharactersWrapper = (props: CharactersWrapperProps) => {
  const { className, children } = props;

  return (
    <div className={classNames("CharactersWrapper", [className])}>
      {children}
    </div>
  );
};
