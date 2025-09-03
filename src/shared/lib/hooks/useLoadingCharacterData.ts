import { useEffect, useState } from "react";

import { getCharacters } from "@/shared/api/getCharacters";
import { FilterProps } from "@/shared/lib/hooks/useFilters";
import { Character } from "@/shared/types/character";

export function useLoadingCharacterData(filter: FilterProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isNext, setIsNext] = useState(true);
  const [data, setData] = useState<Character[]>([]);
  const [error, setError] = useState<string | null>(null);
  const isShowBigLoader = isLoading && !error && filter.page === 1;
  const isShowInfiniteScrollComponent = !isLoading && !error && isNext;
  const isShowSmallLoader = isLoading && !error && filter.page > 1;

  let isFetching = false;

  useEffect(() => {
    if (isFetching) return;
    setIsLoading(true);

    getCharacters(filter)
      .then(({ next, results }) => {
        setIsNext(next);
        setError(null);
        if (filter.page === 1) {
          setData(results);
        }
        if (filter.page > 1) {
          setData((prev) => [...prev, ...results]);
        }
      })
      .catch((error) => {
        setData([]);
        setError(error.response.data.error);
      })
      .finally(() => setIsLoading(false));

    isFetching = true;
  }, [filter]);

  return {
    data,
    error,
    isShowBigLoader,
    isShowInfiniteScrollComponent,
    isShowSmallLoader,
  };
}
