import { FunctionComponent, useEffect, useState } from "react";
import { useGifts } from "../../hooks/useGifts";
import { Flexbox } from "../layout/flexbox/Flexbox";
import { LoadingPage } from "../loading/LoadingPage";
import { GiftInfo } from "./GiftInfo";

export const GiftsContainer: FunctionComponent = () => {
  const { gifts, giftsLoading } = useGifts();
  const [loading, setLoading] = useState(giftsLoading);
  useEffect(() => {
    setLoading(giftsLoading);
  }, [gifts, giftsLoading]);

  return loading ? (
    <LoadingPage />
  ) : (
    <Flexbox flexDirection="column" gap={20}>
      {gifts.map((g, index) => {
        return <GiftInfo gift={g} key={g.name + index} />;
      })}
    </Flexbox>
  );
};
