import { memo } from 'react';

import {
  CharactersWrapper,
  Loader,
  Logo,
  useFilters,
  useLoadingCharacterData
} from '@/shared';
import {
  CharacterWidget,
  FilterPanelWidget,
  InfiniteScrollWidget
} from '@/widgets';

const MainPage = memo(() => {
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
    isLoadingInitial,
    onEditCharacterCard
  } = useLoadingCharacterData(filter);

  return (
    <>
      <Logo />

      {isLoadingInitial ? (
        <Loader
          variant='bigLoader'
          text='Loading characters...'
        />
      ) : (
        <>
          <FilterPanelWidget
            genderValue={filter.genderValue}
            searchValue={filter.searchValue}
            statusValue={filter.filterStatus}
            speciesValue={filter.speciesValue}
            onChangeGender={onChangeGender}
            onChangeSpecies={onChangeSpecies}
            onChangeStatus={onChangeStatus}
            onChangeSearch={debounceFetchData}
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
    </>
  );
});
export default MainPage;
