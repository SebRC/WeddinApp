import { FunctionComponent } from "react";
import { useLanguage } from "../../hooks/context/LanguageProvider";
import { useTranslator } from "../../translations/useTranslator";
import { IconDanish } from "../icons/language/IconDanish";
import { IconEnglish } from "../icons/language/IconEnglish";
import { Paper } from "../layout/paper/Paper";
import { Select } from "../select/Select";
import { Header } from "../text/Header";
import { Title } from "../text/Title";

export const Settings: FunctionComponent = () => {
  const { language, dispatch } = useLanguage();
  const translator = useTranslator();

  const handleSetLanguage = (newLanguage: string) => {
    console.log(newLanguage);
    dispatch?.(newLanguage);
  };

  const options = [
    { option: translator.danish(), value: "da", icon: <IconDanish /> },
    { option: translator.english(), value: "en", icon: <IconEnglish /> },
  ];

  return (
    <Paper gap={20} minHeight="auto">
      <Title title={translator.settings()} subtitle={translator.settingsDesciption()} />
      <Header text={translator.language()} subHeader={translator.languageDescription()} />
      <Select
        options={options}
        value={options.find((o) => o.value === language) ?? options[0]}
        onChange={handleSetLanguage}
      />
    </Paper>
  );
};
