import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";
function App() {
  const [calval, setCalVal] = useState("");
  const onButtonclick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText == "=") {
      let newVal = eval(calval);
      setCalVal(newVal);
      setTimeout(() => {
        setCalVal("");
      }, 2000);
    } else {
      let newVal = buttonText;
      setCalVal(calval + newVal);
    }
  };
  return (
    <div className={styles.calculator}>
      <Display displayValue={calval}></Display>
      <ButtonsContainer onButtonclick={onButtonclick}></ButtonsContainer>
    </div>
  );
}

export default App;
