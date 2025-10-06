import { memo } from 'react';

import { ReactComponent as LogoIcon } from '@/assets/logo-black.svg';

import './Header.css';

export const Header = memo(() => {
  return (
    <div className='header-wrapper'>
      <LogoIcon />
    </div>
  );
});
