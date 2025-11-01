import { memo } from 'react';

import { CheckIcon, CloseIcon, PensilIcon } from '@/assets';

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
          aria-label='Cancel editing'
          className='button-group__close'
        />
      </button>

      {readonly ? (
        <button onClick={onEdit}>
          <PensilIcon
            aria-label='Edit'
            className='button-group__pensil'
          />
        </button>
      ) : (
        <button onClick={onChange}>
          <CheckIcon
            aria-label='Save Editing'
            className='button-group__check'
          />
        </button>
      )}
    </div>
  );
});
