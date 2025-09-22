import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router';

import { CharacterPage, MainPage } from '@/pages';

function App() {
  return (
    <>
      <Routes>
        <Route
          path=''
          element={<MainPage />}
        />
        <Route
          path='characters/:id'
          element={<CharacterPage />}
        />
      </Routes>
      <Toaster />
    </>
  );
}
export default App;
