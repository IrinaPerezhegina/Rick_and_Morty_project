import { memo } from "react";
import { ReactComponent as Search } from "../assets/loupe.svg";
import { Input } from "../components/Input/Input";
import { PageLayout } from "../components/PageLayout/PageLayout";

// const optionsGender: SelectOption[] = [
//   { id: "gender-1", content: "Female" },
//   { id: "gender-2", content: "Male" },
//   { id: "gender-3", content: "Genderless" },
//   { id: "gender-4", content: "Unknown" },
// ];

// const optionsStatus: SelectOption[] = [
//   { id: "status-1", content: "Alive", status: "green" },
//   { id: "status-2", content: "Dead", status: "red" },
//   { id: "status-3", content: "Unknown", status: "orange" },
// ];

export const MainPage = memo(() => {
  return (
    <PageLayout>
      <Input
        Svg={<Search />}
        view="filter"
        value=""
        placeholder="Filter by name..."
        onChange={() => {}}
      />
      <Input view="form" value="Rick Sanchez" onChange={() => {}} />
    </PageLayout>
  );
});
