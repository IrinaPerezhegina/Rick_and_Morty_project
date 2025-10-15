import { Character } from './Character';

export interface charactersSchema {
  isLoading: boolean;
  error?: string;
  data: Character[] | [];
  isNext: boolean;
  isLoadingInitial: boolean;
}
