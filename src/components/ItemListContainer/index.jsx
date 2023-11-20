import ItemList from "../ItemList"
import "./style.css"
import React, { useEffect, useState } from 'react'
import { useAuth } from "../../context/AuthProvider";
import { apiPost, apiGet } from '../../services/api'

function ItemListContainer() {
    const { auth } = useAuth();

    const [tarefas, setTarefas] = useState([]);

    async function pegarTarefas() {
        setTarefas([
            {
                _id: "6546db75e2fb4587f15efc34",
                title: "Jantar",
                user: "6546624161e86388105650c6",
                describe: "Não esquecer de levar a carteira e abastecer o carro",
                date_hour: "2023-11-01T11:00:00.000Z",
                __v: 0
            }
        ]);
        await apiGet(`/appointment/${auth}`)
            .then((response) => {
                setTarefas(response.data);
            })
            .catch((error) => {
                console.error('Erro:', error);
            })
    }

    async function adicionarTarefa() {
        await apiPost(`/appointment/${auth}`)
            .then((response) => {
                setTarefas(response);
            })
            .catch((error) => {
                console.error('Erro:', error);
            })
    }

    useEffect(() => {
        pegarTarefas();
    }, []);

  return (
    <div className="list-container">
        <div className="list-header">
            <h1>Trafes</h1>
            <button>Adicionar tarefa</button>
        </div>
        <ItemList tarefas={tarefas} setTarefas={setTarefas}/>
    </div>
  )
}

export default ItemListContainer