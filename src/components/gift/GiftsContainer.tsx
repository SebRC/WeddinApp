import { FunctionComponent, useEffect, useState } from "react";
import { useGifts } from "../../hooks/useGifts";
import { Flexbox } from "../layout/flexbox/Flexbox";
import { Paper } from "../layout/paper/Paper";
import { LoadingPage } from "../loading/LoadingPage";
import { Toggle } from "../toggle/Toggle";
import { GiftInfo } from "./GiftInfo";

export const GiftsContainer: FunctionComponent = () => {
  const { gifts, giftsLoading } = useGifts();
  const [loading, setLoading] = useState(giftsLoading);
  const [filterGifts, setFilterGifts] = useState(false);
  const [filteredGifts, setFilteredGifts] = useState(gifts);

  useEffect(() => {
    setLoading(giftsLoading);
    setFilteredGifts(gifts);
  }, [gifts, giftsLoading]);

  const handleFilter = () => {
    setFilterGifts(!filterGifts);
    if (!filterGifts) {
      setFilteredGifts(gifts.filter((g) => !g.reserved));
    } else {
      setFilteredGifts(gifts);
    }
  };

  return loading ? (
    <LoadingPage />
  ) : (
    <Flexbox flexDirection="column" gap={20}>
      <Paper minHeight="auto">
        <Toggle text="Filtrer reserverede gaver" value={filterGifts} onChange={handleFilter} />
      </Paper>
      {filteredGifts.map((g, index) => {
        return <GiftInfo gift={g} key={g.name + index} />;
      })}
    </Flexbox>
  );
};
