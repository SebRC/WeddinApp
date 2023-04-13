import { FunctionComponent } from "react";
import { useLanguage } from "../../hooks/context/LanguageProvider";
import { useCurrentUser } from "../../hooks/context/UserProvider";
import { useCurrentGuest } from "../../hooks/useCurrentGuest";
import { useTranslator } from "../../translations/useTranslator";
import { IconDanish } from "../icons/language/IconDanish";
import { IconEnglish } from "../icons/language/IconEnglish";
import { Flexbox } from "../layout/flexbox/Flexbox";
import { Paper } from "../layout/paper/Paper";
import { Select } from "../select/Select";
import { Header } from "../text/Header";
import { Title } from "../text/Title";

export const Settings: FunctionComponent = () => {
  const { language, dispatch } = useLanguage();
  const translator = useTranslator();
  const user = useCurrentUser();
  const guest = useCurrentGuest();

  const handleSetLanguage = (newLanguage: string) => {
    dispatch?.(newLanguage);
  };

  const options = [
    { option: translator.danish(), value: "da", icon: <IconDanish /> },
    { option: translator.english(), value: "en", icon: <IconEnglish /> },
  ];

  return (
    <Paper gap={20} minHeight="auto">
      <Title title={translator.settings()} subtitle={translator.settingsDesciption()} />
      <Flexbox flexDirection="column" gap={10}>
        <Title title={translator.userInfo()} subtitle={translator.userInfoDescription()} />
        <Header text={translator.name()} subHeader={guest?.name} />
        <Header text={translator.email()} subHeader={user?.user?.email ?? ""} />
      </Flexbox>
      <Title title={translator.language()} subtitle={translator.languageDescription()} />
      <Select
        options={options}
        value={options.find((o) => o.value === language) ?? options[0]}
        onChange={handleSetLanguage}
      />
    </Paper>
  );
};
