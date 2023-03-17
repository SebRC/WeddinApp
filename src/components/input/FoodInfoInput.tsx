import { FunctionComponent } from "react";
import { Flexbox } from "../flexbox/Flexbox";
import styles from "./FoodInfoInput.module.css";

interface FoodInfoInputProps {
  onChange: (value: string) => void;
  value: string;
  id?: string;
}

export const FoodInfoInput: FunctionComponent<FoodInfoInputProps> = ({ onChange, value, id }) => {
  return (
    <Flexbox flexDirection="column" alignItems="flex-start" width="100%">
      <label htmlFor={id} className={styles.label}>
        Food info(allergies)
      </label>
      <textarea
        value={value}
        autoComplete="off"
        onChange={(e) => onChange(e.target.value)}
        id={id}
        className={styles.input}
      />
    </Flexbox>
  );
};
