import { memo, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router';

import { Character, Loader, getCharacterById } from '@/shared';
import { CharacterProfileWidget } from '@/widgets';

const CharacterPage = memo(() => {
  const { id } = useParams();
  const [character, setCharacter] = useState<Character>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    if (id) {
      getCharacterById(id)
        .then((data) => {
          setCharacter(data);
        })
        .catch(() => {
          toast.error("Couldn't load the character");
        })
        .finally(() => setIsLoading(false));
    }
  }, [id]);

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
