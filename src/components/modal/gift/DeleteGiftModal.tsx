import { FunctionComponent, useState } from "react";
import { deleteUser } from "../../../firebase/firebase";
import { useTranslator } from "../../../translations/useTranslator";
import { Gift } from "../../gift/gift";
import { Flexbox } from "../../layout/flexbox/Flexbox";
import { Header } from "../../text/Header";
import { Modal } from "../Modal";

interface DeleteGiftModallProps {
  gift: Gift;
  onCancel: () => void;
  onDelete: () => void;
}

export const DeleteGiftModal: FunctionComponent<DeleteGiftModallProps> = ({ gift, onCancel, onDelete }) => {
  const translator = useTranslator();
  const [loading, setLoading] = useState(false);

  const handleDeleteGift = async () => {
    setLoading(true);
    const result = await deleteUser(gift.id ?? "");
    if (result.success) {
      // await deleteGuest(gift);
      onDelete();
    }
    setLoading(false);
  };

  return (
    <Modal
      onConfirm={async () => await handleDeleteGift()}
      onCancel={onCancel}
      loading={loading}
      title={translator.deleteGift()}
    >
      <Flexbox flexDirection="column" gap={20} width="100%">
        <Header text={gift.name} />
        {translator.deleteGiftDescription()}
      </Flexbox>
    </Modal>
  );
};
