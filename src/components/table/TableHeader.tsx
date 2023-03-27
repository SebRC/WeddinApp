import { FunctionComponent } from "react";
import { Flexbox } from "../layout/flexbox/Flexbox";
import { SortOrder } from "./sortOrder";
import styles from "./TableHeader.module.css";

interface TableHeaderProps {
  headers: {
    name: string;
    width: string;
    sortable?: boolean;
    sorted?: SortOrder;
    onSort?: () => void;
  }[];
}

export const TableHeader: FunctionComponent<TableHeaderProps> = ({ headers }) => {
  const getSortIcon = (currentState: SortOrder) => {
    if (currentState === SortOrder.Unsorted) {
      return (
        <Flexbox flexDirection="column" justifyContent="space-between">
          <div className={styles.sortableUp} />
          <div className={styles.sortableDown} />
        </Flexbox>
      );
    }
    if (currentState === SortOrder.Ascending) {
      return <div className={styles.sortableUp} />;
    }
    return <div className={styles.sortableDown} />;
  };
  return (
    <thead className={styles.header}>
      <tr>
        {headers.map((h, index) => {
          return (
            <th
              key={h.name + index}
              style={{ width: h.width, cursor: h.sortable ? "pointer" : "default" }}
              onClick={() => h.onSort?.()}
            >
              <Flexbox gap={5} alignItems="center">
                {h.name}
                {h.sortable && (
                  <div className={styles.sortableWrapper}>{getSortIcon(h.sorted ?? SortOrder.Unsorted)}</div>
                )}
              </Flexbox>
            </th>
          );
        })}
      </tr>
    </thead>
  );
};
