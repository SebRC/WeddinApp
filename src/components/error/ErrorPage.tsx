import { FunctionComponent } from "react";
import { Paper } from "../layout/paper/Paper";
import { Title } from "../text/Title";
import { Button } from "../button/Button";
import { useNavigate, useRouteError } from "react-router-dom";
import { Flexbox } from "../layout/flexbox/Flexbox";
import { useCurrentUser } from "../../hooks/context/UserProvider";
import { AuthRoute, GuestRoute } from "../../routing/routes";
import { useTranslator } from "../../translations/useTranslator";

export const ErrorPage: FunctionComponent = () => {
  let error = useRouteError();
  console.log("error", error);
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
    <Paper>
      <Flexbox flexDirection="column" alignItems="center">
        <Title title={translator.errorPageMessage()} />
        <Button onClick={handleGoBack} text={translator.goBack()} width="6rem" height="2.5rem" />
      </Flexbox>
    </Paper>
  );
};
