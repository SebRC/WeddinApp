import { FunctionComponent } from "react";
import { Paper } from "../layout/paper/Paper";
import { PageLayout } from "../layout/pageLayout/PageLayout";
import { Title } from "../text/Title";
import { Button } from "../button/Button";
import { useNavigate } from "react-router-dom";
import { Flexbox } from "../layout/flexbox/Flexbox";

export const ErrorPage: FunctionComponent = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("auth");
  };
  return (
    <PageLayout>
      <Paper>
        <Flexbox flexDirection="column" alignItems="center">
          <Title title="Woops you're not supposed to be here!" />
          <Button onClick={handleGoBack} text="Go back" width="5rem" height="2.5rem" />
        </Flexbox>
      </Paper>
    </PageLayout>
  );
};
