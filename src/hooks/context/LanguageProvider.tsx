import { createContext, FunctionComponent, ReactNode, useContext, useEffect, useState } from "react";

const LanguageContext = createContext<{ language: string; dispatch?: React.Dispatch<React.SetStateAction<string>> }>({
  language: "da",
});

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: FunctionComponent<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState(localStorage.getItem("language") ?? "da");

  useEffect(() => {
    console.log("language effect triggered");
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language: language, dispatch: setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
