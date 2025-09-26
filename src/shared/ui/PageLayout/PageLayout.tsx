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
    <div className='page-layout'>
      <div className='page-layout__head'>{head}</div>
      <div className='page-layout__center'>{children}</div>
      <div className='page-layout__footer'>{footer}</div>
    </div>
  );
};
