import { memo } from "react";

import { useFilters, useLoadingCharacterData } from "@/shared/lib/hooks";
import { Error } from "@/shared/ui/Error";
import { Loader } from "@/shared/ui/Loader";
import { Logo } from "@/shared/ui/Logo";
import { PageLayout } from "@/shared/ui/PageLayout";
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
    isShowBigLoader,
    isShowInfiniteScrollComponent,
    isShowSmallLoader,
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

      {isShowBigLoader ? (
        <Loader variant="bigLoader" text="Loading characters..." />
      ) : (
        <CharactersWrapper>
          {data.map((character) => (
            <CharacterWidget key={character.id} character={character} />
          ))}
        </CharactersWrapper>
      )}

      {isShowInfiniteScrollComponent && (
        <InfiniteScrollWidget onScrollEnd={onTurnNextPage} />
      )}
      {isShowSmallLoader && <Loader variant="smallLoader" />}
      {error && <Error error={error} />}
    </PageLayout>
  );
});
