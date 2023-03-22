import { createContext, FunctionComponent, ReactNode, useContext, useState } from "react";

interface ThemeProviderProps {
  theme: string;
  children: ReactNode;
}

const ThemeContext = createContext("dark");

export const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({ theme, children }) => {
  const [currentTheme, setCurrentTheme] = useState(theme);

  const handleThemeChange = () => {
    if (currentTheme === "dark") {
      setCurrentTheme("ligth");
    } else {
      setCurrentTheme("dark");
    }
  };
  return (
    <ThemeContext.Provider value={currentTheme}>
      <button onClick={handleThemeChange}>Click me to change theme</button>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
