import { FunctionComponent } from "react";
import { useTranslator } from "../../translations/useTranslator";
import { IconSearch } from "../icons/IconSearch";
import { Flexbox } from "../layout/flexbox/Flexbox";
import styles from "./Searchbar.module.css";

interface SearchbarProps {
  value: string;
  placeholder?: string;
  onSearch: React.ChangeEventHandler<HTMLInputElement>;
}

export const Searchbar: FunctionComponent<SearchbarProps> = ({ value, placeholder, onSearch }) => {
  const translator = useTranslator();
  return (
    <Flexbox alignItems="center" gap={20}>
      <input
        className={styles.searchbar}
        placeholder={placeholder ?? translator.search()}
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
