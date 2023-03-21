import { ChangeEventHandler, FunctionComponent } from "react";
import { Flexbox } from "../layout/flexbox/Flexbox";
import styles from "./Input.module.css";

interface InputProps {
  onChange: ChangeEventHandler<HTMLInputElement>;
  id?: string;
  label?: string;
  value: string;
  type?: "text" | "email" | "password";
}

export const Input: FunctionComponent<InputProps> = ({ onChange, id, label, value, type = "text" }) => {
  return (
    <Flexbox flexDirection="column" alignItems="flex-start" width="100%">
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <input autoComplete="off" value={value} onChange={onChange} type={type} id={id} className={styles.input} />
    </Flexbox>
  );
};
