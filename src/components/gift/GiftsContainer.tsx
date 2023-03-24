import { FunctionComponent, useEffect, useState } from "react";
import { getAllGifts } from "../../firebase/firebase";
import { Flexbox } from "../layout/flexbox/Flexbox";
import { LoadingPage } from "../loading/LoadingPage";
import { Gift } from "./gift";
import { GiftInfo } from "./GiftInfo";

export const GiftsContainer: FunctionComponent = () => {
  const [gifts, setGifts] = useState<Gift[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const loadedGifts = await getAllGifts();
      setGifts(loadedGifts);
      setLoading(false);
    })();
  }, []);
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
