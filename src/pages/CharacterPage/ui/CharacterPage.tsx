import { memo, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router';

import {
  fetchCharacterById,
  getCharacterDetails,
  getCharacterDetailsError,
  getCharacterDetailsIsLoading
} from '@/entities/Character';
import { Loader, useAppDispatch, useAppSelector } from '@/shared';
import { CharacterProfileWidget } from '@/widgets';

const CharacterPage = memo(() => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const error = useAppSelector(getCharacterDetailsError);
  const character = useAppSelector(getCharacterDetails);
  const isLoading = useAppSelector(getCharacterDetailsIsLoading);

  // useEffect для отображении ошибки
  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  // useEffect для запроса персонажа
  useEffect(() => {
    if (id) {
      dispatch(fetchCharacterById(id));
    }
  }, [id, dispatch]);

  return (
    <>
      <Loader
        isLoading={isLoading}
        variant='bigLoader'
        text='Loading character card...'
      />
      {!isLoading && <CharacterProfileWidget character={character} />}
    </>
  );
});

export default CharacterPage;
