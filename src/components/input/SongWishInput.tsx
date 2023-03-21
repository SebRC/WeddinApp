import { FunctionComponent } from "react";
import { Flexbox } from "../flexbox/Flexbox";
import { Wish } from "../responsePage/responsePageReducer";
import styles from "./Input.module.css";

interface SongWishInputProps {
  onChange: (value: string, id: number) => void;
  wish: Wish;
  id?: string;
  label?: string;
}

export const SongWishInput: FunctionComponent<SongWishInputProps> = ({ onChange, wish, id, label }) => {
  return (
    <div style={{ margin: "auto" }}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <input
        autoComplete="off"
        value={wish.value}
        onChange={(e) => onChange(e.target.value, wish.id)}
        type="text"
        id={id}
        className={styles.input}
      />
    </div>
  );
};
