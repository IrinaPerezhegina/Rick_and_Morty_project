import { memo } from "react";
import { classNames } from "../../lib/classNames";
import type { ColorStatus } from "../Select/Select";
import "./Status.css";

export interface StatusProps {
  status?: ColorStatus;
  classname?: string;
}
export const Status = memo((props: StatusProps) => {
  const { status, classname } = props;
  return status ? (
    <div className={classNames(status, {}, [classname])} />
  ) : null;
});
