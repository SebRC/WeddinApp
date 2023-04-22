import { FunctionComponent } from "react";
import styles from "./CloseButton.module.css";

interface CloseButtonProps {
  onClick: () => void;
  color?: string;
}

export const CloseButton: FunctionComponent<CloseButtonProps> = ({ onClick, color = "black" }) => {
  return (
    <button className={styles.close} onClick={onClick} style={{ color: color }}>
      ×
    </button>
  );
};
