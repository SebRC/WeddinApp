import { FunctionComponent, ReactNode } from "react";
import styles from "./PageLayout.module.css";

interface PageLayoutProps {
  children: ReactNode;
}

export const PageLayout: FunctionComponent<PageLayoutProps> = ({ children }) => {
  return <div className={styles.pageLayout}>{children}</div>;
};
