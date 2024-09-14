import { useSelector } from "react-redux";

const DisplayCount = () => {
  const counter = useSelector((store) => store.counter);
  return <p className="lead mb-4">the initial count is : {counter}</p>;
};
export default DisplayCount;
