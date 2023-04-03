import { createContext, FunctionComponent, ReactNode, useContext, useEffect, useState } from "react";
import { I18nextProvider } from "react-i18next";
import da from "../../translations/src/da.json";
import en from "../../translations/src/en.json";
import i18next from "i18next";
import ICU from "i18next-icu";

i18next.use(ICU).init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: localStorage.getItem("language") ?? "da",
  resources: {
    da: {
      da: da,
    },
    en: {
      en: en,
    },
  },
});

const LanguageContext = createContext<{ language: string; dispatch?: (language: string) => void }>({
  language: localStorage.getItem("language") ?? "da",
});

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: FunctionComponent<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState(localStorage.getItem("language") ?? "da");

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const handleLanguageChange = (language: string) => {
    setLanguage(language);
    i18next.changeLanguage(language);
  };

  return (
    <I18nextProvider i18n={i18next}>
      <LanguageContext.Provider value={{ language: language, dispatch: handleLanguageChange }}>
        {children}
      </LanguageContext.Provider>
    </I18nextProvider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
