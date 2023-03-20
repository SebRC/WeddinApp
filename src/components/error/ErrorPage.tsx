import { FunctionComponent } from "react";
import { Paper } from "../layout/Paper";
import { PageLayout } from "../pageLayout/PageLayout";

export const ErrorPage: FunctionComponent = () => {
  return (
    <PageLayout>
      <Paper>Woops you're not supposed to be here!</Paper>
    </PageLayout>
  );
};
