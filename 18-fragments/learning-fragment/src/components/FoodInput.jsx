import styles from './FoodInput.module.css'
const FoodInput=({handleOnKeyDown})=>{
  // const handleOnChange=(event)=>{
  //   console.log(event.target.value)
  // }
  return <input type="text" placeholder="enter the food item here" className={styles.foodInput}onKeyDown={handleOnKeyDown}></input>
}
export default FoodInput