import { memo } from 'react';

import { ReactComponent as LogoIcon } from '@/assets/logo-black.svg';

export const Header = memo(() => {
  return (
    <div>
      <LogoIcon />
    </div>
  );
});
