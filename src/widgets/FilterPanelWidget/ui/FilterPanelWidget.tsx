import { memo } from "react";

import { ReactComponent as Loupe } from "@/assets/loupe.svg";

import {
  optionsGender,
  optionsStatus,
  optionsView,
} from "@/shared/constants/select";
import { classNames } from "@/shared/lib/helper";
import { Input, Select } from "@/shared/ui";

import "./FilterPanelWidget.css";

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
    className,
    searchValue,
    speciesValue,
    genderValue,
    statusValue,
    onChangeGender,
    onChangeSpecies,
    onChangeSearch,
    onChangeStatus,
  } = props;

  return (
    <div className={classNames("FilterPanelWidget", [className])}>
      <Input
        name="search"
        onChange={onChangeSearch}
        Svg={<Loupe />}
        size="big"
        view="filter"
        value={searchValue}
        placeholder="Filter by name..."
      />
      <Select
        placeholder={"Species"}
        view="big"
        value={speciesValue}
        onChange={onChangeSpecies}
        options={optionsView}
      />
      <Select
        placeholder={"Gender"}
        view="big"
        value={genderValue}
        onChange={onChangeGender}
        options={optionsGender}
      />
      <Select
        placeholder={"Status"}
        value={statusValue}
        view="big"
        onChange={onChangeStatus}
        options={optionsStatus}
      />
    </div>
  );
});
