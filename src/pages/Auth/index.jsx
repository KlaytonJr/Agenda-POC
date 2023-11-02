import "./style.css"
import React, { useState } from 'react'
import Input from "../../components/Input"
import Button from "../../components/Button"

function Auth() {
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
        <div className="auth">
            <Input
                value={email}
                onChange={setEmail}
                label="E-mail"
                type="text"
                placeholder="Digite seu e-mail"       
            />
            
            <Input
                value={senha}
                onChange={setSenha}
                label="Senha"
                type="password"
                placeholder="Digite sua senha"       
            />

            <Button 
                texto={ehLogin ? "Login" : "Cadastre-se"}  
                onClick={submit}
            />

            <Button 
                texto={ehLogin ? "Cadastre-se" : "Login"} 
                onClick={() => setEhLogin(!ehLogin)}
                secondary
            />
        </div>
    )
}

export default Auth