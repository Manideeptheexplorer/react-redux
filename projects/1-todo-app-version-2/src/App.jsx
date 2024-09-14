import AppName from "./components/AppName"
import AppToDo from "./components/AddToDo"
import './App.css'
import TodoItems from "./components/TodoItems"
function App() {

  const todoItems=[
  {
    name:"Buy Milk..",
    dueDate:"22-07-2024",
  },
  {
    name:"Buy Milk..",
    dueDate:"22-07-2024",
  },
  {
    name:"Do react..",
    dueDate:"22-07-2024",
  },
  ]
  return <center class='ToDo container'>
    <AppName/>
    <AppToDo/>
    <TodoItems todoItems={todoItems}></TodoItems>
  </center>

}

export default App
