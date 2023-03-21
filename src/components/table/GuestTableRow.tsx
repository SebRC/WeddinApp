import { FunctionComponent } from "react";
import { Guest } from "../../guest/Guest";
import { IconCheckmark } from "../icons/IconCheckmark";
import { IconX } from "../icons/IconX";
import { Flexbox } from "../layout/flexbox/Flexbox";
import styles from "./GuestTableRow.module.css";

interface GuestTableRowProps {
  guest: Guest;
}

export const GuestTableRow: FunctionComponent<GuestTableRowProps> = ({ guest }) => {
  const handleSongsClick = () => {
    const text = guest.songWishes.filter((s) => s).join(", ");
    if (text) {
      navigator.clipboard.writeText(guest.songWishes.filter((s) => s).join(", "));
    }
  };
  return (
    <tr className={styles.row}>
      <td>{guest.name}</td>
      <td>
        {guest.attending ? (
          <Flexbox alignItems="center" gap={20}>
            <IconCheckmark /> Yes
          </Flexbox>
        ) : (
          <Flexbox alignItems="center" gap={20}>
            <IconX /> No
          </Flexbox>
        )}
      </td>
      <td onClick={handleSongsClick}>{guest.songWishes.filter((s) => s).join(", ")}</td>
      <td>{guest.foodInfo}</td>
    </tr>
  );
};
