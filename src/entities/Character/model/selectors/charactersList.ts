import { StateSchema } from '@/app/config';

export const getCharactersList = (state: StateSchema) => state.characters.data;

export const getCharactersListIsLoading = (state: StateSchema) =>
  state.characters.isLoading;

export const getCharactersListError = (state: StateSchema) =>
  state.characters.error;

export const getCharactersListIsLoadingInitial = (state: StateSchema) =>
  state.characters.isLoadingInitial;

export const getIsTargetElementVisible = (state: StateSchema) =>
  !state.characters.isLoading &&
  state.characters.isNext &&
  state.characters.data.length > 0;
