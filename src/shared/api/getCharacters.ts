import { $api, Character, FilterProps, getValidParams } from '@/shared';

export const getCharacters = async (filter: FilterProps) => {
  try {
    const response = await $api.get('character/', {
      params: {
        ...getValidParams(filter)
      }
    });
    const { info, results } = response.data;
    const { next } = info;

    const modifiedResult = results.map((character: Character) => {
      if (character.status === 'unknown') {
        return { ...character, status: 'Unknown' };
      }
      return character;
    });

    return { next: Boolean(next), results: modifiedResult };
  } catch (error) {
    console.error('Ошибка при запросе:', error);
    throw error;
  }
};
