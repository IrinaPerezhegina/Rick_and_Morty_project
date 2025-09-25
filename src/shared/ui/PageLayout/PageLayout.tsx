import { PropsWithChildren, type ReactNode } from 'react';

import { Footer, Header } from '@/shared';

import './PageLayout.css';

interface PageLayoutProps {
  head?: ReactNode;
  footer?: ReactNode;
}

export const PageLayout = ({
  head = <Header />,
  footer = <Footer />,
  children
}: PropsWithChildren<PageLayoutProps>) => {
  return (
    <div className='pageLayout'>
      <div className='pageLayout__head'>{head}</div>
      <div className='pageLayout__center'>{children}</div>
      <div className='pageLayout__footer'>{footer}</div>
    </div>
  );
};
