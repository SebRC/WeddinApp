import { FunctionComponent } from "react";
import { useLanguage } from "../../hooks/context/LanguageProvider";
import { Button } from "../button/Button";
import { Paper } from "../layout/paper/Paper";

export const Settings: FunctionComponent = () => {
  const { language, dispatch } = useLanguage();

  const handleSetLanguage = () => {
    if (language === "da") {
      dispatch?.("en");
    } else {
      dispatch?.("da");
    }
    console.log(language);
  };
  return (
    <Paper>
      Settings
      <Button text="Change language" onClick={handleSetLanguage} height="3rem" />
    </Paper>
  );
};
