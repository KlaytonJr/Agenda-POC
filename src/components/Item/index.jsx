import "./style.css"
import React from 'react'
import { formatDate } from "../../utils/date"
import Pencil from '../../assets/icons/pencil.png'
import Trash from '../../assets/icons/trash.png'
import { apiDelete } from "../../services/api"
import { useAuth } from "../../context/AuthProvider"

function Item(props) {
    const { auth } = useAuth();

    async function deletarTarefa() {
        await apiDelete(`/appointment/${auth}/${props.informacoes._id}`)
            .then(() => {
                const updatedCart = props.tarefas.filter(item => item._id !== props.informacoes._id);
                    props.setTarefas(updatedCart);
            })
            .catch((error) => {
                console.error('Erro:', error);
            })
    }



    return (
        <div className="item">
            <div>
                <h3>Título</h3>
                <p>{props.informacoes.title}</p>
            </div>
            <div>
                <h3>Descrição</h3>
                <p>{props.informacoes.describe || "Sem detalhes da vaga"}</p>
            </div>
            <div>
                <h3>Data</h3>
                <p>{formatDate(props.informacoes.date_hour)}</p>
            </div>

            <div className="item-icons">
                <img src={Pencil} />
                <img src={Trash} onClick={deletarTarefa}/>
            </div>
        </div>
    )
}

export default Item