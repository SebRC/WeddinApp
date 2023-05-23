import { FunctionComponent } from "react";
import styles from "./Text.module.css";

interface TextProps {
  text: string;
  bold?: boolean;
  italic?: boolean;
}

export const Text: FunctionComponent<TextProps> = ({ text, bold = false, italic = false }) => {
  return (
    <p
      className={styles.text}
      style={{ fontWeight: bold ? "bold" : "normal", fontStyle: italic ? "italic" : "normal" }}
    >
      {text}
    </p>
  );
};
