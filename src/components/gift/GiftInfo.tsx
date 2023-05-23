import { FunctionComponent, useEffect, useState } from "react";
import { getImage, setGiftData } from "../../firebase/firebase";
import { useCurrentGuest } from "../../hooks/useCurrentGuest";
import { Button } from "../button/Button";
import { Image } from "../image/Image";
import { Flexbox } from "../layout/flexbox/Flexbox";
import { Paper } from "../layout/paper/Paper";
import { LoadingImage } from "../loading/LoadingImage";
import { Gift } from "./gift";
import { Header } from "../text/Header";
import { Title } from "../text/Title";
import styles from "./GiftInfo.module.css";
import { useTranslator } from "../../translations/useTranslator";
import { Link } from "../link/Link";

interface GiftInfoProps {
  gift: Gift;
}

export const GiftInfo: FunctionComponent<GiftInfoProps> = ({ gift }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [loadingImage, setLoadingImage] = useState(true);
  const guest = useCurrentGuest();
  const translator = useTranslator();

  const handleReserveClick = async (name: string) => {
    if (gift.reserved && gift.reservedBy !== name) {
      alert(translator.giftAlreadyReserved(gift.reservedBy ?? ""));
    } else if (!gift.reserved) {
      const updatedGift = { ...gift, reserved: true, reservedBy: name };
      await setGiftData(updatedGift);
    } else {
      const updatedGift = { ...gift, reserved: false, reservedBy: "" };
      await setGiftData(updatedGift);
    }
  };

  const getButtonText = (): string => {
    return gift.reservedBy === guest?.name ? translator.removeReservation() : translator.reserveGift();
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
    <Paper minHeight="auto" gap={10}>
      <Link url={gift.url}>
        <Title title={gift.name} />
      </Link>
      <Flexbox>
        <Flexbox flexDirection="column" gap={20} width="100%">
          <Header text={translator.giftPrice(`${gift.price}`)} />
          <Header
            text={translator.reservedBy()}
            subHeader={
              gift.reserved
                ? `${
                    gift.reservedBy === guest?.name ? translator.reservedByYou(gift.reservedBy ?? "") : gift.reservedBy
                  }`
                : translator.notReservedYet()
            }
          />
        </Flexbox>
        <Flexbox width="100%" justifyContent="flex-end" alignItems="center">
          {loadingImage ? <LoadingImage size="150px" /> : <Image url={imageUrl} size="150px" />}
        </Flexbox>
      </Flexbox>
      <Button
        text={getButtonText()}
        onClick={async () => await handleReserveClick(guest?.name ?? "NONE")}
        disabled={gift.reserved && gift.reservedBy !== guest?.name}
      />
    </Paper>
  );
};
