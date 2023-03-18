import React, { FunctionComponent } from "react";
import { Flexbox } from "../flexbox/Flexbox";
import styles from "./LoadingPage.module.css";

export const LoadingPage: FunctionComponent = () => {
  return (
    <Flexbox>
      <div className={styles.loadingPage}></div>
    </Flexbox>
  );
};
