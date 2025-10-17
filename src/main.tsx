import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router';

import App from '@/App';
import { store } from '@/app/config';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename='Rick_and_Morty_project'>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
