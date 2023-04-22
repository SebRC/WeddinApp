import { FunctionComponent, useEffect, useState } from "react";
import { useGuests } from "../../../hooks/useGuests";
import { Guest } from "../../guest/Guest";
import { GuestTable } from "./GuestTable";

export const GuestTableContainer: FunctionComponent = () => {
  const { guests, guestsLoading } = useGuests();
  const [sortedGuests, setSortedGuests] = useState<Guest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(guestsLoading);
    setSortedGuests(guests);
  }, [guestsLoading, guests]);

  return <GuestTable guests={sortedGuests} loading={loading} />;
};
