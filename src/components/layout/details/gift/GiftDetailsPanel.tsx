import { FunctionComponent, useState } from "react";
import { useTranslator } from "../../../../translations/useTranslator";
import { Gift } from "../../../gift/gift";
import { IconCheckmark } from "../../../icons/IconCheckmark";
import { IconX } from "../../../icons/IconX";
import { DeleteGiftModal } from "../../../modal/gift/DeleteGiftModal";
import { Header } from "../../../text/Header";
import { Flexbox } from "../../flexbox/Flexbox";
import { DetailsPanel } from "../DetailsPanel";

interface GiftDetailsPanelProps {
  gift: Gift;
  onClose: () => void;
}

export const GiftDetailsPanel: FunctionComponent<GiftDetailsPanelProps> = ({ gift, onClose }) => {
  const [showModal, setShowModal] = useState(false);
  const translator = useTranslator();

  const handleDelete = () => {
    onClose();
    setShowModal(false);
  };

  return (
    <DetailsPanel title={gift.name} onClose={onClose}>
      <Flexbox flexDirection="column" gap={10}>
        <Header text={translator.reserved()} />
        <Flexbox gap={20}>
          {gift.reserved ? <IconCheckmark /> : <IconX />}
          {gift.reserved ? translator.yes() : translator.no()}
        </Flexbox>
      </Flexbox>
      <Header
        text={translator.reservedBy()}
        subHeader={gift.reservedBy ? gift.reservedBy : translator.notReservedYet()}
      />
      <Flexbox flexDirection="column">
        <Header text={translator.link()} />
        <a href={gift.url} target="_blank" rel="noreferrer">
          {gift.name}
        </a>
      </Flexbox>
      <Header text={translator.price()} subHeader={gift.price} />
      {showModal && <DeleteGiftModal gift={gift} onCancel={() => setShowModal(false)} onDelete={handleDelete} />}
    </DetailsPanel>
  );
};
