import { FunctionComponent } from "react";
import { IconSearch } from "../icons/IconSearch";
import { Flexbox } from "../layout/flexbox/Flexbox";
import styles from "./Searchbar.module.css";

interface SearchbarProps {
  value: string;
  placeholder?: string;
  onSearch: React.ChangeEventHandler<HTMLInputElement>;
}

export const Searchbar: FunctionComponent<SearchbarProps> = ({ value, placeholder = "Søg", onSearch }) => {
  return (
    <Flexbox alignItems="center" gap={20}>
      <input
        className={styles.searchbar}
        placeholder={placeholder}
        onChange={(e) => onSearch(e)}
        value={value}
        type="search"
      />
      <div className={styles.searchIcon}>
        <IconSearch fill="black" />
      </div>
    </Flexbox>
  );
};
