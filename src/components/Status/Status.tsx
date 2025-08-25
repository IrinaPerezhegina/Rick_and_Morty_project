import { memo } from "react";

import { classNames } from "../../lib/classNames";

import "./Status.css";

export interface StatusProps {
  status?: string;
  classname?: string;
}
export const CircleStatus = memo((props: StatusProps) => {
  const { status, classname } = props;

  const statusValue =
    status === "Alive" ? "green" : status === "Dead" ? "red" : "orange";

  return statusValue ? (
    <div className={classNames(statusValue, [classname])} />
  ) : null;
});
