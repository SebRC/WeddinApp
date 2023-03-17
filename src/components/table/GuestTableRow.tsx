import { FunctionComponent } from "react";
import { Guest } from "../../guest/Guest";
import styles from "./GuestTableRow.module.css";

interface GuestTableRowProps {
  guest: Guest;
}

const songWishes = ["The Weeknd - Starboy", "Ed Sheeran - Shape of you", "Beyonce - Single Ladies"];

export const GuestTableRow: FunctionComponent<GuestTableRowProps> = ({ guest }) => {
  return (
    <tr>
      <td>{guest.name}</td>
      <td>{guest.attending ? "Yes ✅" : "No ⛔️"}</td>
      <td className={styles.songWishesData}>{songWishes.join(",")}</td>
      <td>{guest.foodInfo}</td>
    </tr>
  );
};
