import { ChangeEvent, FunctionComponent, useState } from "react";
import styles from "./Checkbox.module.css";

interface CheckboxProps {
  value: boolean;
  label: string;
  id: string;
  testId?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const Checkbox: FunctionComponent<CheckboxProps> = ({ value, label, id, testId = id, onChange }) => {
  const [checked, setChecked] = useState(value);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(!checked);
    onChange(e);
  };
  return (
    <label htmlFor={id} className={styles.container}>
      <input type="checkbox" id={id} checked={checked} onChange={handleChange} data-testid={testId && testId} />
      {label}
      <span className={styles.checkmark} />
    </label>
  );
};
