import { ChangeEvent, FunctionComponent, useState } from "react";
import { createGift } from "../../../firebase/firebase";
import { useTranslator } from "../../../translations/useTranslator";
import { FileInput } from "../../input/file/FileInput";
import { Input } from "../../input/Input";
import { Progressbar } from "../../loading/progress/Progressbar";
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
  const [nameError, setNameError] = useState("");
  const [linkError, setLinkError] = useState("");
  const [priceError, setPriceError] = useState("");
  const [fileError, setFileError] = useState("");
  const [loading, setLoading] = useState(false);
  const [percentage, setPercentage] = useState(0);

  const handleProgress = (progress: number) => {
    setPercentage(progress);
  };

  const handleConfirm = async () => {
    setLoading(true);
    if (name && link && price && file) {
      await createGift(file, { name: name, price: price, link: link }, handleProgress);
      onCancel();
    } else {
      const emptyFieldErrorMessafe = translator.thisFieldIsRequired();
      setNameError(name ? "" : emptyFieldErrorMessafe);
      setLinkError(link ? "" : emptyFieldErrorMessafe);
      setPriceError(price ? "" : emptyFieldErrorMessafe);
      setFileError(file ? "" : emptyFieldErrorMessafe);
    }
    setLoading(false);
  };

  const handleNameChange = (value: string) => {
    setNameError("");
    setName(value);
  };

  const handleLinkChange = (value: string) => {
    setLinkError("");
    setLink(value);
  };

  const handlePriceChange = (value: string) => {
    setPriceError("");
    setPrice(value);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <Modal
      onConfirm={async () => await handleConfirm()}
      onCancel={onCancel}
      loading={loading}
      title={translator.createGift()}
    >
      <Input
        required
        onChange={(e) => handleNameChange(e.target.value)}
        value={name}
        label={translator.name()}
        placeholder={translator.name()}
        error={nameError}
      />
      <Input
        required
        onChange={(e) => handleLinkChange(e.target.value)}
        value={link}
        label={translator.link()}
        placeholder={translator.link()}
        error={linkError}
      />
      <Input
        required
        onChange={(e) => handlePriceChange(e.target.value)}
        value={price}
        label={translator.price()}
        placeholder={translator.price()}
        error={priceError}
      />
      <FileInput accept="image/*" label={translator.image()} onChange={handleFileChange} error={fileError} />
      {loading && <Progressbar progress={percentage} />}
    </Modal>
  );
};
