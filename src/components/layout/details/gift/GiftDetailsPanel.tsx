import { FunctionComponent, useEffect, useState } from "react";
import { getImage } from "../../../../firebase/firebase";
import { useTranslator } from "../../../../translations/useTranslator";
import { Button } from "../../../button/Button";
import { Gift } from "../../../gift/gift";
import { IconCheckmark } from "../../../icons/IconCheckmark";
import { IconX } from "../../../icons/IconX";
import { Image } from "../../../image/Image";
import { Link } from "../../../link/Link";
import { LoadingImage } from "../../../loading/LoadingImage";
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
  const [loadingImage, setLoadingImage] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const translator = useTranslator();

  const handleDelete = () => {
    onClose();
    setShowModal(false);
  };

  useEffect(() => {
    (async () => {
      setLoadingImage(true);
      const url = await getImage(gift.image);
      setImageUrl(url);
      setLoadingImage(false);
    })();
  }, [gift.image]);

  return (
    <DetailsPanel title={gift.name} onClose={onClose}>
      <Flexbox flexDirection="column" gap={10}>
        <Header text={translator.reserved()} />
        <Flexbox justifyContent="space-between">
          <Flexbox gap={20}>
            {gift.reserved ? <IconCheckmark /> : <IconX />}
            {gift.reserved ? translator.yes() : translator.no()}
          </Flexbox>
          {loadingImage ? <LoadingImage size="150px" /> : <Image url={imageUrl} size="150px" />}
        </Flexbox>
      </Flexbox>
      <Header
        text={translator.reservedBy()}
        subHeader={gift.reservedBy ? gift.reservedBy : translator.notReservedYet()}
      />
      <Flexbox flexDirection="column">
        <Header text={translator.link()} />
        <Link url={gift.url}>{gift.name}</Link>
      </Flexbox>
      <Header text={translator.price()} subHeader={gift.price} />
      <Button text={translator.delete()} onClick={() => setShowModal(true)} />
      {showModal && <DeleteGiftModal gift={gift} onCancel={() => setShowModal(false)} onDelete={handleDelete} />}
    </DetailsPanel>
  );
};
