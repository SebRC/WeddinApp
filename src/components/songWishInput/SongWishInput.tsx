import { FunctionComponent } from "react";
import { Flexbox } from "../flexbox/Flexbox";
import { Wish } from "../responsePageReducer";

interface SongWishInputProps {
  onChange: (value: string, id: number) => void;
  wish: Wish;
  id?: string;
  label?: string;
}

export const SongWishInput: FunctionComponent<SongWishInputProps> = ({ onChange, wish, id, label }) => {
  return (
    <Flexbox flexDirection="column" alignItems="flex-start">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        autoComplete="off"
        value={wish.value}
        onChange={(e) => onChange(e.target.value, wish.id)}
        type="text"
        id={id}
      />
    </Flexbox>
  );
};
