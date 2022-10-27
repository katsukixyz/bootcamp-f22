import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input></input>
      </form>
    </div>
  );
}

export default App;
