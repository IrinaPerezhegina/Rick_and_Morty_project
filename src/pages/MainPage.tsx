import { memo } from 'react';

import {
  CharactersWrapper,
  Loader,
  Logo,
  PageLayout,
  useFilters,
  useLoadingCharacterData
} from '@/shared';
import {
  CharacterWidget,
  FilterPanelWidget,
  InfiniteScrollWidget
} from '@/widgets';

export const MainPage = memo(() => {
  const {
    filter,
    onChangeGender,
    debounceFetchData,
    onChangeSpecies,
    onChangeStatus,
    onTurnNextPage
  } = useFilters();

  const {
    data,
    isLoading,
    isTargetElementVisible,
    isSmallLoaderVisible,
    onEditCharacterCard,
    isLoadingInitial
  } = useLoadingCharacterData(filter);

  return (
    <PageLayout>
      <Logo />

      {isLoadingInitial ? (
        <Loader
          variant='bigLoader'
          text='Loading characters...'
        />
      ) : (
        <>
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
          <CharactersWrapper isLoading={isLoading}>
            {data.length > 0 ? (
              data.map((data) => (
                <CharacterWidget
                  onEditCharacter={onEditCharacterCard}
                  key={data.id}
                  character={data}
                />
              ))
            ) : (
              <span>No data...</span>
            )}
            <Loader
              isLoading={isSmallLoaderVisible}
              variant='smallLoader'
            />
            {isTargetElementVisible && (
              <InfiniteScrollWidget onScrollEnd={onTurnNextPage} />
            )}
          </CharactersWrapper>
        </>
      )}
    </PageLayout>
  );
});
