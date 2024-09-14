import styles from "../components/Display.module.css";
const Display = ({ displayValue }) => {
  return (
    <input
      type="text"
      className={styles.display}
      value={displayValue}
      readOnly
    ></input>
  );
};

export default Display;
