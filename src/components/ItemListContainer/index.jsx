import ItemList from "../ItemList"
import "./style.css"
import React, { useEffect, useState } from 'react'
import { useAuth } from "../../context/AuthProvider";
import { apiPost, apiGet, apiPatch } from '../../services/api'
import Modal from "../Modal";

function ItemListContainer() {
    const { auth } = useAuth();

    const [tarefas, setTarefas] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [type, setType] = useState("");
    const [id, setId] = useState("");

    async function pegarTarefas() {
        await apiGet(`/appointment/${auth}`)
            .then((response) => {
                setTarefas(response.data);
            })
            .catch((error) => {
                console.error('Erro:', error);
            })
    }

    async function submit(type, content) {    
        if (type === "criar") {
            await apiPost(`/appointment/${auth}`, content)
                .then((response) => {
                    setTarefas([...tarefas, response.data]);
                })
                .catch((error) => {
                    console.error('Erro:', error);
                })

            setShowModal(false);
        } else {
            await apiPatch(`/appointment/${auth}/${id}`, content)
                .then((response) => {
                    const copyTarefas = [...tarefas]
                    let indexToUpdate = copyTarefas.findIndex(item => item._id === response.data._id);

                    if (indexToUpdate !== -1) copyTarefas[indexToUpdate] = response.data;
                    setTarefas(copyTarefas);
                })
                .catch((error) => {
                    console.error('Erro:', error);
                })
            
            setId("");
            setShowModal(false);
        }
    }

    function cancel() {
        setShowModal(false);
    }

    function editar(id) {
        console.log('Editar',id)
        setId(id);
        setType('Editar')
        setShowModal(true);
    }

    useEffect(() => {
        pegarTarefas();
    }, []);

  return (
    <div className="list-container">
        <div className="list-header">
            <h1>Tarefas</h1>
            <button onClick={() => {
                setType("criar")
                setShowModal(true);
            }}>Adicionar tarefa</button>
        </div>
        <ItemList tarefas={tarefas} setTarefas={setTarefas} editar={editar} />

        {showModal && <Modal type={type} submit={submit} cancel={cancel} id={id} />}
    </div>
  )
}

export default ItemListContainer