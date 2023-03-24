import { FunctionComponent, useEffect, useState } from "react";
import { getImage, setGiftData } from "../../firebase/firebase";
import { useCurrentGuest } from "../../hooks/useCurrentGuest";
import { Button } from "../button/Button";
import { IconCheckmark } from "../icons/IconCheckmark";
import { IconX } from "../icons/IconX";
import { Image } from "../image/Image";
import { Flexbox } from "../layout/flexbox/Flexbox";
import { Paper } from "../layout/paper/Paper";
import { LoadingImage } from "../loading/LoadingImage";
import { Gift } from "../table/gift/gift";
import { Header } from "../text/Header";
import { Title } from "../text/Title";

interface GiftInfoProps {
  gift: Gift;
}

export const GiftInfo: FunctionComponent<GiftInfoProps> = ({ gift }) => {
  const [currentGift, setCurrentGift] = useState(gift);
  const [imageUrl, setImageUrl] = useState("");
  const [loadingImage, setLoadingImage] = useState(true);
  const guest = useCurrentGuest();

  const openInNewTab = (url: string) => {
    window.open(url, "_blank")?.focus();
  };

  const handleReserveClick = async (name: string) => {
    if (currentGift.reserved && currentGift.reservedBy !== name) {
      alert(`Gaven er allerede reserveret af ${currentGift.reservedBy}`);
    } else if (!currentGift.reserved) {
      const updatedGift = { ...gift, reserved: true, reservedBy: name };
      setCurrentGift(updatedGift);
      await setGiftData(updatedGift);
    } else {
      const updatedGift = { ...gift, reserved: false, reservedBy: "" };
      setCurrentGift(updatedGift);
      await setGiftData(updatedGift);
    }
  };

  const getButtonText = (): string => {
    return currentGift.reservedBy === guest?.name ? "Fjern reservation" : "Reserver gave";
  };

  useEffect(() => {
    (async () => {
      setLoadingImage(true);
      const url = await getImage(currentGift.image);
      setImageUrl(url);
      setLoadingImage(false);
    })();
  }, [currentGift.image]);
  return (
    <Paper minHeight="auto" gap={20}>
      <Title title={currentGift.name} />
      <Header text={`Pris: ${gift.price}`} />
      <Header
        text="Reserveret af:"
        subHeader={currentGift.reservedBy ? currentGift.reservedBy : "Ikke reserveret endnu"}
      />
      {loadingImage ? <LoadingImage /> : <Image url={imageUrl} />}
      <Button text={getButtonText()} onClick={async () => await handleReserveClick(guest?.name ?? "NONE")} />
    </Paper>
  );
};
