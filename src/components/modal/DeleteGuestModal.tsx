import { FunctionComponent, useState } from "react";
import { deleteGuest, deleteUser } from "../../firebase/firebase";
import { useTranslator } from "../../translations/useTranslator";
import { Guest } from "../guest/Guest";
import { Flexbox } from "../layout/flexbox/Flexbox";
import { Header } from "../text/Header";
import { Title } from "../text/Title";
import { Modal } from "./Modal";

interface DeleteGuestModalProps {
  guest: Guest;
  onCancel: () => void;
  onDelete: () => void;
}

export const DeleteGuestModal: FunctionComponent<DeleteGuestModalProps> = ({ guest, onCancel, onDelete }) => {
  const translator = useTranslator();
  const [loading, setLoading] = useState(false);

  const handleDeleteGuest = async () => {
    setLoading(true);
    const result = await deleteUser(guest.id ?? "");
    console.log(result.errorCode);
    if (result.success) {
      await deleteGuest(guest);
      onDelete();
    }
    setLoading(false);
  };

  const getPlusOnes = () => {
    return guest.guestIds ? (
      guest.guestIds?.map((g) => {
        return <div>{`• ${g.charAt(0).toUpperCase()}${g.slice(1)}`}</div>;
      })
    ) : (
      <p>{translator.noPlusOnes()}</p>
    );
  };

  return (
    <Modal onConfirm={async () => await handleDeleteGuest()} onCancel={onCancel} loading={loading}>
      <Flexbox flexDirection="column" gap={20}>
        {translator.deleteGuestDescription()}
        <Title title={guest.name} />
        <Flexbox flexDirection="column">
          <Header text={translator.plusOnes()} />
          {getPlusOnes()}
        </Flexbox>
      </Flexbox>
    </Modal>
  );
};
