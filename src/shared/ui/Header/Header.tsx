import { memo } from 'react';

import { LogoHeader } from '@/assets';

import './Header.css';

export const Header = memo(() => {
  return (
    <div className='header-wrapper'>
      <LogoHeader />
    </div>
  );
});
