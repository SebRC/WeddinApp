import { FunctionComponent, useEffect, useState } from "react";
import styles from "./Progressbar.module.css";

interface ProgressbarProps {
  progress: number;
}

export const Progressbar: FunctionComponent<ProgressbarProps> = ({ progress }) => {
  const [percentage, setPercentage] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (percentage < 100) {
        setPercentage((prev) => prev + 1);
      } else {
        setPercentage(0);
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [percentage]);

  return (
    <div className={styles.container}>
      <div className={styles.bar} style={{ width: `${percentage}%` }}>
        <div className={styles.text}>{`${percentage}%`}</div>
      </div>
    </div>
  );
};
