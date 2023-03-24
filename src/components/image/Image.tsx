import { FunctionComponent } from "react";
import styles from "./Image.module.css";

interface ImageProps {
  url: string;
  size?: string;
}

export const Image: FunctionComponent<ImageProps> = ({ url, size = "50px" }) => {
  return <img src={url} className={styles.image} style={{ height: size, width: size }} />;
};
