import { FunctionComponent } from "react";
import { useLanguage } from "../../hooks/context/LanguageProvider";
import { useTranslator } from "../../translations/useTranslator";
import { Button } from "../button/Button";
import { Paper } from "../layout/paper/Paper";
import { Header } from "../text/Header";
import { Title } from "../text/Title";

export const Settings: FunctionComponent = () => {
  const { language, dispatch } = useLanguage();
  const translator = useTranslator();

  const handleSetLanguage = () => {
    if (language === "da") {
      dispatch?.("en");
    } else {
      dispatch?.("da");
    }
    console.log(language);
  };

  return (
    <Paper gap={20}>
      <Title title={translator.settings()} subtitle={translator.settingsDesciption()} />
      <Header text={translator.language()} subHeader={translator.languageDescription()} />
      <Button text="Change language" onClick={handleSetLanguage} height="3rem" />
    </Paper>
  );
};
