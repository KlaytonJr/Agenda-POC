import "./style.css"
import React from 'react'
import Logout from "../../../assets/icons/logout.svg"

function LogoutIcon() {
  return (
    <img className='logout-icon' src={Logout} />
  )
}

export default LogoutIcon