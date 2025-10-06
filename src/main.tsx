import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';

import App from '@/App';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename='Rick_and_Morty_project'>
      <App />
    </BrowserRouter>
  </StrictMode>
);
