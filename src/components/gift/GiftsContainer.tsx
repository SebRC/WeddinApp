import { FunctionComponent, useEffect, useState } from "react";
import { useGifts } from "../../hooks/useGifts";
import { useTranslator } from "../../translations/useTranslator";
import { Flexbox } from "../layout/flexbox/Flexbox";
import { Paper } from "../layout/paper/Paper";
import { LoadingPage } from "../loading/LoadingPage";
import { Toggle } from "../toggle/Toggle";
import { GiftInfo } from "./GiftInfo";

export const GiftsContainer: FunctionComponent = () => {
  const { gifts, giftsLoading } = useGifts();
  const [loading, setLoading] = useState(giftsLoading);
  const [filterGifts, setFilterGifts] = useState(localStorage.getItem("sortGifts") === "true");
  const [sortedGifts, setSortedGifts] = useState(gifts);
  const translator = useTranslator();

  useEffect(() => {
    setLoading(giftsLoading);
    setSortedGifts(filterGifts ? gifts.sort((a, b) => Number(a.reserved) - Number(b.reserved)) : gifts);
  }, [gifts, giftsLoading, filterGifts]);

  const handleSort = () => {
    localStorage.setItem("sortGifts", `${!filterGifts}`);
    setFilterGifts(!filterGifts);
    if (!filterGifts) {
      setSortedGifts(gifts.sort((a, b) => Number(a.reserved) - Number(b.reserved)));
    } else {
      setSortedGifts(gifts.sort((a, b) => Number(b.reserved) - Number(a.reserved)));
    }
  };

  return loading ? (
    <LoadingPage />
  ) : (
    <Flexbox flexDirection="column" gap={20}>
      <Paper minHeight="auto">
        <Toggle text={translator.sortByUnreservedGifts()} value={filterGifts} onChange={handleSort} />
      </Paper>
      {sortedGifts.map((g, index) => {
        return <GiftInfo gift={g} key={g.name + index} />;
      })}
    </Flexbox>
  );
};
