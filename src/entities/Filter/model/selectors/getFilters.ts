import { StateSchema } from '@/app/config';

export const getFilterStatus = (state: StateSchema) =>
  state.filter.filterStatus;

export const getFilterGenderValue = (state: StateSchema) =>
  state.filter.genderValue;

export const getFilterPage = (state: StateSchema) => state.filter.page;

export const getFilterSearchValue = (state: StateSchema) =>
  state.filter.searchValue;

export const getFilterSpeciesValue = (state: StateSchema) =>
  state.filter.speciesValue;

export const getFilters = (state: StateSchema) => state.filter;

export const getIsBigLoaderVisible = (state: StateSchema) =>
  state.characters.isLoading && state.filter.page === 1;

export const getIsSmallLoaderVisible = (state: StateSchema) =>
  state.characters.isLoading && state.filter.page > 1;
