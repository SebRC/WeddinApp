import "./App.css";
import { GuestInfo } from "./guest/GuestInfo";
import { Guests } from "./guest/guests";

function App() {
  return <GuestInfo guest={Guests[0]} />;
}

export default App;
