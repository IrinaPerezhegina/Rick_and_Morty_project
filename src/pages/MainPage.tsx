import { memo } from "react";
import { PageLayout } from "../components/PageLayout/PageLayout";
import { Select, type SelectOption } from "../components/Select/Select";

const optionsGender: SelectOption[] = [
  { id: "gender-1", content: "Female" },
  { id: "gender-2", content: "Male" },
  { id: "gender-3", content: "Genderless" },
  { id: "gender-4", content: "Unknown" },
];

const optionsStatus: SelectOption[] = [
  { id: "status-1", content: "Alive", status: "green" },
  { id: "status-2", content: "Dead", status: "red" },
  { id: "status-3", content: "Unknown", status: "orange" },
];

export const MainPage = memo(() => {
  return (
    <PageLayout>
      <Select view="big" options={optionsGender} />
      <Select view="small" options={optionsStatus} />
    </PageLayout>
  );
});
