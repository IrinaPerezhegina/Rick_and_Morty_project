import { memo } from "react";

import { classNames } from "@/shared/lib/helper";

import "./Error.css";

interface ErrorProps {
  error: string;
  className?: string;
}

export const Error = memo((props: ErrorProps) => {
  const { className, error } = props;

  return <div className={classNames("Error", className)}>{error}</div>;
});
