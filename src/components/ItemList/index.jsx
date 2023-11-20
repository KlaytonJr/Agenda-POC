import Item from "../Item"
import "./style.css"
import React from 'react'

function ItemList({ setTarefas,tarefas }) {
    return (
        <div className="item-list">
            { tarefas.map((tarefa) => <Item  informacoes={tarefa} tarefas={tarefas} setTarefas={setTarefas}
  />) }
        </div>
    )
}

export default ItemList