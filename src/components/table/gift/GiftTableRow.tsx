import { FunctionComponent } from "react";
import { KeyCode } from "../../../keycode/KeyCode";
import { useTranslator } from "../../../translations/useTranslator";
import { Gift } from "../../gift/gift";
import { IconCheckmark } from "../../icons/IconCheckmark";
import { IconX } from "../../icons/IconX";
import { Flexbox } from "../../layout/flexbox/Flexbox";
import { Text } from "../../text/Text";
import { TableData } from "../TableData";
import styles from "../TableRow.module.css";

interface GiftTableRowProps {
  gift: Gift;
  onClick?: () => void;
}

export const GiftTableRow: FunctionComponent<GiftTableRowProps> = ({ gift, onClick }) => {
  const translator = useTranslator();

  const handleKeyUp = (key: string) => {
    if (key === KeyCode.Enter) {
      onClick?.();
    }
  };

  return (
    <tr className={styles.row} onClick={onClick} onKeyUp={(e) => handleKeyUp(e.key)} tabIndex={0}>
      <TableData>{gift.name}</TableData>
      <TableData>
        {gift.reserved ? (
          <Flexbox alignItems="center" gap={20}>
            <IconCheckmark /> {translator.yes()}
          </Flexbox>
        ) : (
          <Flexbox alignItems="center" gap={20}>
            <IconX /> {translator.no()}
          </Flexbox>
        )}
      </TableData>
      <TableData>
        <Text text={gift.reservedBy ? gift.reservedBy : translator.notReservedYet()} italic={!gift.reserved} />
      </TableData>
    </tr>
  );
};
