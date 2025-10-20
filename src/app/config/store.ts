import { configureStore } from '@reduxjs/toolkit';

import { characterReducer, charactersReducer } from '@/entities/Character';
import { filterReducer } from '@/entities/Filter';
import { rtkApi } from '@/shared';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    character: characterReducer,
    characters: charactersReducer,
    [rtkApi.reducerPath]: rtkApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rtkApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
