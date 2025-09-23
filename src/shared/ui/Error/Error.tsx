import { memo } from 'react';

import { classNames } from '@/shared';

import './Error.css';

interface ErrorProps {
  error: string | null;
  className?: string;
}

export const Error = memo((props: ErrorProps) => {
  const { className, error } = props;
  if (!error) {
    return;
  }

  return <div className={classNames('error', className)}>{error}</div>;
});
