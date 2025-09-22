import { memo } from 'react';

import {
  Error,
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
    error,
    isLoading,
    isTargetElementVisible,
    isSmallLoaderVisible
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
          variant='bigLoader'
          text='Loading characters...'
        />
      ) : (
        <CharactersWrapper
          error={error}
          characters={data}
          onTurnNextPage={onTurnNextPage}
          isShowedLoader={isSmallLoaderVisible}
          isShowedTargetElement={isTargetElementVisible}
        />
      )}
      <Error error={error} />
    </PageLayout>
  );
});
