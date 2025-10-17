import { Character } from './Character';

export interface CharacterSchema {
  isLoading: boolean;
  error?: string;
  character?: Character;
}
