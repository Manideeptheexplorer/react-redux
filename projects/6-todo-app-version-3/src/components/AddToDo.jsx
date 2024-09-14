import { useContext, useRef } from "react";
import { MdFileDownloadDone } from "react-icons/md";
import { ToDoItemsContext } from "../store/todo-items";
function AppToDo() {
  // const [newItem, setNewItem] = useState("");
  // const [dueDate, setDueDate] = useState("");
  // const handleItem = (event) => {
  //   // console.log(event.target.value);
  //   setNewItem(event.target.value);
  // };
  // const handleDueDate = (event) => {
  //   // console.log(event.target.value);
  //   setDueDate(event.target.value);
  // };
  const { addNewItem } = useContext(ToDoItemsContext);
  const toDoItem = useRef();
  const dueDateElement = useRef();
  const handleNewItem = (event) => {
    event.preventDefault();
    const newItem = toDoItem.current.value;
    const dueDate = dueDateElement.current.value;
    addNewItem(newItem, dueDate);
    toDoItem.current.value = "";
    dueDateElement.current.value = "";
    // setDueDate("");
    // setNewItem("");
  };

  return (
    <div className="container text-center">
      <form className="row md-row" onSubmit={handleNewItem}>
        <div className="col-6">
          <input type="text" placeholder="enter todo here" ref={toDoItem} />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement} />
        </div>
        <div className="col-2">
          <button className="btn btn-success md-button">
            <MdFileDownloadDone />
          </button>
        </div>
      </form>
    </div>
  );
}
export default AppToDo;
