import "./App.css";
import { Navbar } from "./components/navigation/Navbar";
import { GuestInfo } from "./guest/GuestInfo";
import { Guests, DEFAULT_GUEST_STATE } from "./guest/guests";
import { getUserData } from "./firebase/firebase";
import { useEffect, useState } from "react";

function App() {
  const [guest, setGuest] = useState(DEFAULT_GUEST_STATE);
  useEffect(() => {
    (async () => {
      const response = await getUserData();
      setGuest(response);
    })();
  }, []);
  return <GuestInfo guest={guest} />;
}

export default App;
