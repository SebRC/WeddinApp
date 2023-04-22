import { FunctionComponent, useMemo } from "react";
import { KeyCode } from "../../../keycode/KeyCode";
import { useTranslator } from "../../../translations/useTranslator";
import { Guest } from "../../guest/Guest";
import { IconCheckmark } from "../../icons/IconCheckmark";
import { IconX } from "../../icons/IconX";
import { Flexbox } from "../../layout/flexbox/Flexbox";
import { TableData } from "../TableData";
import styles from "../TableRow.module.css";

interface GuestTableRowProps {
  guest: Guest;
  onClick?: () => void;
}

export const GuestTableRow: FunctionComponent<GuestTableRowProps> = ({ guest, onClick }) => {
  const translator = useTranslator();
  const filteredSongs = useMemo(() => {
    return guest.songWishes.filter((s) => s).join(", ");
  }, [guest.songWishes]);

  const handleKeyUp = (key: string) => {
    if (key === KeyCode.Enter) {
      onClick?.();
    }
  };

  return (
    <tr className={styles.row} onClick={onClick} tabIndex={0} onKeyUp={(e) => handleKeyUp(e.key)}>
      <TableData>{guest.name}</TableData>
      <TableData>
        {guest.attending ? (
          <Flexbox alignItems="center" gap={20}>
            <IconCheckmark /> {translator.yes()}
          </Flexbox>
        ) : (
          <Flexbox alignItems="center" gap={20}>
            <IconX /> {translator.no()}
          </Flexbox>
        )}
      </TableData>
      <TableData>{filteredSongs}</TableData>
      <TableData>{guest.foodInfo}</TableData>
    </tr>
  );
};
