import Item from "../Item"
import "./style.css"
import React from 'react'

function ItemList({ tarefas }) {
    return (
        <div className="item-list">
            { tarefas.map((tarefa) => <Item  informacoes={tarefa}  />) }
        </div>
    )
}

export default ItemList