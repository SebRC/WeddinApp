import { FunctionComponent } from "react";
import { KeyCodes } from "../../keycode/KeyCodes";
import { Flexbox } from "../layout/flexbox/Flexbox";
import styles from "./Toggle.module.css";

interface ToggleProps {
  text: string;
  value: boolean;
  onChange: () => void;
}

export const Toggle: FunctionComponent<ToggleProps> = ({ text, value, onChange }) => {
  const handleKeyUp = (key: string) => {
    if (key === KeyCodes.Enter) {
      onChange();
    }
  };
  return (
    <Flexbox alignItems="center" gap={10}>
      <label className={styles.switch}>
        <input type="checkbox" tabIndex={-1} checked={value} onChange={onChange} />
        <span
          className={styles.slider}
          onKeyUp={(e) => handleKeyUp(e.key)}
          tabIndex={0}
          aria-checked={value}
          role="checkbox"
        />
      </label>
      {text}
    </Flexbox>
  );
};
