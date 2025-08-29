import { memo } from "react";

import { classNames } from "../../lib/classNames";

import "./Error.css";

interface ErrorProps {
  className?: string;
  error: string;
}

export const Error = memo((props: ErrorProps) => {
  const { className, error } = props;

  return <div className={classNames("Error", className)}>{error}</div>;
});
