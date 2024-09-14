import { useRef } from "react";
import { useDispatch } from "react-redux";
const Controls = () => {
  const inputEle = useRef();

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };
  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  const handleAdd = () => {
    dispatch({
      type: "ADDITION",
      payload: { number: inputEle.current.value },
    });
    inputEle.current.value = "";
  };
  const handleSub = () => {
    dispatch({
      type: "SUBTRACTION",
      payload: { number: inputEle.current.value },
    });
    inputEle.current.value = "";
  };
  const handlePrivacy = () => {
    dispatch({
      type: "PRIVACY_TYPE",
    });
  };
  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-success"
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleDecrement}
        >
          -1
        </button>
        <button className="btn btn-warning" onClick={handlePrivacy}>
          Privacy Toggle
        </button>
      </div>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center another">
        <input type="text" className="input" ref={inputEle} />
        <button type="button" className="btn btn-success" onClick={handleAdd}>
          ADD
        </button>
        <button type="button" className="btn btn-danger" onClick={handleSub}>
          SUB
        </button>
      </div>
    </>
  );
};

export default Controls;
