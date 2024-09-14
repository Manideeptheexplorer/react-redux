import ToDoItem from "./ToDoItem"
import styles from './TodoItems.module.css'
const TodoItems=({todoItems})=>{
  return (
    <div className={styles.container}>
      {todoItems.map((item)=>(<ToDoItem todo={item.name} date={item.dueDate}></ToDoItem>))}
      </div>
  )
}
export default TodoItems