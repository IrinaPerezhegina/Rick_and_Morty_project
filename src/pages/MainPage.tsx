import { memo } from "react";
import { Loader } from "../components/Loader/Loader";
import { PageLayout } from "../components/PageLayout/PageLayout";

export const MainPage = memo(() => {
  return <PageLayout children={<Loader variant="big" />} />;
});
