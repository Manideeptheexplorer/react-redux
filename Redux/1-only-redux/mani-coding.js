const redux=require('redux')

const INITIAL_COUNTER={counter:0}

const reducer=(store=INITIAL_COUNTER,action)=>{
  let newCounter=store;
  if(action.type=="INCREMENT"){
    newCounter={counter:store.counter+1};
  }
  else if(action.type=="DECREMENT"){
    newCounter={counter:store.counter-1};
  } else if(action.type=="ADDITION"){
    newCounter={counter:store.counter+action.payload.number};
  }
  return newCounter
}
const store=redux.createStore(reducer)

const subscriber=()=>{
  const state=store.getState();
  console.log(state)
}
store.subscribe(subscriber)

store.dispatch({type:"INCREMENT"})
store.dispatch({type:"DECREMENT"})
store.dispatch({type:"INCREMENT"})
store.dispatch({type:"ADDITION",payload:{number:7}})

