import { FunctionComponent } from "react";
import styles from "./Separator.module.css";

interface SeparatorProps {
  noMargin?: boolean;
}

export const Separator: FunctionComponent<SeparatorProps> = ({ noMargin = false }) => {
  return <div className={styles.separator} style={{ margin: noMargin ? "0px" : "10px" }} />;
};
