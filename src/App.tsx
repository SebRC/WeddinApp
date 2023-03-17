import "./App.css";
import { GuestInfo } from "./guest/GuestInfo";
import { Guests } from "./guest/guests";

function App() {
  return (
    <div className="App">
      <GuestInfo guest={Guests[2]} />
    </div>
  );
}

export default App;
