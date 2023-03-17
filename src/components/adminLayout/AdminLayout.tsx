import { FunctionComponent, ReactNode } from "react";
import styles from "./AdminLayout.module.css";

interface AdminLayoutProps {
  children: ReactNode;
}

export const AdminLayout: FunctionComponent<AdminLayoutProps> = ({ children }) => {
  return <div className={styles.adminLayout}>{children}</div>;
};
