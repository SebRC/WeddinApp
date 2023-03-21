import { FunctionComponent } from "react";
import { Button } from "../button/Button";
import { Flexbox } from "../layout/flexbox/Flexbox";
import { IconTrash } from "../icons/IconTrash";
import { Wish } from "../responsePage/responsePageReducer";
import styles from "./Input.module.css";

interface SongWishInputProps {
  onChange: (value: string, id: number) => void;
  onSongRemove: () => void;
  wish: Wish;
  id?: string;
  label?: string;
}

export const SongWishInput: FunctionComponent<SongWishInputProps> = ({ onChange, onSongRemove, wish, id, label }) => {
  return (
    <Flexbox flexDirection="column" width="100%">
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <Flexbox alignItems="center" gap={20}>
        <input
          autoComplete="off"
          value={wish.value}
          onChange={(e) => onChange(e.target.value, wish.id)}
          type="text"
          id={id}
          className={styles.input}
        />
        <Button icon={<IconTrash fill="black" />} minWidth="3rem" minHeight="3rem" onClick={onSongRemove} />
      </Flexbox>
    </Flexbox>
  );
};
