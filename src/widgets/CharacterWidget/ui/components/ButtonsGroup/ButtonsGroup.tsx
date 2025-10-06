import { memo } from 'react';

import { ReactComponent as CheckIcon } from '@/assets/checkMark.svg';
import { ReactComponent as CloseIcon } from '@/assets/close.svg';
import { ReactComponent as PensilIcon } from '@/assets/pensil.svg';

import './ButtonsGroup.css';

export interface ButtonsGroupProps {
  readonly: boolean;
  onEdit: () => void;
  onCancel: () => void;
  onChange: () => void;
}

export const ButtonsGroup = memo((props: ButtonsGroupProps) => {
  const { readonly, onEdit, onCancel, onChange } = props;

  return (
    <div className='button-group'>
      <button onClick={onCancel}>
        <CloseIcon
          aria-label='Отменить редактирование'
          className='button-group__close'
        />
      </button>

      {readonly ? (
        <button onClick={onEdit}>
          <PensilIcon
            aria-label='Редактировать'
            className='button-group__pensil'
          />
        </button>
      ) : (
        <button onClick={onChange}>
          <CheckIcon
            aria-label='Сохранить редактирование'
            className='button-group__check'
          />
        </button>
      )}
    </div>
  );
});
