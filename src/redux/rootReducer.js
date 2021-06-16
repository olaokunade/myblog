import {combineReducers} from "redux"


const initialState = {age:0, name:"Taiwo"}
const myReducer = (state=initialState, action) =>{
  if (action.type === "ADDONE") {
    let {age} = state
    age+=1
    return {...state, age}
  }
  else if (action.type === "REMOVEONE") {
    let {age} = state
    age-=1
    return {...state, age}
  }
  else{
    return state
  }
}

const secondInitial = ["Ade", "Bola", "Seyi"]
const secondReducer = (state=secondInitial, action)=>{
    if (action.type === "ADDUSER") {
    return [...state, action.payload]
  }else if (action.type === "REMOVEUSER") {
    let newState = [...state]
    newState.pop()
    return newState
  }
  else{
    return state;
  }
}

const rootReducer = combineReducers({
  user: myReducer, students:secondReducer
})
export default rootReducer