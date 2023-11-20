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
            <button onClick={removeAuthToken}>
                <LogoutIcon/>
            </button>
        </div>
    )
}

export default NavBar