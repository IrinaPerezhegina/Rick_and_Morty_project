import { $api } from '@/shared';

// Задержка для получения данных с сервера
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const getCharacterById = async (id: string) => {
  try {
    await delay(1000);
    const { data } = await $api.get(`character/${id}`, {});
    return data;
  } catch (error) {
    console.error('Ошибка при запросе:', error);
    throw error;
  }
};
