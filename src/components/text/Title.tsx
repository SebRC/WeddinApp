import React, { FunctionComponent } from "react";
import { Flexbox } from "../layout/flexbox/Flexbox";
import styles from "./Title.module.css";

interface TitleProps {
  title: string;
  subtitle?: string;
}

export const Title: FunctionComponent<TitleProps> = ({ title, subtitle }) => {
  return (
    <Flexbox flexDirection="column" gap={5}>
      <h1 className={styles.title}>{title}</h1>
      {subtitle && <p className={styles.subTitle}>{subtitle}</p>}
    </Flexbox>
  );
};
