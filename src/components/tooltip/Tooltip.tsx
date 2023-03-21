import { FunctionComponent, ReactNode } from "react";
import styles from "./Tooltip.module.css";

interface TooltipProps {
  text: string;
  children: ReactNode;
}

export const Tooltip: FunctionComponent<TooltipProps> = ({ text, children }) => {
  return (
    <div className={styles.tooltip}>
      <span className={styles.tooltipText}>{text}</span>
      {children}
    </div>
  );
};
