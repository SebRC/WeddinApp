import { FunctionComponent, useState } from "react";
import { useTranslator } from "../../../translations/useTranslator";
import { Input } from "../../input/Input";
import { Flexbox } from "../../layout/flexbox/Flexbox";
import { Modal } from "../Modal";

interface CreateGiftModalProps {
  onCancel: () => void;
}

export const CreateGiftModal: FunctionComponent<CreateGiftModalProps> = ({ onCancel }) => {
  const translator = useTranslator();
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCreateGift = async () => {
    setLoading(true);
    if (name) {
      // const result = await createUser(email, password);
      // if (result.userId) {
      //   await createGuest({ name: name, id: result.userId, guestNames: plusOnes });
      //   onCancel();
      // }
    }
    setLoading(false);
  };

  return (
    <Modal
      onConfirm={async () => await handleCreateGift()}
      onCancel={onCancel}
      loading={loading}
      title={translator.createGift()}
    >
      <Flexbox flexDirection="column" gap={20} width="100%">
        <Input
          required
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
          label={translator.name()}
          placeholder={translator.name()}
        />
      </Flexbox>
    </Modal>
  );
};
