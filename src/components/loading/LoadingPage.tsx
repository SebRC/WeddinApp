import { FunctionComponent } from "react";
import { Color } from "../../design/color/Color";
import styles from "./LoadingPage.module.css";
interface LoadingPageProps {
  color?: Color;
}

export const LoadingPage: FunctionComponent<LoadingPageProps> = ({ color = Color.Primary }) => {
  return (
    <div
      className={styles.loadingPage}
      style={{
        background: `linear-gradient(to right, ${color} 4%, white 25%, ${color} 36%)`,
      }}
    />
  );
};
