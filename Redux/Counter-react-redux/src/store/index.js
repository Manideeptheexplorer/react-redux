import {createStore} from 'redux'
const INITIAL_ITEMS={
  counter:0,
  privacy:false,
}
const countReducer=(store=INITIAL_ITEMS,action)=>{
  if(action.type=="INCREMENT"){
    return {...store,counter:store.counter+1}
  }else if(action.type=="DECREMENT"){
    return {...store,counter:store.counter-1}
  }else if(action.type=="ADDITION"){
    return {...store,counter:store.counter+Number(action.payload.number)}
  }else if(action.type=="SUBTRACTION"){
    return {...store,counter:store.counter-Number(action.payload.number)} 
  }else if(action.type=="PRIVACY_TYPE"){
    return {...store,privacy:!store.privacy}
  }
  return store
}
const counterStore =createStore(countReducer)

export default counterStore