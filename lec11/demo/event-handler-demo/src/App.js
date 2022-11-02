import logo from "./logo.svg";
import { useEffect, useState } from "react";
import "./App.css";
import { usePokemonData } from "./hooks";

function App() {
  const [formVals, setFormVals] = useState({
    firstName: "",
    lastName: "",
    year: "2",
  });

  const { firstName, lastName, year } = formVals;

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          placeholder="First name"
          value={formVals[firstName]}
          onChange={(e) => {
            const copiedFormVals = { ...formVals };
            copiedFormVals["firstName"] += e.nativeEvent.data;
            setFormVals(copiedFormVals);
          }}
        ></input>
        <input
          placeholder="Last name"
          value={lastName}
          onChange={(e) => {
            const copiedFormVals = { ...formVals };
            copiedFormVals["lastName"] += e.nativeEvent.data;
            setFormVals(copiedFormVals);
          }}
        ></input>
        <select
          value={year}
          onChange={(e) => {
            const copiedFormVals = { ...formVals };
            copiedFormVals["year"] = e.target.value;
            setFormVals(copiedFormVals);
          }}
        >
          <option value="1">1st Year</option>
          <option value="2">2nd Year</option>
          <option value="3">3rd Year</option>
          <option value="4">4th Year</option>
        </select>
      </form>
    </div>
  );
}

export default App;
