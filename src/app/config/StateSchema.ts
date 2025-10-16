import { CharacterSchema, CharactersSchema } from '@/entities/Character';
import { FilterSchema } from '@/entities/Filter';

export interface StateSchema {
  character: CharacterSchema;
  characters: CharactersSchema;
  filter: FilterSchema;
}

export interface ThunkConfig<T = unknown> {
  rejectValue: T;
  state: StateSchema;
}
