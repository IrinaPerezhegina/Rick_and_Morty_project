import { useCallback, useState } from "react";
interface FilterProps {
  searchValue: string;
  filterStatus: string;
  speciesValue: string;
  genderValue: string;
}
interface UseFiltersResult {
  onChangeStatus: (value: string) => void;
  onChangeSpecies: (value: string) => void;
  onChangeGender: (value: string) => void;
  onChangeSearch: (value: string) => void;
  filter: FilterProps;
}

export function useFilters(): UseFiltersResult {
  const [filter, setFilter] = useState({
    searchValue: "",
    filterStatus: "Status",
    speciesValue: "Species",
    genderValue: "Gender",
  });

  const onChangeSearch = useCallback((value: string) => {
    setFilter((prev) => ({
      ...prev,
      searchValue: value,
    }));
  }, []);

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
    onChangeSearch,
    onChangeStatus,
    onChangeSpecies,
    onChangeGender,
  };
}
