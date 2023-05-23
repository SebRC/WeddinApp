import { FunctionComponent, ReactNode } from "react";
import styles from "./Link.module.css";

interface LinkProps {
  url: string;
  children: ReactNode;
}

export const Link: FunctionComponent<LinkProps> = ({ url, children }) => {
  return (
    <a href={url} target="_blank" rel="noreferrer" className={styles.link}>
      {children}
    </a>
  );
};
