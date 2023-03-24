import { FunctionComponent } from "react";
import styles from "./LoadingImage.module.css";

interface LoadingImageProps {
  size?: string;
}

export const LoadingImage: FunctionComponent<LoadingImageProps> = ({ size = "50px" }) => {
  return <div className={styles.loading} style={{ width: size, height: size }} />;
};
