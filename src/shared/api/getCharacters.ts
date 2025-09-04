import { getValidParams } from "@/shared/lib/helper";
import { FilterProps } from "@/shared/lib/hooks";
import { $api } from "./api";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const getCharacters = async (filter: FilterProps) => {
  try {
    await delay(1000);
    const response = await $api.get("character/", {
      params: {
        ...getValidParams(filter),
      },
    });
    const { info, results } = response.data;
    const { next } = info;

    return { next: Boolean(next), results };
  } catch (error) {
    console.error("Ошибка при запросе:", error);
    throw error;
  }
};
