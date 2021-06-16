import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router';

function Register() {
  let dispatch = useDispatch()
  let history = useHistory()
  const [register, setRegister] = useState({
    fisrtname: "",
    lastname: "",
    email: "",
    password: "",
  })

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch({
      type: "REGISTER",
      payload: register
    })

    let myStore
    if (localStorage.getItem("register") === null) {
      myStore = []
    } else {
      myStore = JSON.parse(localStorage.getItem("register"))
    }
    myStore.push(register)
    localStorage.setItem("register", JSON.stringify(myStore))
    setRegister({
      fisrtname: "",
      lastname: "",
      email: "",
      password: ""
    })
    history.push("/Login")
  }


  return (
    <div>
      <div className="register">
        <h2 style={{ textAlign: "center" }}>Register</h2>
        <form onSubmit={onSubmit} >
          <label htmlFor="firstname">Firstname</label>
          <input type="text" value={register.firstname} onChange={e => setRegister({ firstname: e.target.value })} /> <br />

          <label htmlFor="lastname">Lastname</label>
          <input type="text" style={{ marginLeft: -2 }} value={register.lastname} onChange={e => setRegister({ ...register, lastname: e.target.value })} /> <br />

          <label htmlFor="email">Email</label>
          <input type="email"  value={register.email} onChange={e => setRegister({ ...register, email: e.target.value })} /> <br />

          <label htmlFor="password">Password</label>
          <input type="password" value={register.password} onChange={e => setRegister({ ...register, password: e.target.value })} /> <br />

          <input type="submit" value="Submit" className="registerBtn" />
        </form>

      </div>
    </div>
  )
}

export default Register

