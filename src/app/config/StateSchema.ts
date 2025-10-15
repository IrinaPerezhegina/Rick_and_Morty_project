import {
  characterSchema,
  charactersSchema,
  editingCharacterSchema
} from '@/entities/Character';
import { filterSchema } from '@/entities/Filter';

export interface StateSchema {
  character: characterSchema;
  characters: charactersSchema;
  filter: filterSchema;
  editingCharacter: editingCharacterSchema;
}

export interface ThunkConfig<T = unknown> {
  rejectValue: T;
  state: StateSchema;
}
