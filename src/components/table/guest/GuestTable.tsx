import { FunctionComponent, useState } from "react";
import { Guest } from "../../guest/Guest";
import styles from "../Table.module.css";
import { GuestTableRow } from "./GuestTableRow";
import { TableHeader } from "../TableHeader";
import { SortOrder } from "../sortOrder";
import { Paper } from "../../layout/paper/Paper";
import { Searchbar } from "../../searchbar/Searchbar";
import { Flexbox } from "../../layout/flexbox/Flexbox";

interface GuestTableProps {
  guests: Guest[];
}

export const GuestTable: FunctionComponent<GuestTableProps> = ({ guests }) => {
  const [sortedGuests, setSortedGuests] = useState(guests.slice());
  const [sortOrder, setSortOrder] = useState(SortOrder.Unsorted);
  const [searchValue, setSearchValue] = useState("");

  const getNextSortOrder = () => {
    if (sortOrder === SortOrder.Unsorted) {
      return SortOrder.Ascending;
    }
    if (sortOrder === SortOrder.Ascending) {
      return SortOrder.Descending;
    }
    return SortOrder.Unsorted;
  };

  const handleSort = (sortOrder: SortOrder) => {
    setSortOrder(sortOrder);
    if (sortOrder === SortOrder.Unsorted) {
      setSortedGuests(guests.slice());
    } else if (sortOrder === SortOrder.Ascending) {
      setSortedGuests(guests.slice().sort((a, b) => Number(b.attending) - Number(a.attending)));
    } else {
      setSortedGuests(guests.slice().sort((a, b) => Number(a.attending) - Number(b.attending)));
    }
  };

  const handleSearch = (value: string) => {
    console.log("value", value);
    setSearchValue(value);
    if (!value) {
      handleSort(sortOrder);
    } else {
      const filteredGuests = guests.filter((g) => g.name.toLowerCase().includes(value));
      setSortedGuests(filteredGuests);
    }
  };
  return (
    <Flexbox flexDirection="column" gap={20}>
      <Paper minHeight="auto">
        <Searchbar value={searchValue} onSearch={(e) => handleSearch(e.target.value.toLowerCase())} />
      </Paper>
      <table className={styles.table}>
        <TableHeader
          headers={[
            { name: "Navn", width: "20%" },
            {
              name: "Kommer",
              width: "10%",
              sortable: true,
              sorted: sortOrder,
              onSort: () => handleSort(getNextSortOrder()),
            },
            { name: "Sang ønske", width: "40%" },
            { name: "Mad info", width: "30%" },
          ]}
        />
        <tbody>
          {sortedGuests.map((g) => {
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
    </Flexbox>
  );
};
