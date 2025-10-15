import { useCallback, useMemo } from 'react';

import {
  charactersActions,
  editingCharacterActions,
  getEdithingCharacterData,
  getErrorEdithingCharacter,
  getReadOnly
} from '@/entities/Character';
import {
 
  SelectOption,
  optionsStatus,
  useAppDispatch,
  useAppSelector
} from '@/shared';
import { Character } from '@/entities/Character/model/types/Character';

interface UseEditingCharacterResult {
  readOnly: boolean;
  name: string;
  location: string;
  status: string;
  error?: string | null;
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
  const dispatch = useAppDispatch();
  const error = useAppSelector(getErrorEdithingCharacter(character.id));
  const data = useAppSelector(getEdithingCharacterData(character.id));
  const readOnly = useAppSelector(getReadOnly(character.id));

  const enableEditingMode = useCallback(() => {
    dispatch(
      editingCharacterActions.setReadOnly({
        name: character?.name,
        location: character?.location.name,
        status: character?.status,
        id: character.id,
        readOnly: false
      })
    );
  }, [
    dispatch,
    character.name,
    character.location.name,
    character.status,
    character.id
  ]);

  const onCancelEditMode = useCallback(() => {
    dispatch(editingCharacterActions.setCancelEdit());
  }, [dispatch]);

  const updateNameCharacterCard = useCallback(
    (value: string) => {
      dispatch(editingCharacterActions.setName(value));
    },
    [dispatch]
  );

  const updateLocationCharacterCard = useCallback(
    (value: string) => {
      dispatch(editingCharacterActions.setLocation(value));
    },
    [dispatch]
  );

  const updateStatusCharacterCard = useCallback(
    (value: string) => {
      dispatch(editingCharacterActions.setStatus(value));
    },
    [dispatch]
  );

  const onEditCharacterCard = useCallback(() => {
    if (error) {
      return;
    }
    if (data?.name && data?.location && data?.status) {
      dispatch(
        charactersActions.onEditCharacterCard({
          id: character.id,
          name: data?.name,
          location: data?.location,
          status: data?.status
        })
      );
    }
    dispatch(editingCharacterActions.setCancelEdit());
  }, [character.id, data?.location, data?.name, data?.status, dispatch, error]);

  const statusCharacter = useMemo(() => {
    return optionsStatus.find((el) => el.content === character.status);
  }, [character.status]);

  return {
    statusCharacter,
    readOnly,
    name: readOnly ? character.name : (data?.name ?? ''),
    location: readOnly ? character.location.name : (data?.location ?? ''),
    status: readOnly ? character.status : data!.status,
    error,
    onEditCharacterCard,
    updateStatusCharacterCard,
    updateLocationCharacterCard,
    updateNameCharacterCard,
    enableEditingMode,
    onCancelEditMode
  };
}
