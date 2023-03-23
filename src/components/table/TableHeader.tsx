import { FunctionComponent } from "react";
import styles from "./TableHeader.module.css";

interface TableHeaderProps {
  headers: { name: string; width: any }[];
}

export const TableHeader: FunctionComponent<TableHeaderProps> = ({ headers }) => {
  return (
    <thead className={styles.header}>
      <tr>
        {headers.map((h, index) => {
          return (
            <th key={h.name + index} style={{ width: h.width }}>
              {h.name}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};
