import { FunctionComponent, ReactNode } from "react";
import styles from "./GhostButton.module.css";

interface GhostButtonProps {
  onClick: () => void;
  color?: string;
  children: ReactNode;
}

export const GhostButton: FunctionComponent<GhostButtonProps> = ({ onClick, children, color = "black" }) => {
  return (
    <button className={styles.ghost} onClick={onClick} style={{ color: color }}>
      {children}
    </button>
  );
};
