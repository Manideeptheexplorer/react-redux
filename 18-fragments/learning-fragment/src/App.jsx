import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import FoodItems from './components/FoodItems'
import ErrorMessage from './components/ErrorMessage'
import Container from './components/Container'
import FoodInput from './components/FoodInput'
import { useState } from 'react'
function App() {

  // let foodItems=['Biriyani','Fried rice','Dosa','Pani puri','Pickles']
  // let foodItems=[]
  let [foodItems,setFoodItems]=useState(['Biriyani','Fried rice','Dosa','Pani puri','Pickles'])
  const onKeyDown=(event)=>{
    console.log(event.target.value)
    if(event.key==="Enter"){
      let newFoodItem=event.target.value
      let newItems=[...foodItems,newFoodItem]
      setFoodItems(newItems)
      event.target.value=""
    }
  }
  return (
    <Container>
      <h1 className='foodheading'>Healthy Food</h1>
      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodInput handleOnKeyDown={onKeyDown}></FoodInput>
      <FoodItems items={foodItems}></FoodItems>
    </Container>
    
  )
}

export default App
