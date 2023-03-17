import { FunctionComponent } from "react";
import styles from "./Header.module.css";

interface HeaderProps {
  text: string;
  subHeader?: string;
}

export const Header: FunctionComponent<HeaderProps> = ({ text, subHeader }) => {
  return (
    <>
      <h3 className={styles.header}>{text}</h3>
      {subHeader && <p className={styles.subHeader}>{subHeader}</p>}
    </>
  );
};
