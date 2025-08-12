import { memo } from "react";
import type { ColorStatus } from "../Select/Select";
import "./Arrow.css";

export interface ArrowProps {
  status: ColorStatus;
}
export const Arrow = memo((props: ArrowProps) => {
  const { status } = props;
  return <div className={status} />;
});
