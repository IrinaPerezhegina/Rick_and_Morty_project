import { memo, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router';

import { Character, Loader, PageLayout, getCharacterById } from '@/shared';
import { CharacterInfoWidget } from '@/widgets';

export const CharacterPage = memo(() => {
  const { id } = useParams();
  const [character, setCharacter] = useState<Character>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  let isFetching = false;

  useEffect(() => {
    if (isFetching) return;
    setIsLoading(true);
    if (id) {
      getCharacterById(id)
        .then((data) => {
          setCharacter(data);
        })

        .catch(() => {
          toast.error('Не удалось подгрузить персонажа');
        })
        .finally(() => setIsLoading(false));
    }

    isFetching = true;
  }, [id]);

  return (
    <PageLayout>
      <Loader
        isLoading={isLoading}
        variant='bigLoader'
        text='Loading character card...'
      />
      {!isLoading && <CharacterInfoWidget character={character} />}
    </PageLayout>
  );
});
