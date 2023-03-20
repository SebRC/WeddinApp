import { FunctionComponent, useEffect, useState } from "react";
import { LoadingPage } from "../components/loading/LoadingPage";
import { getGuestData } from "../firebase/firebase";
import { useCurrentUser } from "../hooks/useCurrentUser";
import { GuestInfo } from "./GuestInfo";
import { DEFAULT_GUEST_STATE, Guests } from "./guests";

export const GuestContainer: FunctionComponent = () => {
  const [loading, setLoading] = useState(true);
  const [guest, setGuest] = useState(DEFAULT_GUEST_STATE);
  const user = useCurrentUser();
  const debugLocal = true;

  useEffect(() => {
    (async () => {
      setLoading(true);
      let response = DEFAULT_GUEST_STATE;
      if (debugLocal) {
        response = Guests[0];
      } else {
        response = await getGuestData(user?.uid ?? "none");
      }
      setGuest(response);
      setLoading(false);
    })();
  }, []);
  return loading ? <LoadingPage /> : <GuestInfo guest={guest} />;
};
