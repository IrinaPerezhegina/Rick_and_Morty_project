import { Character } from './Character';

export interface FetchCharactersReturnProps {
  results: Character[];
  page: number;
  next: boolean;
}
