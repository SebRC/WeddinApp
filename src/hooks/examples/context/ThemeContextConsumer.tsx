import { FunctionComponent } from "react";
import { useTheme } from "./ThemeProvider";

export const ThemeContextConsumer: FunctionComponent = () => {
  const theme = useTheme();
  return (
    <div style={{ height: "50px", width: "50px", backgroundColor: theme === "dark" ? "black" : "white" }}>
      Some content
    </div>
  );
};
