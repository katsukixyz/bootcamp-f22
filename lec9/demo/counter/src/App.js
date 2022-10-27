import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Buttons from "./components/Buttons";

function App() {
  const [index, setIndex] = useState(1);

  return (
    <div>
      <p>{pokemonData.name}</p>
      <button onClick={() => setIndex(index - 1)}>{"<"}</button>
      <button onClick={() => setIndex(index + 1)}>{">"}</button>
    </div>
  );
}

export default App;
