import { FunctionComponent } from "react";
import { Paper } from "../layout/Paper";
import { PageLayout } from "../pageLayout/PageLayout";
import { Title } from "../text/Title";

export const ErrorPage: FunctionComponent = () => {
  return (
    <PageLayout>
      <Paper>
        <Title title="Woops you're not supposed to be here!" />
      </Paper>
    </PageLayout>
  );
};
