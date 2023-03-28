import { ChangeEventHandler, FunctionComponent, KeyboardEventHandler } from "react";
import { Flexbox } from "../layout/flexbox/Flexbox";
import styles from "./Input.module.css";

interface InputProps {
  onChange: ChangeEventHandler<HTMLInputElement>;
  onKeyUp?: KeyboardEventHandler<HTMLInputElement>;
  id?: string;
  label?: string;
  value: string;
  type?: "text" | "email" | "password";
  error?: string;
  disabled?: boolean;
  required?: boolean;
}

export const Input: FunctionComponent<InputProps> = ({
  onChange,
  onKeyUp,
  id,
  label,
  value,
  disabled = false,
  type = "text",
  error = "",
  required = false,
}) => {
  return (
    <Flexbox flexDirection="column" alignItems="flex-start" width="100%">
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <input
        disabled={disabled}
        autoComplete="off"
        value={value}
        onChange={onChange}
        onKeyUp={(e) => {
          onKeyUp?.(e);
        }}
        type={type}
        id={id}
        className={`${styles.input} ${error || (required && value === "") ? styles.errorOutline : ""}`}
      />
      {required && value === "" ? (
        <p className={styles.errorParagraph}>Dette felt skal udfyldes</p>
      ) : (
        error && <p className={styles.errorParagraph}>{error}</p>
      )}
    </Flexbox>
  );
};
