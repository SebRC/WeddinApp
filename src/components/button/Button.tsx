import { forwardRef, ReactNode } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  text?: string;
  disabled?: boolean;
  width?: any;
  minWidth?: any;
  height?: any;
  minHeight?: any;
  icon?: ReactNode;
  type?: "default" | "danger";
  onClick: () => void;
  alignSelf?: "auto" | "center" | "flex-start" | "flex-end";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      text,
      disabled = false,
      type = "default",
      onClick,
      width = "auto",
      minWidth = "auto",
      height = "2.5rem",
      minHeight = "auto",
      alignSelf = "auto",
      icon,
    },
    ref
  ) => {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={styles.button}
        ref={ref}
        style={{
          alignSelf: alignSelf,
          width: width,
          height: height,
          backgroundColor: type === "default" ? "var(--secondary)" : "var(--danger)",
          minWidth: minWidth,
          minHeight: minHeight,
        }}
      >
        {text}
        {icon}
      </button>
    );
  }
);
