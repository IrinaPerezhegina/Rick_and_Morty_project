import { memo } from 'react';

import './Loader.css';

export type LoaderSize = 'smallLoader' | 'bigLoader';

interface LoaderProps {
  isLoading?: boolean;
  variant?: LoaderSize;
  text?: string;
}

export const Loader = memo((props: LoaderProps) => {
  const { isLoading, variant = 'big', text = '' } = props;

  if (!isLoading) {
    return;
  }

  return (
    <div className='Loader'>
      <img
        className={variant}
        src='/src/assets/loader.svg'
        alt='logo'
      />
      <p className={`${variant}Text`}>{text}</p>
    </div>
  );
});
