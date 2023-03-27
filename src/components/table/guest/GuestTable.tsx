import { FunctionComponent, useState } from "react";
import { Guest } from "../../../guest/Guest";
import styles from "../Table.module.css";
import { GuestTableRow } from "./GuestTableRow";
import { TableHeader } from "../TableHeader";
import { SortOrder } from "../sortOrder";

interface GuestTableProps {
  guests: Guest[];
}

export const GuestTable: FunctionComponent<GuestTableProps> = ({ guests }) => {
  const [sortedGuest, setSortedGuests] = useState(guests.slice());
  const [sorted, setSorted] = useState(SortOrder.Unsorted);
  const getNextSortState = () => {
    if (sorted === SortOrder.Unsorted) {
      return SortOrder.Ascending;
    }
    if (sorted === SortOrder.Ascending) {
      return SortOrder.Descending;
    }
    return SortOrder.Unsorted;
  };

  const handleSort = () => {
    const nextSortState = getNextSortState();
    setSorted(nextSortState);
    if (nextSortState === SortOrder.Unsorted) {
      setSortedGuests(guests.slice());
    } else if (nextSortState === SortOrder.Ascending) {
      setSortedGuests(sortedGuest.sort((a, b) => Number(b.attending) - Number(a.attending)));
    } else {
      setSortedGuests(sortedGuest.sort((a, b) => Number(a.attending) - Number(b.attending)));
    }
  };
  return (
    <table className={styles.table}>
      <TableHeader
        headers={[
          { name: "Navn", width: "20%" },
          {
            name: "Kommer",
            width: "10%",
            sortable: true,
            sorted: sorted,
            onSort: handleSort,
          },
          { name: "Song wishes", width: "40%" },
          { name: "Food info", width: "30%" },
        ]}
      />
      <tbody>
        {sortedGuest.map((g) => {
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
