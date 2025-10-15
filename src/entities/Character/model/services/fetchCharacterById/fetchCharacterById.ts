import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/config';
import { $api } from '@/shared';

import { Character } from '../../types/Character';

export const fetchCharacterById = createAsyncThunk<
  Character,
  string,
  ThunkConfig<string>
>('caracter/fetchCharacterById', async (id, { rejectWithValue }) => {
  try {
    const response = await $api.get<Character>(`character/${id}`);

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (error: unknown) {
    console.error('Ошибка при запросе:', error);
    return rejectWithValue("Couldn't load the character");
  }
});
