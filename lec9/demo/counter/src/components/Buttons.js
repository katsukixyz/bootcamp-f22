import LeftButton from "./LeftButton";
import RightButton from "./RightButton";

function Buttons(props) {
  // const { increment, decrement } = props;
  const { increment } = props;
  return (
    <div>
      <button onClick={increment}>{">"}</button>
      {/* <LeftButton />
      <RightButton /> */}
    </div>
  );
}

export default Buttons;
