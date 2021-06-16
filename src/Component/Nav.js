import React from 'react'
import { NavLink } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";



function Nav() {
  const reDux = useSelector((state) => state.info);
  let dispatch = useDispatch()
  const logout = ()=>{
    dispatch({
      type:"LOGOUT",
    })
  }
  const nav = ()=>{
    if (reDux) {
      return (
        <nav className="blue darken-2">
          <span style={{ fontSize: "40px" }}>Finder</span>
          <div style={{ float: "right" }}>
              <NavLink to="/" style={{ marginRight: "10px" }} onClick={logout}>Logout</NavLink>
          </div>
        </nav>
      )
    } else {
      return (
        <nav className="blue darken-2">
          <span style={{ fontSize: "40px" }}>Finder</span>
          <div style={{ float: "right" }}>
            <NavLink to="/" style={{ marginRight: "10px" }}>Home</NavLink>
            <NavLink to="/Login" style={{ marginRight: "10px" }}>Login</NavLink>
            <NavLink to="/Register" style={{ marginRight: "10px" }}>Register</NavLink>
          </div>
        </nav>
      )
  
    }
  }


  return (
      <div>
        {nav()}
      </div>
  )
}

export default Nav;
