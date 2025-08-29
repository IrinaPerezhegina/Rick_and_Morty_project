import type { FilterProps } from "../lib/hooks/useFilters";
import { $api } from "./api";

export const getCharacters = async (filter: FilterProps) => {
  try {
    const response = await $api.get("character/", {
      params: {
        page: 1,
        ...(filter.searchValue ? { name: filter.searchValue } : [null]),
        ...(filter.genderValue ? { gender: filter.genderValue } : [null]),
        ...(filter.speciesValue ? { spesies: filter.speciesValue } : [null]),
        ...(filter.filterStatus ? { spesies: filter.filterStatus } : [null]),
      },
    });

    return response.data.results;
  } catch (error) {
    console.error("Ошибка при запросе:", error);
    throw error;
  }
};
