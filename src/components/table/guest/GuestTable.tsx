import { FunctionComponent, useState } from "react";
import { Guest } from "../../guest/Guest";
import styles from "../Table.module.css";
import { GuestTableRow } from "./GuestTableRow";
import { TableHeader } from "../TableHeader";
import { SortOrder } from "../sortOrder";
import { Searchbar } from "../../searchbar/Searchbar";
import { Flexbox } from "../../layout/flexbox/Flexbox";
import { useTranslator } from "../../../translations/useTranslator";
import { Button } from "../../button/Button";
import { Modal } from "../../modal/Modal";
import { CreateGuestModal } from "../../modal/CreateGuestModal";

interface GuestTableProps {
  guests: Guest[];
}

export const GuestTable: FunctionComponent<GuestTableProps> = ({ guests }) => {
  const [sortedGuests, setSortedGuests] = useState(guests.slice());
  const [sortOrder, setSortOrder] = useState(SortOrder.Unsorted);
  const [searchValue, setSearchValue] = useState("");
  const [showModal, setShowModal] = useState(false);
  const translator = useTranslator();

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
      <Flexbox minHeight="auto" gap={20}>
        <Searchbar value={searchValue} onSearch={(e) => handleSearch(e.target.value.toLowerCase())} />
        <Button onClick={() => setShowModal(true)} text="Create guest" />
      </Flexbox>
      <table className={styles.table}>
        <TableHeader
          headers={[
            { name: translator.name(), width: "20%" },
            {
              name: translator.attending(),
              width: "10%",
              sortable: true,
              sorted: sortOrder,
              onSort: () => handleSort(getNextSortOrder()),
            },
            { name: translator.songWishes(), width: "40%" },
            { name: translator.foodInfo(), width: "30%" },
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
      {showModal && <CreateGuestModal onRequestClose={() => setShowModal(false)} />}
    </Flexbox>
  );
};
