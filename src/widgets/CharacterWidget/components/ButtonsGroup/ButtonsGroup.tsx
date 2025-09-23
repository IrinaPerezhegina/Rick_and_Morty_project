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
    <div className='ButtonGroup'>
      <button onClick={onCancel}>
        <CloseIcon className='close' />
      </button>

      {readonly ? (
        <button onClick={onEdit}>
          <PensilIcon className='pensil' />
        </button>
      ) : (
        <button onClick={onChange}>
          <CheckIcon className='check' />
        </button>
      )}
    </div>
  );
});
