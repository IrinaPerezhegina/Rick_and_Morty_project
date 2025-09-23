import { useCallback, useMemo, useState } from 'react';

import {
  Character,
  EditCharacterProps,
  SelectOption,
  optionsStatus
} from '@/shared';

export interface UseEditingCharacterProps {
  character: Character;
  onEditCharacter: (value: EditCharacterProps) => void;
}

interface UseEditingCharacterResult {
  statusCharacter?: SelectOption;
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
}

export function useEditingCharacter({
  character,
  onEditCharacter
}: UseEditingCharacterProps): UseEditingCharacterResult {
  const [readOnly, setReadOnly] = useState(true);
  const [name, setName] = useState(character.name);
  const [location, setLocation] = useState(character.location.name);
  const [status, setStatus] = useState(character.status);

  // Состояния для валидации
  const [nameError, setNameError] = useState<string | null>(null);

  const validateName = (value: string): string | null => {
    if (!value.trim()) {
      return 'Имя не может быть пустым';
    }
    if (value.length < 2) {
      return 'Имя должно содержать минимум 2 символа';
    }
    if (value.length > 20) {
      return 'Имя должно содержать максимум 30 символа';
    }
    return null;
  };

  const enableEditingMode = useCallback(() => {
    setReadOnly(false);
  }, []);

  const onCancelEditMode = useCallback(() => {
    setName(character.name);
    setLocation(character.location.name);
    setStatus(character.status);
    setNameError(null); // сброс ошибки
    setReadOnly((prev) => !prev);
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

    onEditCharacter({ id: character.id, name, location, status });
    setReadOnly(true);
  }, [character.id, location, name, onEditCharacter, status]);

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
