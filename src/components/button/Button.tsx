import { FunctionComponent } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  text: string;
  disabled?: boolean;
  onClick: () => void;
}

export const Button: FunctionComponent<ButtonProps> = ({ text, disabled = false, onClick }) => {
  return (
    <button onClick={onClick} disabled={disabled} className={styles.button}>
      {text}
    </button>
  );
};
