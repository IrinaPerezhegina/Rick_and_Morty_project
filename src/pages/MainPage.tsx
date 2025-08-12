import { memo } from "react";
import { PageLayout } from "../components/PageLayout/PageLayout";
import { Select } from "../components/Select/Select";

export const MainPage = memo(() => {
  return (
    <PageLayout>
      <Select
        view="big"
        options={[
          { id: "gender-1", content: "Female" },
          { id: "gender-2", content: "Male" },
          { id: "gender-3", content: "Genderless" },
          { id: "gender-4", content: "Unknown" },
        ]}
      />
      <Select
        view="small"
        options={[
          { id: "status-1", content: "Alive", status: "green" },
          { id: "status-2", content: "Dead", status: "red" },
          { id: "status-3", content: "Unknown", status: "orange" },
        ]}
      />
    </PageLayout>
  );
});
