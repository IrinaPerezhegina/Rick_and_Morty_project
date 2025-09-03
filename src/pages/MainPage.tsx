import { memo } from "react";

import { useFilters, useLoadingCharacterData } from "@/shared/lib/hooks";
import { Error, Loader, Logo, PageLayout } from "@/shared/ui";
import { CharactersWrapper, CharacterWidget } from "@/widgets/CharacterWidget";
import { FilterPanelWidget } from "@/widgets/FilterPanelWidget";
import { InfiniteScrollWidget } from "@/widgets/InfiniteScrollWidget";

export const MainPage = memo(() => {
  const {
    filter,
    onChangeGender,
    debounceFetchData,
    onChangeSpecies,
    onChangeStatus,
    onTurnNextPage,
  } = useFilters();

  const {
    data,
    error,
    isBigLoaderVisible,
    isTargetElementVisible,
    isSmallLoaderVisible,
  } = useLoadingCharacterData(filter);

  return (
    <PageLayout>
      <Logo />
      <FilterPanelWidget
        onChangeGender={onChangeGender}
        onChangeSpecies={onChangeSpecies}
        onChangeStatus={onChangeStatus}
        onChangeSearch={debounceFetchData}
        genderValue={filter.genderValue}
        searchValue={filter.searchValue}
        statusValue={filter.filterStatus}
        speciesValue={filter.speciesValue}
      />

      {isBigLoaderVisible ? (
        <Loader variant="bigLoader" text="Loading characters..." />
      ) : (
        <CharactersWrapper isShow={isSmallLoaderVisible}>
          {data.map((character) => (
            <CharacterWidget key={character.id} character={character} />
          ))}
        </CharactersWrapper>
      )}
      {isTargetElementVisible && (
        <InfiniteScrollWidget onScrollEnd={onTurnNextPage} />
      )}
      {error && <Error error={error} />}
    </PageLayout>
  );
});
