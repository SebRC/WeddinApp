import { FunctionComponent } from "react";
import { Flexbox } from "../../layout/flexbox/Flexbox";
import styles from "./Progressbar.module.css";
import inputStyles from "../../input/Input.module.css";

interface ProgressbarProps {
  progress: number;
  text?: string;
}

export const Progressbar: FunctionComponent<ProgressbarProps> = ({ progress, text }) => {
  return (
    <Flexbox flexDirection="column" gap={10}>
      {text && <label className={inputStyles.label}>{text}</label>}
      <div className={styles.container}>
        <div className={styles.bar} style={{ width: `${progress}%` }}>
          <div className={styles.text}>{`${progress}%`}</div>
        </div>
      </div>
    </Flexbox>
  );
};
