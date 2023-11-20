import "./style.css"
import React from 'react'
import LogoutIcon from "./LogoutIcon"
import { useAuth } from "../../context/AuthProvider"

function NavBar() {
    const { removeAuthToken } = useAuth();

    return (
        <div className="navbar flex bg-white-500">
            <p></p>
            <h1>My Agenda</h1>
            <LogoutIcon onClick={() => removeAuthToken()} />
        </div>
    )
}

export default NavBar