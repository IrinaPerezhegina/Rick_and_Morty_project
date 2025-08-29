import { memo, useState, type ReactNode } from "react";

import { classNames } from "../../lib/classNames";

import "./Input.css";

export type InputView = "filter" | "form";

export interface InputProps {
  readonly?: boolean;
  name: string;
  size: "small" | "big";
  Svg?: ReactNode;
  view: InputView;
  value: string;
  onChange?: (value: string) => void;
  placeholder?: string;
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
