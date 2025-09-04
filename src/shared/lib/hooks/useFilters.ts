import { useCallback, useState } from "react";

import { useDebounce } from "@/shared/lib/hooks/useDebounce";

export interface FilterProps {
  searchValue: string;
  filterStatus: string;
  speciesValue: string;
  genderValue: string;
  page: number;
}

interface UseFiltersResult {
  onChangeStatus: (value: string) => void;
  onChangeSpecies: (value: string) => void;
  onChangeGender: (value: string) => void;
  debounceFetchData: (value: string) => void;
  onTurnNextPage: () => void;
  filter: FilterProps;
}

export function useFilters(): UseFiltersResult {
  const [filter, setFilter] = useState({
    searchValue: "",
    filterStatus: "",
    speciesValue: "",
    genderValue: "",
    page: 1,
  });

  const onChangeSearch = useCallback((value: string) => {
    setFilter((prev) => ({
      ...prev,
      searchValue: value,
      page: 1,
    }));
  }, []);

  const debounceFetchData = useDebounce(onChangeSearch, 1000);

  const onChangeStatus = useCallback((value: string) => {
    setFilter((prev) => ({
      ...prev,
      filterStatus: value,
      page: 1,
    }));
  }, []);

  const onChangeSpecies = useCallback((value: string) => {
    setFilter((prev) => ({
      ...prev,
      speciesValue: value,
      page: 1,
    }));
  }, []);

  const onChangeGender = useCallback((value: string) => {
    setFilter((prev) => ({
      ...prev,
      genderValue: value,
      page: 1,
    }));
  }, []);

  const onTurnNextPage = useCallback(() => {
    setFilter((prev) => ({
      ...prev,
      page: prev.page + 1,
    }));
  }, []);

  return {
    filter,
    onTurnNextPage,
    debounceFetchData,
    onChangeStatus,
    onChangeSpecies,
    onChangeGender,
  };
}
