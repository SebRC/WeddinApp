import { FunctionComponent } from "react";
import { Guest } from "../../guest/Guest";
import styles from "./GuestTable.module.css";
import { GuestTabelHeader } from "./GuestTableHeader";
import { GuestTableRow } from "./GuestTableRow";

interface GuestTableProps {
  guests: Guest[];
}

export const GuestTable: FunctionComponent<GuestTableProps> = ({ guests }) => {
  return (
    <table className={styles.table}>
      <GuestTabelHeader />
      <tbody>
        {guests.map((g) => {
          {
            return g.guests ? (
              g.guests
                .map((gg) => {
                  return <GuestTableRow guest={gg} />;
                })
                .concat(<GuestTableRow guest={g} />)
                .reverse()
            ) : (
              <GuestTableRow guest={g} />
            );
          }
        })}
      </tbody>
    </table>
  );
};
