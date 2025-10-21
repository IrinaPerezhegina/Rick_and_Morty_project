import { FilterProps } from '@/entities/Filter';
import { getValidParams, rtkApi } from '@/shared';

import { Character } from '../model/types/Character';

interface ResponseProps {
  results: Character[];
  info: {
    count: number;
    page: number;
    next: string | null;
    prev: string | null;
  };
}

interface FetchCharactersReturnProps {
  results: Character[];
  next: boolean;
  page: number;
}

export const charactersApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getCharactersListData: build.query<FetchCharactersReturnProps, FilterProps>(
      {
        query: (filter: FilterProps) => ({
          url: '/character',
          params: { ...getValidParams(filter) }
        }),
        transformResponse: (
          response: ResponseProps,
          __meta,
          arg: FilterProps
        ) => {
          const { info, results } = response;
          const { next } = info;

          const modifiedResult = results.map((character: Character) => {
            if (character.status === 'unknown') {
              return { ...character, status: 'Unknown' };
            }
            return character;
          });

          return {
            next: Boolean(next),
            results: modifiedResult,
            page: arg.page
          };
        }
      }
    )
  })
});

export const useCharactersList = charactersApi.useGetCharactersListDataQuery;
