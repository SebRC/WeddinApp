import React, { FunctionComponent } from "react";
import { Flexbox } from "../flexbox/Flexbox";
import styles from "./Checkbox.module.css";

interface CheckboxProps {
  checked: boolean;
  label: string;
  id: string;
  onChange: () => void;
}

export const Checkbox: FunctionComponent<CheckboxProps> = ({ checked, label, id, onChange }) => {
  return (
    <label htmlFor={id} className={styles.container}>
      <input type="checkbox" id={id} checked={checked} onChange={onChange} />
      {label}
      <span className={styles.checkmark}></span>
    </label>
  );
};
