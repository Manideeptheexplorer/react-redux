import AppName from "./components/AppName"
import AppToDo from "./components/AddToDo"
import ToDoItem1 from "./components/ToDoItem1"
import ToDoItem2 from "./components/ToDoItem2"
import './App.css'
function App() {
  return <center class='ToDo container'>
    <AppName/>
    <AppToDo/>
    <div className="items-container"><ToDoItem1/>
    <ToDoItem2/></div>
    

  </center>

}

export default App
