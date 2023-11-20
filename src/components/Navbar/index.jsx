import "./style.css"
import React from 'react'
import LogoutIcon from "./LogoutIcon"
import { useAuth } from "../../context/AuthProvider"

function NavBar() {
    const { setAuth } = useAuth();

    return (
        <div className="navbar flex bg-white-500">
            <p></p>
            <h1>My Agenda</h1>
            <LogoutIcon onClick={() => setAuth("")} />
        </div>
    )
}

export default NavBar