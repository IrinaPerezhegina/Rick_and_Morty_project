import { Character } from './Character';

export interface CharactersSchema {
  data: Character[];
  isNext: boolean;
  isLoading: boolean;
  isLoadingInitial: boolean;
  error?: string;
}
