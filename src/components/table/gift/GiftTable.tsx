import { FunctionComponent } from "react";
import styles from "../Table.module.css";
import { TableHeader } from "../TableHeader";
import { Gift } from "../../gift/gift";
import { GiftTableRow } from "./GiftTableRow";

interface GiftTableProps {
  gifts: Gift[];
}

export const GiftTable: FunctionComponent<GiftTableProps> = ({ gifts }) => {
  return (
    <table className={styles.table}>
      <TableHeader
        headers={[
          { name: "Gave", width: "40%" },
          { name: "Pris", width: "30%" },
          { name: "Reserveret", width: "30%" },
        ]}
      />
      <tbody>
        {gifts.map((g, index) => {
          return <GiftTableRow gift={g} key={g.name + index} />;
        })}
      </tbody>
    </table>
  );
};
