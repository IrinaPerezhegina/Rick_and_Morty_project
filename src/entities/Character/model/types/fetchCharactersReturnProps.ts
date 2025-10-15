import { Character } from '../types/Character';

export interface FetchCharactersReturnProps {
  results: Character[];
  page: number;
  next: boolean;
}
