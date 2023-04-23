import { FunctionComponent } from "react";
import { Paper } from "../layout/paper/Paper";
import { Title } from "../text/Title";
import { Button } from "../button/Button";
import { useNavigate } from "react-router-dom";
import { Flexbox } from "../layout/flexbox/Flexbox";
import { useCurrentUser } from "../../hooks/context/UserProvider";
import { AuthRoute, GuestRoute } from "../../routing/routes";
import { useTranslator } from "../../translations/useTranslator";
import { PageLayout } from "../layout/pageLayout/PageLayout";

export const ErrorPage: FunctionComponent = () => {
  const user = useCurrentUser();
  const navigate = useNavigate();
  const translator = useTranslator();

  const handleGoBack = () => {
    if (!user.authed) {
      navigate(AuthRoute.path);
    } else {
      navigate(GuestRoute.path);
    }
  };

  return (
    <PageLayout>
      <Paper>
        <Flexbox flexDirection="column" alignItems="center" gap={10} width="100%">
          <Title title={translator.errorPageMessage()} />
          <Button onClick={handleGoBack} text={translator.goBack()} width="100%" height="2.5rem" />
        </Flexbox>
      </Paper>
    </PageLayout>
  );
};
