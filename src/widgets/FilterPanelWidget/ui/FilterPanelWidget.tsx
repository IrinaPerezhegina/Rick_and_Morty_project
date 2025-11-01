import { memo, useCallback, useState } from 'react';

import {
  filterActions,
  getFilterGenderValue,
  getFilterSearchValue,
  getFilterSpeciesValue,
  getFilterStatus
} from '@/entities/Filter';
import {
  Input,
  Select,
  classNames,
  optionsGender,
  optionsStatus,
  optionsView,
  useAppDispatch,
  useAppSelector,
  useDebounce
} from '@/shared';

import { Loupe } from '@/assets';

import './FilterPanelWidget.css';

const DELAY_TIME = 1000;

interface FilterPanelWidgetProps {
  className?: string;
}

export const FilterPanelWidget = memo((props: FilterPanelWidgetProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const gender = useAppSelector(getFilterGenderValue);
  const status = useAppSelector(getFilterStatus);
  const search = useAppSelector(getFilterSearchValue);
  const species = useAppSelector(getFilterSpeciesValue);
  const [searchValue, setInputValue] = useState(search);

  const debounceFetchData = useDebounce(
    (value: string) => dispatch(filterActions.onChangeSearchValue(value)),
    DELAY_TIME
  );

  const onChangeSearch = useCallback(
    (value: string) => {
      setInputValue(value);
      debounceFetchData(value);
    },
    [debounceFetchData]
  );

  const onChangeStatus = useCallback(
    (value: string) => {
      dispatch(filterActions.onChangeStatus(value));
    },
    [dispatch]
  );

  const onChangeSpecies = useCallback(
    (value: string) => {
      dispatch(filterActions.onChangeSpecies(value));
    },
    [dispatch]
  );

  const onChangeGender = useCallback(
    (value: string) => {
      dispatch(filterActions.onChangeGender(value));
    },
    [dispatch]
  );

  return (
    <div className={classNames('filter-panel-widget', className)}>
      <Input
        name='search'
        onChange={onChangeSearch}
        Svg={<Loupe />}
        size='big'
        view='bordered'
        value={searchValue}
        placeholder='Filter by name...'
      />
      <Select
        placeholder='Species'
        view='big'
        value={species}
        onChange={onChangeSpecies}
        options={optionsView}
      />
      <Select
        placeholder='Gender'
        view='big'
        value={gender}
        onChange={onChangeGender}
        options={optionsGender}
      />
      <Select
        placeholder='Status'
        value={status}
        view='big'
        onChange={onChangeStatus}
        options={optionsStatus}
      />
    </div>
  );
});
