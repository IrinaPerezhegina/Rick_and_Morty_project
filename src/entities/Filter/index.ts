export {
  getFilterGenderValue,
  getFilterPage,
  getFilters,
  getFilterSearchValue,
  getFilterSpeciesValue,
  getFilterStatus,
  getIsBigLoaderVisible,
  getIsSmallLoaderVisible
} from './model/selectors/getFilters';
export { filterReducer } from './model/slice/filterSlice';

export { filterActions } from './model/slice/filterSlice';

export { type FilterProps } from './model/types/Filter';
export { type FilterSchema } from './model/types/FilterSchema';
