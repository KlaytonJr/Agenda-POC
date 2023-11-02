import "./style.css"
import React from 'react'

function Item(props) {
    return (
        <div className="item">
            <h3>{props.informacoes.title}</h3>
            <h4>{props.informacoes.sallary || "R$ 00,00"}</h4>
            <p>{props.informacoes.description || "Sem detalhes da vaga"}</p>
        </div>
    )
}

export default Item