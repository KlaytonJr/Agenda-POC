import "./style.css"
import React, { useState } from 'react'
import Input from "../../components/Input"
import Button from "../../components/Button"
import { apiPost } from "../../services/api";
import { useAuth } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";

function Auth() {
    const { setAuth } = useAuth();
    const navigate = useNavigate();
    const [ehLogin, setEhLogin] = useState(true);

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const submit = async () => {
        if (ehLogin) {
            setAuth("1234")
            navigate("/")
            // await apiPost('/auth', {
            //     email: email,
            //     password: senha
            // })
            //     .then((response) => {
            //         setAuth(response.token.id)
            //         navigate("/")
            //     })
            //     .catch((error) => {
            //         console.error('Erro:', error);
            //     })
        } else {
            await apiPost('/register', {
                email: email,
                password: senha,
            })
                .then((response) => {
                    console.log("Registro");
                    setEhLogin(true);
                })
                .catch((error) => {
                    console.error('Erro:', error);
                })
        }
    }

    return (
        <div className="auth-container">
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
        </div>
    )
}

export default Auth