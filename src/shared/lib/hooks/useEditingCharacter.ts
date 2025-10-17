import { useCallback, useMemo, useState } from 'react';

import { Character, charactersActions } from '@/entities/Character';
import {
  SelectOption,
  optionsStatus,
  useAppDispatch,
  validateName
} from '@/shared';

interface UseEditingCharacterResult {
  readOnly: boolean;
  name: string;
  location: string;
  status: string;
  nameError: string | null;
  onEditCharacterCard: () => void;
  updateStatusCharacterCard: (value: string) => void;
  updateLocationCharacterCard: (value: string) => void;
  updateNameCharacterCard: (value: string) => void;
  enableEditingMode: () => void;
  onCancelEditMode: () => void;
  statusCharacter?: SelectOption;
}

export function useEditingCharacter(
  character: Character
): UseEditingCharacterResult {
  const [readOnly, setReadOnly] = useState(true);
  const [name, setName] = useState(character.name);
  const [location, setLocation] = useState(character.location.name);
  const [status, setStatus] = useState(character.status);
  const dispatch = useAppDispatch();

  // Состояния для валидации
  const [nameError, setNameError] = useState<string | null>(null);

  const enableEditingMode = useCallback(() => {
    setReadOnly(false);
  }, []);

  const onCancelEditMode = useCallback(() => {
    setName(character.name);
    setLocation(character.location.name);
    setStatus(character.status);
    setNameError(null);
    setReadOnly(true);
  }, [character.name, character.location, character.status]);

  const updateNameCharacterCard = useCallback((value: string) => {
    setName(value);
    const error = validateName(value);
    setNameError(error);
  }, []);

  const updateLocationCharacterCard = useCallback((value: string) => {
    setLocation(value);
  }, []);

  const updateStatusCharacterCard = useCallback((value: string) => {
    setStatus(value);
  }, []);

  const onEditCharacterCard = useCallback(() => {
    const error = validateName(name);
    setNameError(error);

    if (error) {
      return;
    }

    dispatch(
      charactersActions.onEditCharacterCard({
        id: character.id,
        name,
        location,
        status
      })
    );

    setReadOnly(true);
  }, [character.id, dispatch, location, name, status]);

  const statusCharacter = useMemo(() => {
    return optionsStatus.find((el) => el.content === character.status);
  }, [character.status]);

  return {
    statusCharacter,
    readOnly,
    name,
    location,
    status,
    nameError,
    onEditCharacterCard,
    updateStatusCharacterCard,
    updateLocationCharacterCard,
    updateNameCharacterCard,
    enableEditingMode,
    onCancelEditMode
  };
}
