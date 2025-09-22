import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import { Character, FilterProps, getCharacters } from '@/shared';

export function useLoadingCharacterData(filter: FilterProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isNext, setIsNext] = useState(true);
  const [data, setData] = useState<Character[]>([]);

  const isBigLoaderVisible = isLoading && filter.page === 1;
  const isTargetElementVisible = !isLoading && isNext && data.length > 0;
  const isSmallLoaderVisible = isLoading && filter.page > 1;

  let isFetching = false;

  useEffect(() => {
    if (isFetching) return;
    setIsLoading(true);

    getCharacters(filter)
      .then(({ next, results }) => {
        setIsNext(next);

        if (filter.page === 1) {
          setData(results);
        }

        if (filter.page > 1) {
          setData((prev) => [...prev, ...results]);
        }
      })

      .catch((error) => {
        if (error.status === 404) {
          setData([]);
        } else {
          console.log('error');
          setData([]);
          toast.error('Ошибка загрузки данных');
        }
      })
      .finally(() => setIsLoading(false));

    isFetching = true;
  }, [filter]);

  return {
    data,
    isLoading: isBigLoaderVisible,
    isTargetElementVisible,
    isSmallLoaderVisible
  };
}
