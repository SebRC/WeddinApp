import { FunctionComponent } from "react";
import styles from "./TableHeader.module.css";

interface TableHeaderProps {
  headers: string[];
}

export const TableHeader: FunctionComponent<TableHeaderProps> = ({ headers }) => {
  return (
    <thead className={styles.header}>
      <tr>
        {headers.map((h, index) => {
          return <th key={h + index}>{h}</th>;
        })}
      </tr>
    </thead>
  );
};
