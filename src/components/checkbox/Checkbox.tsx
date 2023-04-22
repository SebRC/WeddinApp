import { FunctionComponent, useState } from "react";
import { KeyCode } from "../../keycode/KeyCode";
import styles from "./Checkbox.module.css";

interface CheckboxProps {
  value: boolean;
  label: string;
  id: string;
  testId?: string;
  onChange: () => void;
}

export const Checkbox: FunctionComponent<CheckboxProps> = ({ value, label, id, testId = id, onChange }) => {
  const [checked, setChecked] = useState(value);

  const handleClick = () => {
    setChecked(!checked);
    onChange();
  };

  const handleKeyUp = (key: string) => {
    if (key === KeyCode.Enter) {
      handleClick();
    }
  };
  return (
    <label htmlFor={id} className={styles.container}>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        data-testid={testId && testId}
        tabIndex={-1}
        onClick={handleClick}
        onChange={handleClick}
      />
      {label}
      <span
        className={styles.checkmark}
        onKeyUp={(e) => handleKeyUp(e.key)}
        tabIndex={0}
        aria-checked={checked}
        role="checkbox"
      />
    </label>
  );
};
