import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { Character } from '../../model/types/Character';
import { fetchCharacters } from '../services/fetchCharacters/fetchCharacters';
import { charactersSchema } from '../types/charactersSchema';
import { FetchCharactersReturnProps } from '../types/fetchCharactersReturnProps';

const initialState: charactersSchema = {
  isLoading: false,
  error: undefined,
  data: [],
  isNext: true,
  isLoadingInitial: true
};

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    onEditCharacterCard(
      state,
      action: PayloadAction<{
        id: number;
        name: string;
        status: string;
        location: string;
      }>
    ) {
      state.data = state.data.map((character: Character) => {
        if (character.id === action.payload.id) {
          return {
            ...character,
            name: action.payload.name,
            status: action.payload.status,
            location: {
              name: action.payload.location,
              url: character.location.url
            }
          };
        }
        return character;
      });
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchCharacters.fulfilled,
        (state, action: PayloadAction<FetchCharactersReturnProps>) => {
          if (action.payload.page === 1) {
            state.data = action.payload.results;
          }
          if (action.payload.page > 1) {
            state.data = [...state.data, ...action.payload.results];
          }
          state.isNext = action.payload.next;
          state.error = undefined;
          state.isLoading = false;
          state.isLoadingInitial = false;
        }
      )
      .addCase(fetchCharacters.rejected, (state, action) => {
        if (action.payload === '404') {
          state.data = [];
          state.isLoading = false;
          state.error = undefined;
        } else {
          state.data = [];
          state.isLoading = false;
          state.isLoadingInitial = false;
          state.error = action.payload;
        }
      });
  }
});

export const { actions: charactersActions } = charactersSlice;
export const { reducer: charactersReducer } = charactersSlice;
