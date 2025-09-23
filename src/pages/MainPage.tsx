import { memo } from 'react';

import {
  Loader,
  Logo,
  PageLayout,
  useFilters,
  useLoadingCharacterData
} from '@/shared';
import { CharactersWrapper, FilterPanelWidget } from '@/widgets';

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
    onEditCharacterCard
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
        <Loader
          isLoading={isLoading}
          variant='bigLoader'
          text='Loading characters...'
        />
      ) : (
        <CharactersWrapper
          onEditCharacter={onEditCharacterCard}
          characters={data}
          onTurnNextPage={onTurnNextPage}
          isShowedLoader={isSmallLoaderVisible}
          isShowedTargetElement={isTargetElementVisible}
        />
      )}
    </PageLayout>
  );
});
