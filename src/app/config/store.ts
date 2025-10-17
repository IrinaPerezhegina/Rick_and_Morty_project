import { configureStore } from '@reduxjs/toolkit';

import { StateSchema } from '@/app/config';
import { characterReducer, charactersReducer } from '@/entities/Character';
import { filterReducer } from '@/entities/Filter';

export const store = configureStore<StateSchema>({
  reducer: {
    filter: filterReducer,
    character: characterReducer,
    characters: charactersReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
