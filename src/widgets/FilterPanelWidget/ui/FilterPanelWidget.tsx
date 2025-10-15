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

import { ReactComponent as Loupe } from '@/assets/loupe.svg';

import './FilterPanelWidget.css';

interface FilterPanelWidgetProps {
  className?: string;
}

export const FilterPanelWidget = memo((props: FilterPanelWidgetProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const genderValue = useAppSelector(getFilterGenderValue);
  const statusValue = useAppSelector(getFilterStatus);
  const searchValue = useAppSelector(getFilterSearchValue);
  const speciesValue = useAppSelector(getFilterSpeciesValue);
  const [inputValue, setInputValue] = useState(searchValue);

  const debounceFetchData = useDebounce(
    (value: string) => dispatch(filterActions.onChangeSearchValue(value)),
    1000
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
        value={inputValue}
        placeholder='Filter by name...'
      />
      <Select
        placeholder='Species'
        view='big'
        value={speciesValue}
        onChange={onChangeSpecies}
        options={optionsView}
      />
      <Select
        placeholder='Gender'
        view='big'
        value={genderValue}
        onChange={onChangeGender}
        options={optionsGender}
      />
      <Select
        placeholder='Status'
        value={statusValue}
        view='big'
        onChange={onChangeStatus}
        options={optionsStatus}
      />
    </div>
  );
});
