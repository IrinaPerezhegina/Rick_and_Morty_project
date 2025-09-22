import { Character, Loader, classNames } from '@/shared';
import { CharacterWidget, InfiniteScrollWidget } from '@/widgets';

import './CharactersWrapper.css';

interface CharactersWrapperProps {
  characters: Character[];
  onTurnNextPage: () => void;
  className?: string;
  isShowedLoader?: boolean;
  isShowedTargetElement?: boolean;
}

export const CharactersWrapper = (props: CharactersWrapperProps) => {
  const {
    className,
    characters,

    isShowedTargetElement,
    onTurnNextPage,
    isShowedLoader = false
  } = props;

  return (
    <div className={classNames('CharactersWrapper', className)}>
      {characters.length > 0 ? (
        characters.map((character) => (
          <CharacterWidget
            key={character.id}
            character={character}
          />
        ))
      ) : (
        <span>Нет данных...</span>
      )}

      {isShowedLoader && (
        <div className='loader'>
          <Loader variant='smallLoader' />
        </div>
      )}
      {isShowedTargetElement && (
        <InfiniteScrollWidget onScrollEnd={onTurnNextPage} />
      )}
    </div>
  );
};
