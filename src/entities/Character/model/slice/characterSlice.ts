import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { fetchCharacterById } from '../services/fetchCharacterById/fetchCharacterById';
import { Character } from '../types/Character';
import { CharacterSchema } from '../types/CharacterSchema';

const initialState: CharacterSchema = {
  isLoading: false,
  error: undefined,
  character: undefined
};

const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacterById.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchCharacterById.fulfilled,
        (state, action: PayloadAction<Character>) => {
          state.isLoading = false;
          state.character = action.payload;
        }
      )
      .addCase(fetchCharacterById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export const { actions: characterActions } = characterSlice;
export const { reducer: characterReducer } = characterSlice;
