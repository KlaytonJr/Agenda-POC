import "./style.css"
import React from 'react'
import LogoutIcon from "./LogoutIcon"

function NavBar() {
  return (
    <div className="navbar">
        <h1>Coder Recrute</h1>
        <LogoutIcon />
    </div>
  )
}

export default NavBar