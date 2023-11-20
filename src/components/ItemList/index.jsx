import Item from "../Item"
import "./style.css"
import React from 'react'

function ItemList({ tarefas, setTarefas, editar }) {
    return (
        <div className="item-list">
            { tarefas.map((tarefa) => <Item key={tarefa._id} informacoes={tarefa} tarefas={tarefas} setTarefas={setTarefas} editar={editar} />) }
        </div>
    )
}

export default ItemList