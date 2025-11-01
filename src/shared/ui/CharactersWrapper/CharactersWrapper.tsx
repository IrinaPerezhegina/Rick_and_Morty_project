import { PropsWithChildren, memo } from 'react';

import { Loader, classNames } from '@/shared';

import './CharactersWrapper.css';

interface CharactersWrapperProps {
  isLoading: boolean;
  className?: string;
}

export const CharactersWrapper = memo(
  (props: PropsWithChildren<CharactersWrapperProps>) => {
    const { className, children, isLoading } = props;

    if (isLoading) {
      return (
        <Loader
          variant='bigLoader'
          text='Loading characters...'
        />
      );
    }

    return (
      <div className={classNames('characters-wrapper', className)}>
        {children}
      </div>
    );
  }
);
