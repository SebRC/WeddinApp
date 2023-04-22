import { FunctionComponent, ReactNode } from "react";
import styles from "./GhostButton.module.css";

interface GhostButtonProps {
  onClick: () => void;
  children: ReactNode;
}

export const GhostButton: FunctionComponent<GhostButtonProps> = ({ onClick, children }) => {
  return (
    <button className={styles.ghost} onClick={onClick}>
      {children}
    </button>
  );
};
