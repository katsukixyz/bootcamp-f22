import ChildComponent from "./ChildComponent";

const exampleData = {
  name: "Katsuki",
  position: "Dev Bootcamp Instructor",
  bogSem: 3,
  bits: 33,
};

const ParentComponent = () => {
  return (
    <div>
      <Header />
      <ChildComponent {...exampleData} />
      <Footer />
    </div>
  );
};

export default ParentComponent;
