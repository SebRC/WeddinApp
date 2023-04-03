import { FunctionComponent, ReactNode } from "react";
import styles from "./Tabs.module.css";

interface TabContentProps {
  id: string;
  activeTab: string;
  children: ReactNode;
}

export const TabContent: FunctionComponent<TabContentProps> = ({ id, activeTab, children }) => {
  return activeTab === id ? <div className={styles.content}>{children}</div> : null;
};
