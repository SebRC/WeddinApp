import { ChangeEvent, ChangeEventHandler, FunctionComponent, KeyboardEventHandler, useState } from "react";
import { useTranslator } from "../../translations/useTranslator";
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
  placeholder?: string;
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
  placeholder = "",
}) => {
  const [edited, setEdited] = useState(false);
  const translator = useTranslator();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEdited(true);
    onChange(event);
  };

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    setEdited(true);
    onKeyUp?.(event);
  };
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
        onChange={handleChange}
        onKeyUp={(e) => {
          onKeyUp && handleKeyUp(e);
        }}
        type={type}
        id={id}
        className={`${styles.input} ${error || (required && edited && value === "") ? styles.errorOutline : ""}`}
        placeholder={placeholder}
      />
      {required && edited && value === "" ? (
        <p className={styles.errorParagraph}>{translator.thisFieldIsRequired()}</p>
      ) : (
        error && <p className={styles.errorParagraph}>{error}</p>
      )}
    </Flexbox>
  );
};
