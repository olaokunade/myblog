import {addOne, addUser, removeOne, removeUser, setUsers} from "../actions"

export const addNum = ()=>{
  return({
    type:addOne
  })
}

export const removeNum = ()=>{
  return({
    type:removeOne
  })
}

export const removeAUser = ()=>{
  return({
    type:removeUser
  })
}

export const addAUser = (inp)=>{
  return({
    type:addUser,
    payload:inp
  })
}

export const setAllUser = ()=>{
  return dispatch=>{
    setTimeout( ()=>{
      dispatch({
        type:setUsers,
      })

    }, 5000)
  }
}