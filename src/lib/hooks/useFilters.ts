import { useCallback, useState } from "react";

import { useDebounce } from "@/lib/hooks/useDebounce";

export interface FilterProps {
  searchValue: string;
  filterStatus: string;
  speciesValue: string;
  genderValue: string;
}

interface UseFiltersResult {
  onChangeStatus: (value: string) => void;
  onChangeSpecies: (value: string) => void;
  onChangeGender: (value: string) => void;
  debounceFetchData: (value: string) => void;
  filter: FilterProps;
}

export function useFilters(): UseFiltersResult {
  const [filter, setFilter] = useState({
    searchValue: "",
    filterStatus: "",
    speciesValue: "",
    genderValue: "",
  });

  const onChangeSearch = useCallback((value: string) => {
    setFilter((prev) => ({
      ...prev,
      searchValue: value,
    }));
  }, []);

  const debounceFetchData = useDebounce(onChangeSearch, 1000);

  const onChangeStatus = useCallback((value: string) => {
    setFilter((prev) => ({
      ...prev,
      filterStatus: value,
    }));
  }, []);

  const onChangeSpecies = useCallback((value: string) => {
    setFilter((prev) => ({
      ...prev,
      speciesValue: value,
    }));
  }, []);

  const onChangeGender = useCallback((value: string) => {
    setFilter((prev) => ({
      ...prev,
      genderValue: value,
    }));
  }, []);

  return {
    filter,
    debounceFetchData,
    onChangeStatus,
    onChangeSpecies,
    onChangeGender,
  };
}
