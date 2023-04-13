import { FunctionComponent } from "react";
import { Header } from "../../text/Header";
import styles from "./Progressbar.module.css";

interface ProgressbarProps {
  progress: number;
  text?: string;
}

export const Progressbar: FunctionComponent<ProgressbarProps> = ({ progress, text }) => {
  return (
    <>
      {text && <Header text={text} />}
      <div className={styles.container}>
        <div className={styles.bar} style={{ width: `${progress}%` }}>
          <div className={styles.text}>{`${progress}%`}</div>
        </div>
      </div>
    </>
  );
};
