import { StateSchema } from '@/app/config';

export const getCharacterDetails = (state: StateSchema) =>
  state.character.character;

export const getCharacterDetailsIsLoading = (state: StateSchema) =>
  state.character.isLoading;

export const getCharacterDetailsError = (state: StateSchema) =>
  state.character.error;
