import { FunctionComponent } from "react";
import { Guest } from "../../guest/Guest";
import styles from "./GuestTableRow.module.css";

interface GuestTableRowProps {
  guest: Guest;
}

export const GuestTableRow: FunctionComponent<GuestTableRowProps> = ({ guest }) => {
  return (
    <tr className={styles.row}>
      <td>{guest.name}</td>
      <td>{guest.attending ? "Yes ✅" : "No ⛔️"}</td>
      <td>{guest.songWishes.filter((s) => s).join(", ")}</td>
      <td>{guest.foodInfo}</td>
    </tr>
  );
};
