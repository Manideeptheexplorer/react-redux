import styles from "../components/ButtonsContainer.module.css";
const ButtonsContainer = ({ onButtonclick }) => {
  const buttonName = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "9",
    "0",
    "=",
  ];
  return (
    <div className={styles.buttonContainer}>
      {buttonName.map((buttonName) => (
        <button
          className={styles.button}
          onClick={() => {
            onButtonclick(buttonName);
          }}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};
export default ButtonsContainer;
