import { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import { ToDoItemsContext } from "../store/todo-items";

function ToDoItem({ todo, date }) {
  const { deleteItem } = useContext(ToDoItemsContext);
  return (
    <div className="conntainer">
      <div className="row md-row">
        <div className="col-6">{todo}</div>
        <div className="col-4">{date}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger md-button"
            onClick={() => deleteItem(todo)}
          >
            <MdDeleteForever />
          </button>
        </div>
      </div>
    </div>
  );
}
export default ToDoItem;
