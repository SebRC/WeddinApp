import { FunctionComponent } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  text: string;
  disabled?: boolean;
  onClick: () => void;
  alignSelf?: "auto" | "center" | "flex-start" | "flex-end";
}

export const Button: FunctionComponent<ButtonProps> = ({ text, disabled = false, onClick, alignSelf = "auto" }) => {
  return (
    <button onClick={onClick} disabled={disabled} className={styles.button} style={{ alignSelf: alignSelf }}>
      {text}
    </button>
  );
};