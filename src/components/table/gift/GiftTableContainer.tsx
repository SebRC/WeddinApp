import { FunctionComponent, useEffect, useState } from "react";
import { useGifts } from "../../../hooks/useGifts";
import { Gift } from "../../gift/gift";
import { LoadingPage } from "../../loading/LoadingPage";
import { GiftTable } from "./GiftTable";

export const GiftTableContainer: FunctionComponent = () => {
  const { gifts, giftsLoading } = useGifts();
  const [sortedGifts, setSortedGifts] = useState<Gift[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(giftsLoading);
    setSortedGifts(gifts);
  }, [giftsLoading, gifts]);

  return loading ? <LoadingPage /> : <GiftTable gifts={sortedGifts} />;
};
