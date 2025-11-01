import { CharactersSchema } from '@/entities/Character';
import { FilterSchema } from '@/entities/Filter';
import { rtkApi } from '@/shared';

export interface StateSchema {
  characters: CharactersSchema;
  filter: FilterSchema;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
}
