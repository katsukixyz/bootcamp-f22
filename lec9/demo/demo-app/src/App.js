import ChildComponent from "./components/ChildComponent";

const exampleData = [
  {
    name: "Katsuki",
    position: "Dev Bootcamp Instructor",
    bogSem: 3,
    bits: 33,
  },
  {
    name: "Alice",
    position: "Director of Engineering",
    bogSem: 5,
    bits: 13,
  },
  {
    name: "Sharath",
    position: "Associate Director of Engineering",
    bogSem: 6,
    bits: 2,
  },
];

function App() {
  let i = 0;
  const { name, position, bogSem, bits } = exampleData[i];
  return (
    <div>
      <p>
        {name} has been at Bits of Good for {bogSem} semesters. {name} is a{" "}
        {position} at Bits of Good, with {bits} bits to their name.
      </p>
      <button
        onClick={() => {
          i = i - 1;
        }}
      >
        {"<"}
      </button>
      <button
        onClick={() => {
          i = i + 1;
        }}
      >
        {">"}
      </button>
    </div>
  );
}

export default App;

useEffect(() => {
  // some function here
  return () => {
    //some cleanup function here
  };
}, []);
