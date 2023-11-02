import "./style.css"
import React, { useState } from 'react'
import Input from "../../components/Input"
import Button from "../../components/Button"
import ItemListContainer from "../../components/ItemListContainer";

function Main() {
    const [ehLogin, setEhLogin] = useState(true);

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const submit = () => {
        if (ehLogin) {
            console.log("Login");
        } else {
            console.log("Registro");
        }
    }

    return (
        <div className="main">
            <ItemListContainer />
        </div>
    )
}

export default Main