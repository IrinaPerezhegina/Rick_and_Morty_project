import { type ReactNode, memo } from 'react';

import { classNames } from '@/shared';

import './Input.css';

export type InputView = 'bordered' | 'underlined';

export interface InputProps {
  name: string;
  size: 'small' | 'big';
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
    readonly,
    value,
    Svg,
    className,
    onChange,
    view = 'underlined',
    placeholder = '',
    size = 'big'
  } = props;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div
      className={classNames(
        'input',
        {
          input_bordered: view === 'bordered',
          input_underlined: view === 'underlined',
          input_big: size === 'big',
          input_small: size === 'small',
          readonly: readonly
        },
        className
      )}
    >
      {Svg && Svg}
      <input
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </div>
  );
});
