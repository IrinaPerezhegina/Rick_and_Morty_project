import { PropsWithChildren, memo } from 'react';

import { classNames } from '@/shared';

import './CharactersWrapper.css';

interface CharactersWrapperProps {
  className?: string;
}

export const CharactersWrapper = memo(
  (props: PropsWithChildren<CharactersWrapperProps>) => {
    const { className, children } = props;

    return (
      <div className={classNames('characters-wrapper', className)}>
        {children}
      </div>
    );
  }
);
