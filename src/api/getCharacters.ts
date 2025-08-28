import { $api } from "./api";

export const getCharacters = async () => {
  try {
    const response = await $api.get("character/", {
      params: {
        page: 1,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Ошибка при запросе:", error);
  }
};
