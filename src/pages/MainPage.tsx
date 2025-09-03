import { memo } from "react";

import {
  Error,
  Loader,
  Logo,
  PageLayout,
  useFilters,
  useLoadingCharacterData,
} from "@/shared";
import { CharactersWrapper, CharacterWidget } from "@/widgets/CharacterWidget";
import { FilterPanelWidget } from "@/widgets/FilterPanelWidget";

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
    isLoading,
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

      {isLoading ? (
        <Loader variant="bigLoader" text="Loading characters..." />
      ) : (
        <CharactersWrapper
          onTurnNextPage={onTurnNextPage}
          isShowedLoader={isSmallLoaderVisible}
          isShowedTargetElement={isTargetElementVisible}
        >
          {data.map((character) => (
            <CharacterWidget key={character.id} character={character} />
          ))}
        </CharactersWrapper>
      )}

      {error && <Error error={error} />}
    </PageLayout>
  );
});
