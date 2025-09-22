import { type ReactNode } from 'react';

import { Footer } from '@/shared';
import { Header } from '@/shared';

import './PageLayout.css';

interface PageLayoutProps {
  head?: ReactNode;
  footer?: ReactNode;
  children: ReactNode;
}

export const PageLayout = ({
  head = <Header />,
  footer = <Footer />,
  children
}: PageLayoutProps) => {
  return (
    <div className={'PageLayout'}>
      <div className={'head'}>{head}</div>
      <div className={'center'}>{children}</div>
      <div className={'footer'}>{footer}</div>
    </div>
  );
};
