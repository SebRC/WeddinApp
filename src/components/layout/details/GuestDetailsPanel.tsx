import { FunctionComponent, useState } from "react";
import { useTranslator } from "../../../translations/useTranslator";
import { Button } from "../../button/Button";
import { Guest } from "../../guest/Guest";
import { DeleteGuestModal } from "../../modal/DeleteGuestModal";
import { Header } from "../../text/Header";
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
  return (
    <DetailsPanel title={guest.name}>
      <Header text={translator.attending()} subHeader={guest.attending ? translator.yes() : translator.no()} />
      <Header text={translator.songWishes()} subHeader={guest.songWishes.join(", ")} />
      <Header text={translator.foodInfo()} subHeader={guest.foodInfo} />
      <Button text={translator.delete()} onClick={() => setShowModal(true)} />
      {showModal && <DeleteGuestModal guest={guest} onCancel={() => setShowModal(false)} onDelete={handleDelete} />}
    </DetailsPanel>
  );
};
