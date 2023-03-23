import { FunctionComponent, useEffect, useState } from "react";
import { getAllguests } from "../../../firebase/firebase";
import { Guest } from "../../../guest/Guest";
import { LoadingPage } from "../../loading/LoadingPage";
import { GuestTable } from "./GuestTable";

export const GuestTableContainer: FunctionComponent = () => {
  const [guests, setGuests] = useState<Guest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const loadedGuests = await getAllguests();
      setGuests(loadedGuests);
      setLoading(false);
    })();
  }, []);
  return loading ? <LoadingPage /> : <GuestTable guests={guests} />;
};
