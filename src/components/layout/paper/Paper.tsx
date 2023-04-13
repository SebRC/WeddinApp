import { FunctionComponent, ReactNode } from "react";
import styles from "./Paper.module.css";

interface PaperProps {
  children: ReactNode;
  minHeight?: string;
  gap?: string | number;
  padding?: string;
}

export const Paper: FunctionComponent<PaperProps> = ({
  minHeight = "800px",
  gap = "normal",
  padding = "20px",
  children,
}) => {
  return (
    <div className={styles.container} style={{ minHeight: minHeight, gap: gap && gap, padding: padding }}>
      {children}
    </div>
  );
};
