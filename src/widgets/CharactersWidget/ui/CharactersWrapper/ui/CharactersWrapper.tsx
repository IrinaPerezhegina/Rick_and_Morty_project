import { Character, EditCharacterProps, Loader, classNames } from '@/shared';
import { InfiniteScrollWidget } from '@/widgets';

import { CharacterWidget } from '../../CharacterWidget';

import './CharactersWrapper.css';

interface CharactersWrapperProps {
  characters: Character[];
  onTurnNextPage: () => void;
  onEditCharacter: (value: EditCharacterProps) => void;
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
    onEditCharacter,
    isShowedLoader = false
  } = props;

  return (
    <div className={classNames('characters-wrapper', className)}>
      {characters.length > 0 ? (
        characters.map((character) => (
          <CharacterWidget
            onEditCharacter={onEditCharacter}
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
