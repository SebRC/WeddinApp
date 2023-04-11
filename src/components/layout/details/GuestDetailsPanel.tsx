import { FunctionComponent, useMemo, useState } from "react";
import { useTranslator } from "../../../translations/useTranslator";
import { Button } from "../../button/Button";
import { Guest } from "../../guest/Guest";
import { IconCopy } from "../../icons/IconCopy";
import { DeleteGuestModal } from "../../modal/DeleteGuestModal";
import { Header } from "../../text/Header";
import { Flexbox } from "../flexbox/Flexbox";
import { DetailsPanel } from "./DetailsPanel";

interface GuestDetailsPanelProps {
  guest: Guest;
  onDelete: () => void;
}

export const GuestDetailsPanel: FunctionComponent<GuestDetailsPanelProps> = ({ guest, onDelete }) => {
  const [showModal, setShowModal] = useState(false);
  const translator = useTranslator();

  const handleDelete = () => {
    onDelete();
    setShowModal(false);
  };

  const handleSongsClick = () => {
    const text = guest.songWishes.filter((s) => s).join(", ");
    if (text) {
      navigator.clipboard.writeText(filteredSongs);
    }
  };

  const filteredSongs = useMemo(() => {
    return guest.songWishes.filter((s) => s).join(", ");
  }, [guest.songWishes]);
  return (
    <DetailsPanel title={guest.name}>
      <Header text={translator.attending()} subHeader={guest.attending ? translator.yes() : translator.no()} />
      <Flexbox flexDirection="column" gap={10}>
        <Flexbox gap={10} justifyContent="space-between">
          <Header text={translator.songWishes()} />
          <Button width="3rem" onClick={handleSongsClick} icon={<IconCopy fill="var(--secondary)" />} />
        </Flexbox>
        {guest.songWishes.length !== 0 ? (
          guest.songWishes.map((s, index) => {
            return <div key={`${s}-${index}`}>• {s}</div>;
          })
        ) : (
          <>{translator.noSongWishes()}</>
        )}
      </Flexbox>
      <Header
        text={translator.foodInfo()}
        subHeader={guest.foodInfo === "" ? translator.noFoodInfo() : guest.foodInfo}
      />
      <Button text={translator.delete()} onClick={() => setShowModal(true)} />
      {showModal && <DeleteGuestModal guest={guest} onCancel={() => setShowModal(false)} onDelete={handleDelete} />}
    </DetailsPanel>
  );
};
