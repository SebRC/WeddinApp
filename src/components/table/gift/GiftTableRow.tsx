import { FunctionComponent, useState } from "react";
import { setGiftData } from "../../../firebase/firebase";
import { Guest } from "../../../guest/Guest";
import { useCurrentGuest } from "../../../hooks/useCurrentGuest";
import { IconCheckmark } from "../../icons/IconCheckmark";
import { IconX } from "../../icons/IconX";
import { Flexbox } from "../../layout/flexbox/Flexbox";
import { TableData } from "../TableData";
import styles from "../TableRow.module.css";
import { Gift } from "./gift";

interface GiftTableRowProps {
  gift: Gift;
}

export const GiftTableRow: FunctionComponent<GiftTableRowProps> = ({ gift }) => {
  const [currentGift, setCurrentGift] = useState(gift);
  const guest = useCurrentGuest();

  const openInNewTab = (url: string) => {
    window.open(url, "_blank")?.focus();
  };

  const handleReserveClick = async (name: string) => {
    if (currentGift.reserved && currentGift.reservedBy !== name) {
      alert(`Gift is already reserved by ${currentGift.reservedBy}`);
    } else if (!currentGift.reserved) {
      const updatedGift = { ...gift, reserved: true, reservedBy: name };
      setCurrentGift(updatedGift);
      await setGiftData(updatedGift);
    } else {
      const updatedGift = { ...gift, reserved: false, reservedBy: "" };
      setCurrentGift(updatedGift);
      await setGiftData(updatedGift);
    }
  };
  return (
    <tr className={styles.row}>
      <TableData
        width="35%"
        onClick={() => {
          openInNewTab(gift.url);
        }}
      >
        {gift.name}
      </TableData>
      <TableData width="10%">{gift.price}</TableData>
      <TableData width="10%" onClick={async () => await handleReserveClick(guest?.name ?? "NONE")}>
        {currentGift.reserved ? (
          <Flexbox alignItems="center" gap={20}>
            <IconCheckmark /> Yes
          </Flexbox>
        ) : (
          <Flexbox alignItems="center" gap={20}>
            <IconX /> No
          </Flexbox>
        )}
      </TableData>
      <TableData width="20%">{currentGift.reservedBy}</TableData>
    </tr>
  );
};
