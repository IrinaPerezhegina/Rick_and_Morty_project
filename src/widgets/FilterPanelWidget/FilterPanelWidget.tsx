import { memo } from "react";
import { ReactComponent as Loupe } from "../../assets/loupe.svg";
import { Input } from "../../components/Input/Input";
import { Select, type SelectOption } from "../../components/Select/Select";
import { classNames } from "../../lib/classNames";
import "./FilterPanelWidget.css";

const optionsStatus: SelectOption[] = [
  { id: "status-1", content: "Alive" },
  { id: "status-2", content: "Dead" },
  { id: "status-3", content: "Unknown" },
];

const optionsView: SelectOption[] = [
  { id: "view-1", content: "Human" },
  { id: "view-2", content: "Alien" },
  { id: "view-3", content: "Humanoid" },
  { id: "view-4", content: "Animal" },
  { id: "view-5", content: "Robot" },
];

const optionsGender: SelectOption[] = [
  { id: "gender-1", content: "Gender" },
  { id: "gender-2", content: "Female" },
  { id: "gender-3", content: "Male" },
  { id: "gender-4", content: "Genderless" },
  { id: "gender-5", content: "Unknown" },
];

interface FilterPanelWidgetProps {
  className?: string;
}

export const FilterPanelWidget = memo((props: FilterPanelWidgetProps) => {
  const { className } = props;

  return (
    <div className={classNames("FilterPanelWidget", [className])}>
      <Input
        Svg={<Loupe />}
        size="big"
        view="filter"
        value=""
        placeholder="Filter by name..."
      />

      <Select
        view="big"
        nameFilter="Species"
        onChange={() => {}}
        options={optionsView}
      />
      <Select
        nameFilter="Gender"
        view="big"
        onChange={() => {}}
        options={optionsGender}
      />
      <Select
        nameFilter="Status"
        view="big"
        onChange={() => {}}
        options={optionsStatus}
      />
    </div>
  );
});
