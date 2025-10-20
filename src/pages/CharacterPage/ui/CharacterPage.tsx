import { memo, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router';

import { useCharactersById } from '@/entities/Character';
import { Loader } from '@/shared';
import { CharacterProfileWidget } from '@/widgets';

const CharacterPage = memo(() => {
  const { id } = useParams();
  const { data: character, isError, isLoading } = useCharactersById(id);

  // useEffect для отображении ошибки
  useEffect(() => {
    if (isError) {
      toast.error('Data upload error');
    }
  }, [isError]);

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
