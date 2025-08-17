import { memo, type ReactNode } from "react";
import { classNames } from "../../lib/classNames";
import "./Input.css";

export type InputView = "filter" | "form";

export interface InputProps {
  Svg?: ReactNode;
  view: InputView;
  value: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
}
export const Input = memo((props: InputProps) => {
  const { view, value, onChange, Svg, className, placeholder = "" } = props;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div
      className={classNames(
        "input",
        {
          input_filter: view === "filter",
          input_form: view === "form",
        },
        [className]
      )}
    >
      {view === "filter" && Svg}
      <input
        value={value}
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </div>
  );
});
