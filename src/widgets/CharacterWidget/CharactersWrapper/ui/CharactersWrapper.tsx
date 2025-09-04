import { Character, classNames, Loader } from "@/shared";
import { CharacterWidget } from "@/widgets/CharacterWidget/CharacterWidget";
import { InfiniteScrollWidget } from "@/widgets/InfiniteScrollWidget";

import "./CharactersWrapper.css";

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
    isShowedLoader = false,
  } = props;

  return (
    <div className={classNames("CharactersWrapper", className)}>
      {characters.map((character) => (
        <CharacterWidget key={character.id} character={character} />
      ))}
      {isShowedLoader && (
        <div className="loader">
          <Loader variant="smallLoader" />
        </div>
      )}
      {isShowedTargetElement && (
        <InfiniteScrollWidget onScrollEnd={onTurnNextPage} />
      )}
    </div>
  );
};
