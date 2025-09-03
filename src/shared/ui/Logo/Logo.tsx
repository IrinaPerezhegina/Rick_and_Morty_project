import { memo } from "react";

import "./Logo.css";

export const Logo = memo(() => {
  return (
    <div>
      <img className="logo" src="/src/assets/logo.png" alt="logo" />
    </div>
  );
});
