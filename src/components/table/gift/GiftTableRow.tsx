import { FunctionComponent } from "react";
import { IconCheckmark } from "../../icons/IconCheckmark";
import { IconX } from "../../icons/IconX";
import { Flexbox } from "../../layout/flexbox/Flexbox";
import styles from "../TableRow.module.css";
import { Gift } from "./gift";

interface GiftTableRowProps {
  gift: Gift;
}

export const GiftTableRow: FunctionComponent<GiftTableRowProps> = ({ gift }) => {
  return (
    <tr className={styles.row}>
      <td>{gift.name}</td>
      <td>{gift.price}</td>
      <td>
        {gift.reserved ? (
          <Flexbox alignItems="center" gap={20}>
            <IconCheckmark /> Yes
          </Flexbox>
        ) : (
          <Flexbox alignItems="center" gap={20}>
            <IconX /> No
          </Flexbox>
        )}
      </td>
      <td>{gift.reservedBy}</td>
    </tr>
  );
};
