import "./App.css";
import { GuestInfo } from "./guest/GuestInfo";
import { Guests, DEFAULT_GUEST_STATE } from "./guest/guests";
import { getUserData } from "./firebase/firebase";
import { useEffect, useState } from "react";
import { LoadingPage } from "./components/loading/LoadingPage";

function App() {
  const [guest, setGuest] = useState(DEFAULT_GUEST_STATE);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      setLoading(true);
      const response = await getUserData("martin");

      setGuest(response);
      setLoading(false);
    })();
  }, []);

  return loading ? <LoadingPage /> : <GuestInfo guest={guest} />;
}

export default App;
