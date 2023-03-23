import { FunctionComponent, useState } from "react";
import { Guest } from "../../../guest/Guest";
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
  const openInNewTab = (url: string) => {
    window.open(url, "_blank")?.focus();
  };

  const handleReserveClick = (name: string) => {
    if (currentGift.reserved && currentGift.reservedBy !== name) {
      alert(`Gift is already reserved by ${currentGift.reservedBy}`);
    } else if (!currentGift.reserved) {
      setCurrentGift({ ...gift, reserved: true, reservedBy: "Sebastian Refsbæk Christiansen" });
    } else {
      setCurrentGift({ ...gift, reserved: false, reservedBy: undefined });
    }
  };
  return (
    <tr className={styles.row}>
      <TableData
        width="30%"
        onClick={() => {
          openInNewTab(gift.url);
        }}
      >
        {gift.name}
      </TableData>
      <TableData>{gift.price}</TableData>
      <TableData width="10%" onClick={() => handleReserveClick("Sebastian Refsbæk Christiansen")}>
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
