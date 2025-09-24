import { memo } from 'react';
import { useNavigate } from 'react-router';

import { classNames } from '@/shared/lib';

import { ReactComponent as GoBackArrow } from '@/assets/arrow_back.svg';

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
    <div className={classNames('GoBackButton', {}, [className])}>
      <button onClick={goBack}>
        <GoBackArrow />
        GO BACK
      </button>
    </div>
  );
});
