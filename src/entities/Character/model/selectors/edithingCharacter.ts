import { StateSchema } from '@/app/config';

export const getReadOnly = (id: number) => (state: StateSchema) => {
  if (state.editingCharacter?.id) {
    return state.editingCharacter.id === id
      ? state.editingCharacter.readOnly
      : true;
  } else {
    return true;
  }
};

export const getEdithingCharacterData =
  (id: number) => (state: StateSchema) => {
    if (state.editingCharacter?.id === id) {
      return {
        name: state.editingCharacter.name,
        location: state.editingCharacter.location,
        status: state.editingCharacter.status
      };
    }
  };

export const getErrorEdithingCharacter =
  (id: number) => (state: StateSchema) => {
    if (state.editingCharacter?.id === id) {
      return state.editingCharacter.error;
    }
  };
