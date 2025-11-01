import { memo } from 'react';

import { LogoIcon } from '@/assets';

import './Logo.css';

export const Logo = memo(() => {
  return (
    <div>
      <LogoIcon className='logo' />
    </div>
  );
});
