import { FunctionComponent } from "react";
import { Flexbox } from "../layout/flexbox/Flexbox";
import styles from "./Toggle.module.css";

interface ToggleProps {
  text: string;
  value: boolean;
  onChange: () => void;
}

export const Toggle: FunctionComponent<ToggleProps> = ({ text, value, onChange }) => {
  return (
    <Flexbox alignItems="center" gap={10}>
      <label className={styles.switch}>
        <input type="checkbox" checked={value} onChange={onChange} />
        <span className={styles.slider}></span>
      </label>
      {text}
    </Flexbox>
  );
};
