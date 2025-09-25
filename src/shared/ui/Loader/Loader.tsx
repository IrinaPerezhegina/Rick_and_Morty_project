import { memo } from 'react';

import { ReactComponent as LoaderIcon } from '@/assets/loader.svg';

import './Loader.css';

export type LoaderSize = 'smallLoader' | 'bigLoader';

interface LoaderProps {
  isLoading?: boolean;
  variant?: LoaderSize;
  text?: string;
}

export const Loader = memo((props: LoaderProps) => {
  const { isLoading = true, variant = 'big', text = '' } = props;
  const style =
    variant === 'bigLoader' ? 'loader__big-text' : 'loader__small-text';

  if (!isLoading) {
    return;
  }

  return (
    <div className='loader'>
      <LoaderIcon className={variant} />
      <p className={style}>{text}</p>
    </div>
  );
});
