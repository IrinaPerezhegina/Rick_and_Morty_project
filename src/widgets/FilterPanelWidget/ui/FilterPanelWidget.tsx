import { memo } from 'react';

import {
  Input,
  Select,
  classNames,
  optionsGender,
  optionsStatus,
  optionsView
} from '@/shared';

import { ReactComponent as Loupe } from '@/assets/loupe.svg';

import './FilterPanelWidget.css';

interface FilterPanelWidgetProps {
  searchValue: string;
  speciesValue: string;
  genderValue: string;
  statusValue: string;
  onChangeSearch: (value: string) => void;
  onChangeStatus: (value: string) => void;
  onChangeSpecies: (value: string) => void;
  onChangeGender: (value: string) => void;
  className?: string;
}

export const FilterPanelWidget = memo((props: FilterPanelWidgetProps) => {
  const {
    searchValue,
    speciesValue,
    genderValue,
    statusValue,
    onChangeGender,
    onChangeSpecies,
    onChangeSearch,
    onChangeStatus,
    className
  } = props;

  return (
    <div className={classNames('filter-panel-widget', className)}>
      <Input
        name='search'
        isControlled={false}
        onChange={onChangeSearch}
        Svg={<Loupe />}
        size='big'
        view='filter'
        value={searchValue}
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
