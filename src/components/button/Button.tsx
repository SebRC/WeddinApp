import { FunctionComponent } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  text: string;
  disabled?: boolean;
  width?: any;
  onClick: () => void;
  alignSelf?: "auto" | "center" | "flex-start" | "flex-end";
}

export const Button: FunctionComponent<ButtonProps> = ({
  text,
  disabled = false,
  onClick,
  width = "auto",
  alignSelf = "auto",
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={styles.button}
      style={{ alignSelf: alignSelf, width: width }}
    >
      {text}
    </button>
  );
};
