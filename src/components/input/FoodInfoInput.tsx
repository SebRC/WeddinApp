import { FunctionComponent } from "react";
import { useTranslator } from "../../translations/useTranslator";
import { Flexbox } from "../layout/flexbox/Flexbox";
import styles from "./FoodInfoInput.module.css";

interface FoodInfoInputProps {
  onChange: (value: string) => void;
  value: string;
  id?: string;
}

export const FoodInfoInput: FunctionComponent<FoodInfoInputProps> = ({ onChange, value, id }) => {
  const translator = useTranslator();
  return (
    <Flexbox flexDirection="column" alignItems="flex-start" width="100%">
      <label htmlFor={id} className={styles.label}>
        {translator.foodInfo()}
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
