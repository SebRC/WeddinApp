import React, { FunctionComponent } from "react";
import styles from "./Title.module.css";

interface TitleProps {
  title: string;
  subtitle?: string;
}

export const Title: FunctionComponent<TitleProps> = ({ title, subtitle }) => {
  return (
    <>
      <h1 className={styles.title}>{title}</h1>
      {subtitle && <h3 className={styles.subTitle}>{subtitle}</h3>}
    </>
  );
};
