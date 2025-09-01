import { getValidParams } from "@/lib/helper";
import { FilterProps } from "@/lib/hooks";
import { $api } from "./api";

export const getCharacters = async (filter: FilterProps) => {
  try {
    const response = await $api.get("character/", {
      params: {
        page: 1,
        ...getValidParams(filter),
      },
    });

    return response.data.results;
  } catch (error) {
    console.error("Ошибка при запросе:", error);
    throw error;
  }
};
