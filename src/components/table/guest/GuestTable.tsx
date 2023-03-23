import { FunctionComponent } from "react";
import { Guest } from "../../../guest/Guest";
import styles from "../Table.module.css";
import { GuestTabelHeader } from "../guest/GuestTableHeader";
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
          return g.guests ? (
            g.guests
              .map((gg, index) => {
                return <GuestTableRow guest={gg} key={`${gg.id}-${index}`} />;
              })
              .concat(<GuestTableRow guest={g} key={`${g.id}`} />)
              .reverse()
          ) : (
            <GuestTableRow guest={g} key={`${g.id}`} />
          );
        })}
      </tbody>
    </table>
  );
};
