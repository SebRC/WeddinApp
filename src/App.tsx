import "./App.css";
import { Navbar } from "./components/navigation/Navbar";
import { GuestInfo } from "./guest/GuestInfo";
import { Guests, DEFAULT_GUEST_STATE } from "./guest/guests";
import { getUserData } from "./firebase/firebase";
import { useEffect, useState } from "react";

function App() {
  const [guest, setGuest] = useState(DEFAULT_GUEST_STATE);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      setLoading(true);
      const response = await getUserData();
      setGuest(response);
      setLoading(false);
    })();
  }, []);

  console.log("loading", loading);
  return loading ? <>Loading</> : <GuestInfo guest={guest} />;
}

export default App;
