import "./App.css";
import { Flexbox } from "./components/flexbox/Flexbox";
import { ResponsePage } from "./components/responsePage/ResponsePage";
import { GuestInfo } from "./guest/GuestInfo";
import { Guests } from "./guest/guests";

function App() {
  return (
    <div className="App">
      <GuestInfo guest={Guests[0]} />
    </div>
  );
}

export default App;
