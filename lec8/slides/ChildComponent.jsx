const ChildComponent = (props) => {
  const { name, position, bogSem, bits } = props;
  return (
    <div>
      <p>
        {name} has been at Bits of Good for {bogSem} semesters. {name} is a{" "}
        {position} at Bits of Good, with {bits} bits to their name.
      </p>
    </div>
  );
};

export default ChildComponent;
