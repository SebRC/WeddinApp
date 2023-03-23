import { FunctionComponent } from "react";
import { Guest } from "../../../guest/Guest";
import styles from "../Table.module.css";
import { TableHeader } from "../TableHeader";
import { Gift } from "./gift";
import { GiftTableRow } from "./GiftTableRow";

interface GiftTableProps {
  gifts: Gift[];
}

export const GiftTable: FunctionComponent<GiftTableProps> = ({ gifts }) => {
  return (
    <table className={styles.table}>
      <TableHeader headers={["Gift", "Price", "Reserved", "Reserved by"]} />
      <tbody>
        {gifts.map((g, index) => {
          return <GiftTableRow gift={g} key={g.name + index} />;
        })}
      </tbody>
    </table>
  );
};
