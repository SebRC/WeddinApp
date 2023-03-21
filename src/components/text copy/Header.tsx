import React, { FunctionComponent } from "react";
import { Flexbox } from "../layout/flexbox/Flexbox";
import styles from "./Header.module.css";

interface HeaderProps {
  text: string;
  subHeader?: string;
}

export const Header: FunctionComponent<HeaderProps> = ({ text, subHeader }) => {
  return (
    <Flexbox flexDirection="column" alignItems="flex-start">
      <h3 className={styles.header}>{text}</h3>
      {subHeader && <h4 className={styles.subHeader}>{subHeader}</h4>}
    </Flexbox>
  );
};
