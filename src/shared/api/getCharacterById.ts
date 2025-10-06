import { $api } from '@/shared';

export const getCharacterById = async (id: string) => {
  try {
    const { data } = await $api.get(`character/${id}`, {});
    return data;
  } catch (error) {
    console.error('Ошибка при запросе:', error);
    throw error;
  }
};
