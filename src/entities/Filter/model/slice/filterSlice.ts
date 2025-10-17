import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { FilterSchema } from '../types/FilterSchema';

const FIRST_PAGE = 1;

const initialState: FilterSchema = {
  search: '',
  status: '',
  species: '',
  gender: '',
  page: FIRST_PAGE
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    onChangeStatus(state, action: PayloadAction<string>) {
      state.status = action.payload;
      state.page = FIRST_PAGE;
    },
    onChangeSpecies(state, action: PayloadAction<string>) {
      state.species = action.payload;
      state.page = FIRST_PAGE;
    },
    onChangeGender(state, action: PayloadAction<string>) {
      state.gender = action.payload;
      state.page = FIRST_PAGE;
    },
    onChangePage(state) {
      state.page = state.page + 1;
    },
    onChangeSearchValue(state, action: PayloadAction<string>) {
      state.search = action.payload;
      state.page = FIRST_PAGE;
    }
  }
});

export const { actions: filterActions } = filterSlice;
export const { reducer: filterReducer } = filterSlice;
