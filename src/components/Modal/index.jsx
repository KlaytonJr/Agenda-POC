import "./style.css"
import React, { useState } from 'react'
import Input from "../Input"
import Button from "../Button"

function Modal({ type, submit, cancel }) {
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [data, setData] = useState("");

    function enviar() {
        submit(
            type, 
            {
                title: titulo,
                describe: descricao,
                date_hour: data
            }
        )
    }

    return (
        <div className="modal-container">
            <div className="auth">
                <Input
                    value={titulo}
                    onChange={setTitulo}
                    label="Titulo"
                    type="text"
                    placeholder="Digite so titulo"       
                />
                
                <Input
                    value={descricao}
                    onChange={setDescricao}
                    label="Descrição"
                    type="text"
                    placeholder="Digite a descrição"       
                />
                
                <Input
                    value={data}
                    onChange={setData}
                    label="Data"
                    type="datetime-local"
                    placeholder="Digite a data"       
                />

                <Button 
                    texto={type === "criar" ? "Adicionar" : "Editar"}  
                    onClick={enviar}
                />

                <Button 
                    texto={"Cancelar"} 
                    onClick={cancel}
                    secondary
                />
            </div>
        </div>
    )
}

export default Modal