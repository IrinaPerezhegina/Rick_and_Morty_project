import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { filterSchema } from '../../model/types/filterSchema';

const FIRST_PAGE = 1;

const initialState: filterSchema = {
  searchValue: '',
  filterStatus: '',
  speciesValue: '',
  genderValue: '',
  page: FIRST_PAGE
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    onChangeStatus(state, action: PayloadAction<string>) {
      state.filterStatus = action.payload;
      state.page = FIRST_PAGE;
    },
    onChangeSpecies(state, action: PayloadAction<string>) {
      state.speciesValue = action.payload;
      state.page = FIRST_PAGE;
    },
    onChangeGender(state, action: PayloadAction<string>) {
      state.genderValue = action.payload;
      state.page = FIRST_PAGE;
    },
    onChangePage(state) {
      console.log(state);

      state.page = state.page + 1;
    },
    onChangeSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
      state.page = FIRST_PAGE;
    }
  }
});

export const { actions: filterActions } = filterSlice;
export const { reducer: filterReducer } = filterSlice;
