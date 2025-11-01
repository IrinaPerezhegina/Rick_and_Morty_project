import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { HttpStatusCode } from 'axios';

import { charactersApi } from '../../api/fetchCharactersApi';
import { Character } from '../../model/types/Character';

import { CharactersSchema } from '../types/CharactersSchema';
import { FetchCharactersReturnProps } from '../types/FetchCharactersReturnProps';

const initialState: CharactersSchema = {
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
      .addMatcher(
        charactersApi.endpoints.getCharactersListData.matchPending,
        (state) => {
          state.error = undefined;
          state.isLoading = true;
        }
      )
      .addMatcher(
        charactersApi.endpoints.getCharactersListData.matchFulfilled,
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
      .addMatcher(
        charactersApi.endpoints.getCharactersListData.matchRejected,
        (state, action) => {
          if (action?.payload?.status === HttpStatusCode.NotFound) {
            state.error = undefined;
          } else {
            state.isLoadingInitial = false;
            state.error = 'Data upload error';
          }
          state.isLoading = false;
          state.data = [];
        }
      );
  }
});

export const { actions: charactersActions } = charactersSlice;
export const { reducer: charactersReducer } = charactersSlice;
