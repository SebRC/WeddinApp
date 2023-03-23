import { FunctionComponent } from "react";
import { Guest } from "../../../guest/Guest";
import styles from "../Table.module.css";
import { GuestTableRow } from "./GuestTableRow";
import { TableHeader } from "../TableHeader";

interface GuestTableProps {
  guests: Guest[];
}

export const GuestTable: FunctionComponent<GuestTableProps> = ({ guests }) => {
  return (
    <table className={styles.table}>
      <TableHeader
        headers={[
          { name: "Navn", width: "20%" },
          { name: "Kommer", width: "10%" },
          { name: "Song wishes", width: "40%" },
          { name: "Food info", width: "30%" },
        ]}
      />
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
