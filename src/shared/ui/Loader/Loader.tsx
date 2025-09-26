import { memo } from 'react';

import { classNames } from '@/shared';

import { ReactComponent as LoaderIcon } from '@/assets/loader.svg';

import './Loader.css';

export type LoaderSize = 'smallLoader' | 'bigLoader';

interface LoaderProps {
  isLoading?: boolean;
  variant?: LoaderSize;
  text?: string;
}

export const Loader = memo((props: LoaderProps) => {
  const { isLoading = true, variant = 'smallLoader', text = '' } = props;

  if (!isLoading) {
    return;
  }

  return (
    <div
      className={classNames('loader', {
        loader_big: variant === 'bigLoader',
        loader_small: variant === 'smallLoader'
      })}
    >
      <LoaderIcon />
      <p>{text}</p>
    </div>
  );
});
