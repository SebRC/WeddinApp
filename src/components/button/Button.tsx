import { FunctionComponent, ReactNode } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  text?: string;
  disabled?: boolean;
  width?: any;
  height?: any;
  icon?: ReactNode;
  type?: "default" | "danger";
  onClick: () => void;
  alignSelf?: "auto" | "center" | "flex-start" | "flex-end";
}

export const Button: FunctionComponent<ButtonProps> = ({
  text,
  disabled = false,
  type = "default",
  onClick,
  width = "auto",
  height = "auto",
  alignSelf = "auto",
  icon,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={styles.button}
      style={{
        alignSelf: alignSelf,
        width: width,
        height: height,
        backgroundColor: type === "default" ? "var(--secondary)" : "var(--danger)",
      }}
    >
      {text}
      {icon}
    </button>
  );
};
