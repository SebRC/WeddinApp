import { FunctionComponent, useEffect, useState } from "react";
import { getAllGifts } from "../../../firebase/firebase";
import { LoadingPage } from "../../loading/LoadingPage";
import { Gift } from "../../gift/gift";
import { GiftTable } from "./GiftTable";

export const GiftTableContainer: FunctionComponent = () => {
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
  return loading ? <LoadingPage /> : <GiftTable gifts={gifts} />;
};
