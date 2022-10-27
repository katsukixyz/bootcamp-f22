import logo from "./logo.svg";
import "./App.css";
import Buttons from "./components/Buttons";

const pokemonData = {
  name: "bulbasaur",
  types: ["grass"],
};

function App() {
  const bog = "Bits of Good";
  return (
    <div>
      <div
        style={{
          backgroundColor: "red",
        }}
      >
        <h1>{bog}</h1>
      </div>
      <Buttons data={["Yes", "No"]} />
    </div>
  );
}

export default App;
