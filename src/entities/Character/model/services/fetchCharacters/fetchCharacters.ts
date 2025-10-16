import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { HttpStatusCode } from 'axios';

import { ThunkConfig } from '@/app/config';
import { FilterProps } from '@/entities/Filter';
import { $api, getValidParams } from '@/shared';

import { Character } from '../../types/Character';
import { FetchCharactersReturnProps } from '../../types/fetchCharactersReturnProps';

interface ResponseProps {
  results: Character[];
  info: {
    count: number;
    page: number;
    next: string | null;
    prev: string | null;
  };
}

export const fetchCharacters = createAsyncThunk<
  FetchCharactersReturnProps,
  FilterProps,
  ThunkConfig<string>
>('characters/fetchCharacters', async (filter, { rejectWithValue }) => {
  try {
    const response = await $api.get<ResponseProps>('character/', {
      params: {
        ...getValidParams(filter)
      }
    });
    const { info, results } = response.data;
    const { next } = info;

    const modifiedResult = results.map((character: Character) => {
      if (character.status === 'unknown') {
        return { ...character, status: 'Unknown' };
      }
      return character;
    });

    return { next: Boolean(next), results: modifiedResult, page: filter.page };
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      if (error.status === HttpStatusCode.NotFound) {
        return rejectWithValue('404');
      }
    }
    console.error('Ошибка при запросе:', error);
    return rejectWithValue('Data upload error');
  }
});
