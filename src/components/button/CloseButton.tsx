import { FunctionComponent } from "react";
import styles from "./CloseButton.module.css";

interface CloseButtonProps {
  onClick: () => void;
}

export const CloseButton: FunctionComponent<CloseButtonProps> = ({ onClick }) => {
  return (
    <button className={styles.close} onClick={onClick}>
      ×
    </button>
  );
};
