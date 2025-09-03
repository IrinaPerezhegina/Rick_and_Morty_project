import { memo, useState, type ReactNode } from "react";

import { classNames } from "@/shared/lib/helper";

import "./Input.css";

export type InputView = "filter" | "form";

export interface InputProps {
  name: string;
  size: "small" | "big";
  view: InputView;
  value: string;
  Svg?: ReactNode;
  onChange?: (value: string) => void;
  placeholder?: string;
  readonly?: boolean;
  className?: string;
}
export const Input = memo((props: InputProps) => {
  const {
    name,
    size = "big",
    view,
    value,
    onChange,
    Svg,
    className,
    placeholder = "",
    readonly,
  } = props;
  const [currentValue, setCurrentValue] = useState(value);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(e.target.value);
    onChange?.(e.target.value);
  };

  return (
    <div
      className={classNames(
        "input",
        {
          input_filter: view === "filter",
          input_form: view === "form",
          readonly: readonly,
        },
        [className]
      )}
    >
      {view === "filter" && Svg}
      <input
        name={name}
        className={size}
        value={currentValue}
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </div>
  );
});
