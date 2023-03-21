import { FunctionComponent, ReactNode } from "react";
import styles from "./Paper.module.css";

interface PaperProps {
  children: ReactNode;
}

export const Paper: FunctionComponent<PaperProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
