import { StateSchema } from '@/app/config';

export const getFilterStatus = (state: StateSchema) => state.filter.status;

export const getFilterGenderValue = (state: StateSchema) => state.filter.gender;

export const getFilterPage = (state: StateSchema) => state.filter.page;

export const getFilterSearchValue = (state: StateSchema) => state.filter.search;

export const getFilterSpeciesValue = (state: StateSchema) =>
  state.filter.species;

export const getFilters = (state: StateSchema) => state.filter;

export const getIsBigLoaderVisible = (state: StateSchema) =>
  state.characters.isLoading && state.filter.page === 1;

export const getIsSmallLoaderVisible = (state: StateSchema) =>
  state.characters.isLoading && state.filter.page > 1;
