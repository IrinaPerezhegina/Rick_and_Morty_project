import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router';

import { CharacterPage, MainPage } from '@/pages';
import { Loader, PageLayout } from '@/shared';

function App() {
  return (
    <PageLayout>
      <Routes>
        <Route
          path='/'
          element={
            <Suspense
              fallback={
                <Loader
                  variant='bigLoader'
                  text='Loading character card...'
                />
              }
            >
              <MainPage />
            </Suspense>
          }
        />
        <Route
          path='characters/:id'
          element={
            <Suspense
              fallback={
                <Loader
                  variant='bigLoader'
                  text='Loading characters...'
                />
              }
            >
              <CharacterPage />
            </Suspense>
          }
        />
      </Routes>
      <Toaster />
    </PageLayout>
  );
}
export default App;
