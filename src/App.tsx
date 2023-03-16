import "./App.css";
import { Flexbox } from "./components/flexbox/Flexbox";
import { ResponsePage } from "./components/responsePage/ResponsePage";
import { Guests } from "./user/guests";

function App() {
  return (
    <div className="App">
      <Flexbox flexDirection="column" gap={20}>
        {Guests.map((g) => {
          if (g.guests) {
            g.guests.map((gg) => {
              return <ResponsePage guest={gg} />;
            });
          }
          return g.guests ? (
            g.guests
              .map((gg) => {
                return <ResponsePage guest={gg} />;
              })
              .concat(<ResponsePage guest={g} />)
              .reverse()
          ) : (
            <ResponsePage guest={g} />
          );
        })}
      </Flexbox>
    </div>
  );
}

export default App;
