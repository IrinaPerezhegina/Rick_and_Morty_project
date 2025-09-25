import { memo } from 'react';

import { ReactComponent as LogoIcon } from '@/assets/logo.svg';

import './Logo.css';

export const Logo = memo(() => {
  return (
    <div>
      <LogoIcon className='logo' />
    </div>
  );
});
