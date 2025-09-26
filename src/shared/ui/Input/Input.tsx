import { type ReactNode, memo, useState } from 'react';

import { classNames } from '@/shared';

import './Input.css';

export type InputView = 'filter' | 'form';

export interface InputProps {
  name: string;
  size: 'small' | 'big';
  view: InputView;
  value: string;
  isControlled?: boolean;
  Svg?: ReactNode;
  onChange?: (value: string) => void;
  placeholder?: string;
  readonly?: boolean;
  className?: string;
}
export const Input = memo((props: InputProps) => {
  const {
    name,
    readonly,
    view,
    value,
    Svg,
    onChange,
    className,
    placeholder = '',
    size = 'big',
    isControlled = true
  } = props;
  const [currentValue, setCurrentValue] = useState(value);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(e.target.value);
    onChange?.(e.target.value);
  };

  return (
    <div
      className={classNames(
        'input',
        {
          input_filter: view === 'filter',
          input_form: view === 'form',
          input_big: size === 'big',
          input_small: size === 'small',
          readonly: readonly
        },
        className
      )}
    >
      {view === 'filter' && Svg}
      <input
        name={name}
        value={isControlled ? value : currentValue}
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </div>
  );
});
