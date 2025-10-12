import { HttpStatusCode } from 'axios';
import { useCallback, useEffect, useState, useTransition } from 'react';
import toast from 'react-hot-toast';

import {
  Character,
  EditCharacterProps,
  FilterProps,
  getCharacters
} from '@/shared';

export function useLoadingCharacterData(filter: FilterProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isNext, setIsNext] = useState(true);
  const [data, setData] = useState<Character[]>([]);
  const [isLoadingInitial, setIsLoadingInitial] = useState(true);
  const [, startTransition] = useTransition();
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
          startTransition(() => setData(results));
        }

        if (filter.page > 1) {
          startTransition(() => setData((prev) => [...prev, ...results]));
        }
      })

      .catch((error) => {
        if (error.status === HttpStatusCode.NotFound) {
          setData([]);
        } else {
          setData([]);
          toast.error('Data upload error');
        }
      })
      .finally(() => {
        if (isLoadingInitial) {
          setIsLoadingInitial(false);
        }

        setIsLoading(false);
      });

    isFetching = true;
  }, [filter]);

  const onEditCharacterCard = useCallback((value: EditCharacterProps) => {
    setData((prev: Character[]) =>
      prev.map((item) =>
        item.id === value.id
          ? {
              ...item,
              name: value.name,
              status: value.status,
              location: { name: value.location, url: item.location.url }
            }
          : item
      )
    );
  }, []);

  return {
    data,
    isLoading: isBigLoaderVisible,
    isTargetElementVisible,
    isSmallLoaderVisible,
    isLoadingInitial,
    onEditCharacterCard
  };
}
