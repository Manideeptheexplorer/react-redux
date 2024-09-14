import { useContext } from "react";
import styles from "./WelcomeMessage.module.css";
import { ToDoItemsContext } from "../store/todo-items";
const WelcomeMessage = () => {
  const { todoItems } = useContext(ToDoItemsContext);
  return (
    todoItems.length == 0 && <p className={styles.message}>Enjoy your Day</p>
  );
};
export default WelcomeMessage;
