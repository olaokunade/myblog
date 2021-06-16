import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';


const Neww = ()=> {
  const [login, setLogin] = useState({ email: "", password: "" });
  const [error, setError] = useState();
 
  let dispatch = useDispatch()
  let history = useHistory()

  const onLogin = (e) => {
    e.preventDefault(); 
    let myStore = JSON.parse(localStorage.getItem("register"))
    let user = myStore.filter((info)=> info.email === login.email && Number(info.password) === Number(login.password) )
    if (user.length !== 0) {
      let newUser = user.find((info)=> info.email === login.email && Number(info.password) === Number(login.password) )
      dispatch({
        type:"ADD",
        payload: newUser
      })
      setLogin({ email: "", password: "" })
      history.push("/")
    }else if (user.length === 0) {
      setError("something went wrong, kindy try again or register")
    }
  };
  const remove = ()=>{
    setError("")
  }

  

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Login</h2>

      {/* {(error !== "") ? <div>{error}</div> : <p>Welcome back {lastname} </p>} */}
      {/* <div>{error}</div> */}
      {error &&  (<span><span>{error} </span><button onClick={remove}>&times;</button></span>)}
      <form onSubmit={onLogin}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          value={login.email}
          onChange={(e) => setLogin({ ...login, email: e.target.value })}
        />{" "}
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={login.password}
          onChange={(e) => setLogin({ ...login, password: e.target.value })}
        />{" "}
        <br />
        <input className="registerBtn" type="submit" value="Login" />
      </form>
    </div>
  )
}

export default Neww;
