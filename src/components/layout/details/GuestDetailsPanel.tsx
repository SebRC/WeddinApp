import { FunctionComponent, useMemo, useState } from "react";
import { useTranslator } from "../../../translations/useTranslator";
import { Button } from "../../button/Button";
import { Guest } from "../../guest/Guest";
import { IconCopy } from "../../icons/IconCopy";
import { DeleteGuestModal } from "../../modal/DeleteGuestModal";
import { Header } from "../../text/Header";
import { Tooltip } from "../../tooltip/Tooltip";
import { Flexbox } from "../flexbox/Flexbox";
import { DetailsPanel } from "./DetailsPanel";

interface GuestDetailsPanelProps {
  guest: Guest;
  onClose: () => void;
}

export const GuestDetailsPanel: FunctionComponent<GuestDetailsPanelProps> = ({ guest, onClose }) => {
  const [showModal, setShowModal] = useState(false);
  const translator = useTranslator();

  const handleDelete = () => {
    onClose();
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
    <DetailsPanel title={guest.name} onClose={onClose}>
      <Header text={translator.attending()} subHeader={guest.attending ? translator.yes() : translator.no()} />
      <Flexbox flexDirection="column" gap={10}>
        <Header text={translator.songWishes()} />
        {guest.songWishes.length !== 0 && guest.songWishes.every((s) => s.trim() !== "") ? (
          guest.songWishes.map((s, index) => {
            return <div key={`${s}-${index}`}>• {s}</div>;
          })
        ) : (
          <>{translator.noSongWishes()}</>
        )}
        <Tooltip text={translator.clickToCopySongs()}>
          <Button onClick={handleSongsClick} icon={<IconCopy fill="var(--secondary)" />} width="100%" />
        </Tooltip>
      </Flexbox>
      <Header
        text={translator.foodInfo()}
        subHeader={guest.foodInfo === "" ? translator.noFoodInfo() : guest.foodInfo}
      />
      {guest.name.split(" ")[0].toLowerCase() !== guest.id ? (
        <Button text={translator.delete()} onClick={() => setShowModal(true)} />
      ) : (
        <Header text={translator.thisGuestIsAplusOne()} />
      )}
      {showModal && <DeleteGuestModal guest={guest} onCancel={() => setShowModal(false)} onDelete={handleDelete} />}
    </DetailsPanel>
  );
};
