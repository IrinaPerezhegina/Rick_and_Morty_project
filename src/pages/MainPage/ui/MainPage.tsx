import { memo, useCallback, useEffect } from 'react';
import toast from 'react-hot-toast';

import {
  fetchCharacters,
  getCharactersList,
  getCharactersListError,
  getCharactersListIsLoadingInitial,
  getIsTargetElementVisible
} from '@/entities/Character';
import {
  filterActions,
  getFilters,
  getIsBigLoaderVisible,
  getIsSmallLoaderVisible
} from '@/entities/Filter';
import {
  CharactersWrapper,
  Loader,
  Logo,
  useAppDispatch,
  useAppSelector
} from '@/shared';
import {
  CharacterWidget,
  FilterPanelWidget,
  InfiniteScrollWidget
} from '@/widgets';

const MainPage = memo(() => {
  const dispatch = useAppDispatch();
  const filter = useAppSelector(getFilters);
  const data = useAppSelector(getCharactersList);
  const error = useAppSelector(getCharactersListError);
  const isBigLoaderVisible = useAppSelector(getIsBigLoaderVisible);
  const isTargetElementVisible = useAppSelector(getIsTargetElementVisible);
  const isSmallLoaderVisible = useAppSelector(getIsSmallLoaderVisible);
  const isLoadingInitial = useAppSelector(getCharactersListIsLoadingInitial);

  // отображение ошибки
  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  });

  // загрузка персонажей
  useEffect(() => {
    dispatch(fetchCharacters(filter));
  }, [filter, dispatch]);

  // переход на новую страницу
  const onTurnNextPage = useCallback(() => {
    dispatch(filterActions.onChangePage());
  }, [dispatch]);

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
          <FilterPanelWidget />
          <CharactersWrapper isLoading={isBigLoaderVisible}>
            {data.length > 0 ? (
              data.map((data) => (
                <CharacterWidget
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
