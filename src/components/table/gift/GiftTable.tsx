import { FunctionComponent, useEffect, useState } from "react";
import { Guest } from "../../guest/Guest";
import styles from "../Table.module.css";
import { GiftTableRow } from "./GiftTableRow";
import { TableHeader } from "../TableHeader";
import { SortOrder } from "../sortOrder";
import { Searchbar } from "../../searchbar/Searchbar";
import { Flexbox } from "../../layout/flexbox/Flexbox";
import { useTranslator } from "../../../translations/useTranslator";
import { Button } from "../../button/Button";
import { CreateGuestModal } from "../../modal/guest/CreateGuestModal";
import { GuestDetailsPanel } from "../../layout/details/GuestDetailsPanel";
import { NothingFound } from "../../illustrations/NothingFound";
import { Gift } from "../../gift/gift";
import { CreateGiftModal } from "../../modal/gift/CreateGiftModal";

interface GiftTableProps {
  gifts: Gift[];
}

export const GiftTable: FunctionComponent<GiftTableProps> = ({ gifts }) => {
  const [sortedGifts, setSortedGifts] = useState(gifts.slice());
  const [sortOrder, setSortOrder] = useState(SortOrder.Unsorted);
  const [searchValue, setSearchValue] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedGift, setSelectedGift] = useState<Gift | null>(null);
  const translator = useTranslator();

  useEffect(() => {
    setSortedGifts(gifts);
  }, [gifts]);

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
      setSortedGifts(gifts.slice());
    } else if (sortOrder === SortOrder.Ascending) {
      setSortedGifts(gifts.slice().sort((a, b) => Number(b.reserved) - Number(a.reserved)));
    } else {
      setSortedGifts(gifts.slice().sort((a, b) => Number(a.reserved) - Number(b.reserved)));
    }
  };

  const handleSearch = (value: string) => {
    setSearchValue(value);
    if (!value) {
      handleSort(sortOrder);
    } else {
      const filteredGuests = gifts.filter((g) => g.name.toLowerCase().includes(value));
      setSortedGifts(filteredGuests);
    }
  };

  const handleRowClick = (id: string, index: number) => {
    if (selectedGift && id === selectedGift.id) {
      setSelectedGift(null);
    } else {
      setSelectedGift(sortedGifts[index]);
    }
  };
  return (
    <Flexbox flexDirection="column" gap={20}>
      <Flexbox minHeight="auto" gap={20}>
        <Searchbar value={searchValue} onSearch={(e) => handleSearch(e.target.value.toLowerCase())} />
        <Button onClick={() => setShowModal(true)} text={translator.createGift()} height="3rem" width="10%" />
      </Flexbox>
      <Flexbox gap={30}>
        <table className={styles.table}>
          <TableHeader
            headers={[
              { name: translator.name(), width: "50%" },
              {
                name: translator.reserved(),
                width: "15%",
                sortable: true,
                sorted: sortOrder,
                onSort: () => handleSort(getNextSortOrder()),
              },
              { name: translator.reservedBy(), width: "35%" },
            ]}
          />
          <tbody>
            {sortedGifts.map((g, index) => {
              return <GiftTableRow gift={g} key={`${g.id}`} onClick={() => handleRowClick(g.id ?? "", index)} />;
            })}
          </tbody>
        </table>
        {/* {selectedGift && <GuestDetailsPanel guest={selectedGift} onClose={() => setSelectedGift(null)} />} */}
      </Flexbox>
      {sortedGifts.length === 0 && <NothingFound />}
      {showModal && <CreateGiftModal onCancel={() => setShowModal(false)} />}
    </Flexbox>
  );
};
