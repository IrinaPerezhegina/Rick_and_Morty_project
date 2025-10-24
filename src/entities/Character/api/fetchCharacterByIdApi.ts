import { rtkApi } from '@/shared';

import { Character } from '../model/types/Character';

// Создайте свою функцию fetch

const characterApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getCharacterById: build.query<Character, string | undefined>({
      query: (id: string) => ({
        url: `/character/${id}`
      })
    })
  })
});
export const useCharactersById = characterApi.useGetCharacterByIdQuery;
