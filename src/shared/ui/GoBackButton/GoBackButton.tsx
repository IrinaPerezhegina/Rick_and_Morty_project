import { memo } from 'react';
import { useNavigate } from 'react-router';

import { classNames } from '@/shared';

import { GoBackArrow } from '@/assets';

import './GoBackButton.css';

interface GoBackButtonProps {
  className?: string;
}

export const GoBackButton = memo((props: GoBackButtonProps) => {
  const { className } = props;
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // возвращаем назад
  };

  return (
    <div className={classNames('go-back-button', className)}>
      <button onClick={goBack}>
        <GoBackArrow />
        GO BACK
      </button>
    </div>
  );
});
