import { CharacterSchema, CharactersSchema } from '@/entities/Character';
import { FilterSchema } from '@/entities/Filter';
import { rtkApi } from '@/shared';

export interface StateSchema {
  character: CharacterSchema;
  characters: CharactersSchema;
  filter: FilterSchema;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
}

export interface ThunkConfig<T = unknown> {
  rejectValue: T;
  state: StateSchema;
}
