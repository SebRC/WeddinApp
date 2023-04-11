import { FunctionComponent, useEffect, useState } from "react";
import { Guest } from "../../guest/Guest";
import styles from "../Table.module.css";
import { GuestTableRow } from "./GuestTableRow";
import { TableHeader } from "../TableHeader";
import { SortOrder } from "../sortOrder";
import { Searchbar } from "../../searchbar/Searchbar";
import { Flexbox } from "../../layout/flexbox/Flexbox";
import { useTranslator } from "../../../translations/useTranslator";
import { Button } from "../../button/Button";
import { CreateGuestModal } from "../../modal/CreateGuestModal";
import { GuestDetailsPanel } from "../../layout/details/GuestDetailsPanel";

interface GuestTableProps {
  guests: Guest[];
}

export const GuestTable: FunctionComponent<GuestTableProps> = ({ guests }) => {
  const [sortedGuests, setSortedGuests] = useState(guests.slice());
  const [sortOrder, setSortOrder] = useState(SortOrder.Unsorted);
  const [searchValue, setSearchValue] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedGuest, setSelectedGuest] = useState<Guest | null>(null);
  const translator = useTranslator();

  useEffect(() => {
    setSortedGuests(guests);
  }, [guests]);

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

  const handleRowClick = (id: string, index: number) => {
    if (selectedGuest && id === selectedGuest.id) {
      setSelectedGuest(null);
    } else {
      setSelectedGuest(sortedGuests[index]);
    }
  };
  return (
    <Flexbox flexDirection="column" gap={20}>
      <Flexbox minHeight="auto" gap={20}>
        <Searchbar value={searchValue} onSearch={(e) => handleSearch(e.target.value.toLowerCase())} />
        <Button onClick={() => setShowModal(true)} text={translator.createGuest()} height="3rem" />
      </Flexbox>
      <Flexbox gap={30}>
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
            {sortedGuests.map((g, mainGuestIndex) => {
              return g.guests ? (
                g.guests
                  .map((gg, index) => {
                    return (
                      <GuestTableRow
                        guest={gg}
                        key={`${gg.id}-${index}`}
                        onClick={() => handleRowClick(gg.id ?? "", index)}
                      />
                    );
                  })
                  .concat(
                    <GuestTableRow
                      guest={g}
                      key={`${g.id}`}
                      onClick={() => handleRowClick(g.id ?? "", mainGuestIndex)}
                    />
                  )
                  .reverse()
              ) : (
                <GuestTableRow guest={g} key={`${g.id}`} onClick={() => handleRowClick(g.id ?? "", mainGuestIndex)} />
              );
            })}
          </tbody>
        </table>
        {selectedGuest && <GuestDetailsPanel guest={selectedGuest} onDelete={() => {}} />}
      </Flexbox>
      {showModal && <CreateGuestModal onCancel={() => setShowModal(false)} />}
    </Flexbox>
  );
};
