import { useSelector } from "react-redux";

const DisplayCount = () => {
  const { counterVal } = useSelector((store) => store.counter);
  // const counter = useSelector((store) => store.counter);
  return <p className="lead mb-4">the initial count is : {counterVal}</p>;
};
export default DisplayCount;
