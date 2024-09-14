import AppName from "./components/AppName";
import AppToDo from "./components/AddToDo";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import { ToDoItemsContext } from "./store/todo-items";
function App() {
  const [todoItems, settodoItems] = useState([]);
  const addNewItem = (itemName, dueDate) => {
    // console.log(`item added :${itemName} dueDate:${dueDate}`);
    // const newItems = [...todoItems, { name: itemName, dueDate: dueDate }];
    settodoItems((curvalue) => [
      ...curvalue,
      { name: itemName, dueDate: dueDate },
    ]);
  };
  const deleteItem = (todoItemName) => {
    // console.log(`item deleted ${todoItemName}`);
    const newtodoItems = todoItems.filter((item) => item.name !== todoItemName);
    settodoItems(newtodoItems);
  };
  // const defaulttodoItems = [
  /*{ name: "kusuma", dueDate: "today" }*/
  // ];
  return (
    <ToDoItemsContext.Provider value={{ todoItems, addNewItem, deleteItem }}>
      <center className="ToDo container">
        <AppName />
        <AppToDo />
        <WelcomeMessage></WelcomeMessage>
        <TodoItems></TodoItems>
      </center>
    </ToDoItemsContext.Provider>
  );
}

export default App;
