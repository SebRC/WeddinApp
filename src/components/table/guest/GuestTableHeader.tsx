import { FunctionComponent } from "react";
import styles from "../TableHeader.module.css";

export const GuestTabelHeader: FunctionComponent = () => {
  return (
    <thead className={styles.header}>
      <tr>
        <th>Name</th>
        <th>Attending</th>
        <th>Song wishes</th>
        <th>Food Info</th>
      </tr>
    </thead>
  );
};
