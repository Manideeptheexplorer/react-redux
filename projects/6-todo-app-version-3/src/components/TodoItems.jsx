import { useContext } from "react";
import ToDoItem from "./ToDoItem";
import styles from "./TodoItems.module.css";
import { ToDoItemsContext } from "../store/todo-items";

const TodoItems = () => {
  const { todoItems } = useContext(ToDoItemsContext);
  return (
    <div className={styles.container}>
      {todoItems.map((item) => (
        <ToDoItem
          key={item.name}
          todo={item.name}
          date={item.dueDate}
        ></ToDoItem>
      ))}
    </div>
  );
};
export default TodoItems;
