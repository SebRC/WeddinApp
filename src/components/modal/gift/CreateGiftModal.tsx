import { ChangeEvent, FunctionComponent, useState } from "react";
import { useTranslator } from "../../../translations/useTranslator";
import { FileInput } from "../../input/file/FileInput";
import { Input } from "../../input/Input";
import { Flexbox } from "../../layout/flexbox/Flexbox";
import { Modal } from "../Modal";

interface CreateGiftModalProps {
  onCancel: () => void;
}

export const CreateGiftModal: FunctionComponent<CreateGiftModalProps> = ({ onCancel }) => {
  const translator = useTranslator();
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState<File>();
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

  const handleLinkChange = (value: string) => {
    setLink(value);
  };

  const handlePriceChange = (value: string) => {
    setPrice(value);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <Modal
      onConfirm={async () => await handleCreateGift()}
      onCancel={onCancel}
      loading={loading}
      title={translator.createGift()}
    >
      <Input
        required
        onChange={(e) => setName(e.target.value)}
        value={name}
        label={translator.name()}
        placeholder={translator.name()}
      />
      <Input
        required
        onChange={(e) => handleLinkChange(e.target.value)}
        value={link}
        label={translator.link()}
        placeholder={translator.link()}
      />
      <Input
        required
        onChange={(e) => handlePriceChange(e.target.value)}
        value={price}
        label={translator.price()}
        placeholder={translator.price()}
      />
      <FileInput accept="image/*" label={translator.image()} onChange={handleFileChange} />
    </Modal>
  );
};
