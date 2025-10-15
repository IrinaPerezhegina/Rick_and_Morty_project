import { Character } from './Character';

export interface characterSchema {
  isLoading: boolean;
  error?: string;
  character?: Character;
}
